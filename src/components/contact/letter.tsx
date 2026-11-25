"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const topics = [
  { label: "New project", subject: "New project" },
  { label: "Support", subject: "Support" },
  { label: "Ez Prep", subject: "Ez Prep" },
  { label: "Something else", subject: "Hello from the website" },
];

const labelClass =
  "block font-mono text-[11px] leading-[normal] tracking-[0.1em] text-[#4a5262] uppercase";
const fieldClass =
  "block w-full rounded-sm bg-transparent text-[17px] text-ink placeholder:text-[#5b6472] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

/** Mail bodies use CRLF line breaks. */
function mailHref(subject: string, name: string, message: string) {
  const body = [
    "Hi Clustream,",
    "",
    ...(message ? [message.replace(/\n/g, "\r\n"), ""] : []),
    name ? `- ${name}` : "",
  ].join("\r\n");

  return `${siteConfig.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * A letter-styled draft. Nothing is sent or stored here: the button hands the
 * text to the visitor's own mail app.
 */
export function Letter() {
  const [topic, setTopic] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      aria-label="New message"
      onSubmit={(event) => event.preventDefault()}
      className="relative flex w-full max-w-[560px] flex-col gap-[22px] justify-self-center rounded-[22px] bg-[#f3eee6] p-[clamp(22px,3.2vw,38px)] text-ink [color-scheme:light] shadow-[0_40px_90px_rgb(0_0_0/0.55),inset_0_0_0_1px_rgb(255_255_255/0.4)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className={labelClass}>New message</span>
          <span className="font-display text-[19px] leading-[normal] font-semibold tracking-[-0.015em] break-all">
            To: {siteConfig.email}
          </span>
        </div>
        {/* Postmark with the logo. */}
        <svg
          aria-hidden
          viewBox="0 0 64 64"
          className="-mt-1.5 mb-[5px] size-16 shrink-0"
        >
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke="#c98a2e"
            strokeWidth="1.5"
            strokeDasharray="3 4"
          />
          <rect
            x="16"
            y="16"
            width="32"
            height="32"
            rx="9"
            className="fill-ink"
          />
          <path
            d="M38.5 25A9 9 0 1 0 38.5 39"
            fill="none"
            className="stroke-sand"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="39" cy="32" r="2.2" className="fill-sand" />
        </svg>
      </div>
      <fieldset>
        <legend className={`${labelClass} mb-2.5`}>What is this about?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((option, index) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={index === topic}
              onClick={() => setTopic(index)}
              className="min-h-11 cursor-pointer rounded-full border border-ink/30 px-4 text-sm font-medium text-[#2b3140] aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-[#f3eee6]"
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="contact-name" className={`${labelClass} mb-1.5`}>
          Your name (optional)
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Who is writing?"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`${fieldClass} border-b border-ink/28 py-2.5 leading-[normal]`}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={`${labelClass} mb-1.5`}>
          Message
        </label>
        {/* Ruled lines scroll with the text. */}
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Hi Clustream, we would like to build..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} mb-1 min-h-40 resize-y bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,rgb(10_12_16/0.15)_31px,rgb(10_12_16/0.15)_32px)] bg-local leading-8`}
        />
      </div>
      <div className="flex flex-col gap-3">
        <a
          href={mailHref(topics[topic].subject, name, message)}
          className="inline-flex h-[54px] items-center justify-center gap-2.5 rounded-[14px] bg-ink font-semibold text-white transition-colors hover:bg-surface-2"
        >
          Open in your mail app
          <ArrowRight aria-hidden className="size-[18px] text-sand" />
        </a>
        <p className="text-[13.5px] leading-normal text-[#4a5262]">
          This opens your email app with everything filled in. Nothing is stored
          on this page.
        </p>
      </div>
    </form>
  );
}
