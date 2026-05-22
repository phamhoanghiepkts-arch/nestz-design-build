"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

type LeadFormValues = {
  name: string;
  phone: string;
  area: string;
  need: string;
  note: string;
  website: string;
};

const initialValues: LeadFormValues = {
  name: "",
  phone: "",
  area: "",
  need: "",
  note: "",
  website: ""
};

type LeadsApiResponse = {
  success?: boolean;
  error?: string;
};

export function LeadForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const form = siteContent.leadForm;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...values,
          sourcePage: `${window.location.pathname}${window.location.hash}`
        })
      });

      const result = (await response.json().catch(() => null)) as LeadsApiResponse | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Lead submission failed.");
      }

      setStatus("success");
      setErrorMessage("");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : "Chưa gửi được thông tin."
      );
    }
  }

  function updateValue(field: keyof LeadFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label
        className="absolute left-[-10000px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        Website
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          {form.fields.name}
          <input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            required
            className="min-h-12 border border-stone-300 bg-paper px-4 py-3 text-base outline-none transition focus:border-clay focus:bg-white"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          {form.fields.phone}
          <input
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            required
            className="min-h-12 border border-stone-300 bg-paper px-4 py-3 text-base outline-none transition focus:border-clay focus:bg-white"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        {form.fields.area}
        <input
          name="area"
          placeholder={form.fields.areaPlaceholder}
          value={values.area}
          onChange={(event) => updateValue("area", event.target.value)}
          required
          className="min-h-12 border border-stone-300 bg-paper px-4 py-3 text-base outline-none transition focus:border-clay focus:bg-white"
        />
      </label>

      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold text-charcoal">{form.fields.need}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {form.fields.needs.map((need) => (
            <label
              key={need}
              className="flex min-h-12 cursor-pointer items-center gap-3 border border-stone-300 bg-paper px-4 py-3 text-sm font-semibold text-charcoal transition has-[:checked]:border-clay has-[:checked]:bg-clay has-[:checked]:text-paper"
            >
              <input
                type="radio"
                name="need"
                value={need}
                checked={values.need === need}
                onChange={(event) => updateValue("need", event.target.value)}
                required
                className="size-4 accent-clay"
              />
              {need}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        {form.fields.note}
        <textarea
          name="note"
          rows={5}
          value={values.note}
          onChange={(event) => updateValue("note", event.target.value)}
          className="resize-none border border-stone-300 bg-paper px-4 py-3 text-base outline-none transition focus:border-clay focus:bg-white"
          placeholder={form.fields.notePlaceholder}
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 min-h-14 border border-clay bg-clay px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-paper transition hover:border-charcoal hover:bg-charcoal disabled:cursor-wait disabled:border-stone-400 disabled:bg-stone-400"
      >
        {status === "loading"
          ? "Đang gửi thông tin..."
          : status === "success"
            ? form.submittedLabel
            : form.submitLabel}
      </button>
      <p
        className={`text-sm leading-6 ${
          status === "error" ? "text-red-700" : "text-stone-600"
        }`}
        aria-live="polite"
      >
        {status === "success"
          ? form.submittedText
          : status === "error"
            ? `${errorMessage} Bạn thử lại hoặc gọi NESTZ để trao đổi trực tiếp.`
            : form.helperText}
      </p>
    </form>
  );
}
