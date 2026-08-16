import { useCallback, useState } from "react";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";
import { PROFILE } from "../data/content";
import type { ContactForm } from "../types";

type Status = "idle" | "sent";

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [human, setHuman] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update =
    (key: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!human) {
        setError("Please confirm you're human before sending.");
        return;
      }
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        setError("All fields are required.");
        return;
      }

      setError("");
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`,
      );
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    },
    [form, human],
  );

  return (
    <section id="contact" className="mx-auto max-w-[1120px] px-6 py-[88px]">
      <div className="mb-10 max-w-[640px]">
        <span className="font-mono text-[13px] text-green">contact.tsx</span>
        <h2 className="mb-3.5 mt-2.5 font-mono text-[26px] font-bold tracking-tight sm:text-[30px] lg:text-[34px]">
          Let's build something
        </h2>
        <p className="max-w-[560px] text-[15.5px] text-dim">
          Have a role, a project, or just want to talk architecture? Send a
          message below or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Direct contact info */}
        <div className="flex flex-col gap-4 self-start">
          <a
            className="focus-ring flex items-center gap-2.5 rounded-[9px] border border-border px-3.5 py-3
              font-mono text-sm text-dim transition-colors duration-150 hover:border-green-soft hover:text-green"
            href={`mailto:${PROFILE.email}`}
          >
            <Mail size={16} /> {PROFILE.email}
          </a>
          <a
            className="focus-ring flex items-center gap-2.5 rounded-[9px] border border-border px-3.5 py-3
              font-mono text-sm text-dim transition-colors duration-150 hover:border-green-soft hover:text-green"
            href={`tel:${PROFILE.phoneHref}`}
          >
            <Phone size={16} /> {PROFILE.phone}
          </a>
          <span className="flex items-center gap-2.5 rounded-[9px] border border-border px-3.5 py-3 font-mono text-sm text-dim">
            <MapPin size={16} /> {PROFILE.location}
          </span>
        </div>

        {/* Form */}
        <form className="panel" onSubmit={handleSubmit}>
          <div className="panel-bar">
            <span className="panel-dot" /> ./send-message.sh
          </div>

          <div className="flex flex-col gap-3.5 p-5">
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-green-soft">name</span>
              <input
                className="field-input"
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your Name"
                required
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-green-soft">email</span>
              <input
                className="field-input"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="your@email.com"
                required
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-green-soft">message</span>
              <textarea
                className="field-input min-h-[100px] resize-y"
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about the project..."
                required
              />
            </label>

            {/* "I am human" captcha */}
            <label className="flex cursor-pointer items-center gap-2.5 px-0.5 py-1">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={human}
                onChange={(e) => {
                  setHuman(e.target.checked);
                  if (error) setError("");
                }}
              />
              <span
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[5px] border
                  border-border-soft bg-bg text-green peer-checked:border-green peer-checked:shadow-glow"
              >
                {human && <ShieldCheck size={14} />}
              </span>
              <span className="font-mono text-[13.5px] text-dim">
                I am human
              </span>
            </label>

            {error && (
              <p className="m-0 font-mono text-[13px] text-red-400">{error}</p>
            )}
            {status === "sent" && !error && (
              <p className="m-0 font-mono text-[13px] text-green">
                &gt; message queued — your mail client should now be open.
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={!human}
            >
              <Send size={16} /> Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
