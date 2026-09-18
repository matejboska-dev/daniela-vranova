"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import {
  DropZone,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/ui/TextField";
import { cn } from "@/lib/cn";
import type { Content } from "@/content";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Odesílání jde přímo z prohlížeče na Web3Forms (žádný vlastní backend).
 * Přístupový klíč je párovaný s cílovou adresou na straně Web3Forms — proto
 * je nutný `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` v `.env.local` i v proměnných
 * prostředí hostingu. Bez klíče formulář nahlásí chybu, ale web dál běží.
 */
export function ContactForm({ contact }: { contact: Content["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    formData.set("access_key", accessKey);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success: boolean };

      if (result.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn(
        "space-y-6 rounded-[32px] border border-white/15 bg-white/[0.07] p-6",
        "shadow-[0_25px_70px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
        "backdrop-blur-2xl sm:p-8 md:p-10 lg:col-span-7",
      )}
    >
      <input type="hidden" name="subject" value="Nová poptávka z webu danielavranova.cz" />

      {/* Honeypot pro Web3Forms — bot pole vyplní, člověk ho nevidí ani neslyší. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id="contact-name"
          name="name"
          label={contact.fields.name.label}
          placeholder={contact.fields.name.placeholder}
          autoComplete="name"
          required
        />
        <TextField
          id="contact-email"
          name="email"
          type="email"
          label={contact.fields.email.label}
          placeholder={contact.fields.email.placeholder}
          autoComplete="email"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          id="contact-document"
          name="typ-dokumentu"
          label={contact.fields.documentType.label}
          placeholder={contact.fields.documentType.placeholder}
          options={contact.fields.documentType.options}
        />
        {/*
         * type="date" otevře nativní kalendář na mobilu i na desktopu.
         * Vlastní datepicker by přidal knihovnu kvůli jednomu poli.
         */}
        <TextField
          id="contact-deadline"
          name="termin"
          type="date"
          label={contact.fields.deadline.label}
          hint={contact.fields.deadline.hint}
        />
      </div>

      <TextAreaField
        id="contact-message"
        name="message"
        label={contact.fields.message.label}
        placeholder={contact.fields.message.placeholder}
        required
      />

      <DropZone
        id="contact-upload"
        label={contact.upload.label}
        dropText={contact.upload.dropText}
        hint={contact.upload.hint}
      />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? contact.status.sending : contact.submitLabel}
        </Button>

        {/* Stejný důvod jako v sekci O mně: muted na `--bg-alt` je 4,21 : 1. */}
        <p className="max-w-[38ch] text-small text-ink-2 [.on-deep_&]:text-on-deep-2">
          {contact.privacyNote}
        </p>
      </div>

      {status === "success" ? (
        <p
          role="status"
          className="rounded-md bg-white px-4 py-3 text-small font-medium text-success"
        >
          {contact.status.success}
        </p>
      ) : null}

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-md bg-white px-4 py-3 text-small font-medium text-error"
        >
          {contact.status.error}
        </p>
      ) : null}
    </form>
  );
}
