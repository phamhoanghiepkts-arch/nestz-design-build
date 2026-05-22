import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const leadsSheetRange = "Leads!A:G";
const allowedNeeds = new Set(["Cải tạo", "Nhà phố", "Nội thất", "Thi công trọn gói"]);

type LeadRequestBody = {
  name?: unknown;
  phone?: unknown;
  area?: unknown;
  need?: unknown;
  note?: unknown;
  sourcePage?: unknown;
  website?: unknown;
};

type LeadsResponse = {
  success: boolean;
  error?: string;
};

function jsonResponse(body: LeadsResponse, status: number) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

function requiredText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const text = value.trim();
  return text && text.length <= maxLength ? text : null;
}

function optionalText(value: unknown, maxLength: number) {
  if (value === undefined || value === null || value === "") {
    return "";
  }

  return requiredText(value, maxLength);
}

export async function POST(request: Request) {
  let body: LeadRequestBody;

  try {
    const payload = (await request.json()) as unknown;

    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return jsonResponse({ success: false, error: "Invalid JSON body." }, 400);
    }

    body = payload as LeadRequestBody;
  } catch {
    return jsonResponse({ success: false, error: "Invalid JSON body." }, 400);
  }

  // Honeypot: bots often fill hidden fields. Return success without storing spam.
  if (typeof body.website === "string" && body.website.trim()) {
    return jsonResponse({ success: true }, 200);
  }

  const name = requiredText(body.name, 120);
  const phone = requiredText(body.phone, 40);
  const area = requiredText(body.area, 160);
  const need = requiredText(body.need, 80);
  const note = optionalText(body.note, 1000);
  const sourcePage = optionalText(body.sourcePage, 240) || "/";

  if (!name || !phone || !area || !need || note === null || !allowedNeeds.has(need)) {
    return jsonResponse(
      { success: false, error: "Missing or invalid lead fields." },
      400
    );
  }

  // Keep these values in `.env.local`; this route is the only code that reads them.
  const rawEnv = {
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    clientEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    privateKey: process.env.GOOGLE_SHEETS_PRIVATE_KEY
  };
  const missingEnv = [
    !rawEnv.spreadsheetId && "GOOGLE_SHEETS_SPREADSHEET_ID",
    !rawEnv.clientEmail && "GOOGLE_SHEETS_CLIENT_EMAIL",
    !rawEnv.privateKey && "GOOGLE_SHEETS_PRIVATE_KEY"
  ].filter(Boolean);

  if (missingEnv.length) {
    console.error("NESTZ leads API missing Google Sheets env variables.", {
      missingEnv
    });

    return jsonResponse(
      { success: false, error: "Google Sheets lead capture is not configured." },
      500
    );
  }

  const spreadsheetId = rawEnv.spreadsheetId;
  const clientEmail = rawEnv.clientEmail;
  const privateKey = rawEnv.privateKey?.replace(/\\n/g, "\n");
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  try {
    await auth.authorize();
  } catch (error) {
    console.error("NESTZ leads API Google auth failed.", error);

    return jsonResponse(
      { success: false, error: "Google Sheets authentication failed." },
      500
    );
  }

  try {
    // Setup: share the spreadsheet with the service account and create a `Leads` tab.
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: leadsSheetRange,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [new Date().toISOString(), name, phone, area, need, note, sourcePage]
        ]
      }
    });

    return jsonResponse({ success: true }, 201);
  } catch (error) {
    console.error("NESTZ leads API sheet append failed.", error);

    return jsonResponse(
      { success: false, error: "Unable to append lead to Google Sheets." },
      500
    );
  }
}
