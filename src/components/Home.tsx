import { useEffect, useState } from "react";
import { Download, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/content";
import type { SectionId } from "../types";
import { downloadResume } from "../utils/downloadResume";

interface HomeProps {
  onNav: (id: SectionId) => void;
}

function useTypedText(text: string, speed = 42, startDelay = 300) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { out, done };
}

export default function Home({ onNav }: HomeProps) {
  const { out, done } = useTypedText("whoami", 90, 500);

  return (
    <section id="home" className="mx-auto max-w-[1120px] px-6 pb-[88px] pt-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div>
          <p className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-[12.5px] text-dim">
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-green shadow-glow" />
            available for new projects
          </p>

          <h1 className="mb-5 font-mono text-[34px] font-bold leading-[1.12] tracking-tight sm:text-[42px] lg:text-[52px]">
            Building resilient
            <br />
            <span className="text-green">full-stack systems</span>
            <br />
            end to end.
          </h1>

          <p className="mb-[30px] max-w-[480px] text-[16.5px] text-dim">
            {PROFILE.title} designing, shipping, and operating customer-facing
            platforms across insurance, telco, and fintech.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() =>
                downloadResume(PROFILE.resumeUrl, PROFILE.resumeFileName)
              }
            >
              <Download size={16} /> Download Résumé
            </button>
            <button className="btn btn-ghost" onClick={() => onNav("contact")}>
              Get in touch <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Terminal */}
        <div
          className="rounded-xl border border-border bg-bg-elev shadow-terminal"
          role="img"
          aria-label="Terminal introduction"
        >
          <div className="flex items-center gap-2 border-b border-border bg-surface px-3.5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a3a31]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3f5c4c]" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-soft" />
            <span className="ml-1.5 font-mono text-xs text-faint">
              jett@portfolio: ~
            </span>
          </div>

          <div className="min-h-[220px] p-5 font-mono text-[13.5px]">
            <p className="mb-1 text-ink">
              <span className="text-green">jett@portfolio:~$</span> {out}
              {!done && <span className="animate-blink text-green">▍</span>}
            </p>

            {done && (
              <div>
                <p className="mb-1.5 animate-fade-in text-dim">
                  &gt; {PROFILE.name}
                </p>
                <p className="mb-1.5 animate-fade-in text-dim">
                  &gt; {PROFILE.title}
                </p>
                <p className="mb-1.5 animate-fade-in text-dim">
                  &gt; {PROFILE.location}
                </p>
                <p className="h-1" />
                <p className="mb-1.5 text-ink">
                  <span className="text-green">jett@portfolio:~$</span> cat
                  stack.log
                </p>
                <p className="mb-1.5 animate-fade-in text-dim">
                  &gt; React · Node · Spring Boot · ASP.NET Core · AWS · GCP ·
                  Docker · Kubernetes
                </p>
                <p className="h-1" />
                <p className="text-ink">
                  <span className="text-green">jett@portfolio:~$</span>{" "}
                  <span className="animate-blink text-green">▍</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
