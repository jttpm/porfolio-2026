import { Download } from "lucide-react";
import { SKILL_GROUPS, EXPERIENCE, EDUCATION, PROFILE } from "../data/content";
import type { ExperienceItem } from "../types";
import { downloadResume } from "../utils/downloadResume";

function ExperienceRow({
  item,
  index,
  total,
}: {
  item: ExperienceItem;
  index: number;
  total: number;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex w-3.5 flex-shrink-0 flex-col items-center">
        <span
          className={`mt-1 h-3 w-3 rounded-full border-2 ${
            item.current
              ? "border-green bg-green shadow-glow"
              : "border-faint bg-border-soft"
          }`}
        />
        {index < total - 1 && (
          <span className="my-1 min-h-[40px] w-0.5 flex-1 bg-border" />
        )}
      </div>

      <div className="flex-1 pb-[30px]">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-[5px] bg-green/10 px-[7px] py-0.5 font-mono text-[12.5px] text-green-soft">
            {item.hash}
          </span>
          <span className="font-mono text-[15px] font-semibold text-ink">
            {item.role}
          </span>
          {item.current && (
            <span className="rounded bg-green px-[7px] py-0.5 font-mono text-[10.5px] font-bold tracking-wide text-[#05130c]">
              HEAD
            </span>
          )}
        </div>

        <div className="mb-2.5 mt-1.5 flex flex-wrap gap-1.5 font-mono text-[12.5px] text-faint">
          <span>{item.company}</span>
          <span className="text-faint">·</span>
          <span>{item.place}</span>
          <span className="text-faint">·</span>
          <span>{item.period}</span>
        </div>

        {item.projects.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {item.projects.map((p) => (
              <span className="tag" key={p}>
                {p}
              </span>
            ))}
          </div>
        )}

        <ul className="list-disc space-y-1.5 pl-[18px] text-sm text-dim">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1120px] px-6 py-[88px]">
      <div className="mb-10 max-w-[640px]">
        <span className="font-mono text-[13px] text-green">about.tsx</span>
        <h2 className="mb-3.5 mt-2.5 font-mono text-[26px] font-bold tracking-tight sm:text-[30px] lg:text-[34px]">
          Who's writing the code
        </h2>
        <p className="max-w-[560px] text-[15.5px] text-dim">
          I'm Jett — a software engineer from Bulacan, Philippines, who builds
          dependable products with Next.js. I care about clean architecture,
          thorough code review, and systems that stay calm in production.
        </p>
      </div>

      {/* Skills */}
      <div className="panel mb-[22px]">
        <div className="panel-bar">
          <span className="panel-dot" /> ls -la ./skills
        </div>
        <div className="grid grid-cols-1 gap-[22px] p-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g) => (
            <div key={g.cat}>
              <span className="mb-2.5 block font-mono text-xs text-green">
                ./{g.cat}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span className="pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="panel mb-[22px]">
        <div className="panel-bar">
          <span className="panel-dot" /> git log --oneline --graph experience
        </div>
        <div className="px-5 pb-1 pt-5">
          {EXPERIENCE.map((item, i) => (
            <ExperienceRow
              item={item}
              index={i}
              total={EXPERIENCE.length}
              key={item.hash}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="panel">
        <div className="panel-bar">
          <span className="panel-dot" /> cat ./education.md
        </div>
        <div className="flex flex-col gap-4 px-5 pb-[22px] pt-[18px]">
          {EDUCATION.map((edu) => (
            <div key={edu.degree} className="flex flex-col gap-1">
              <span className="text-[14.5px] font-semibold text-ink">
                {edu.degree}
              </span>
              <span className="font-mono text-[12.5px] text-faint">
                {edu.school} · {edu.location} · {edu.years}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() =>
            downloadResume(PROFILE.resumeUrl, PROFILE.resumeFileName)
          }
        >
          <Download size={16} /> Download full résumé (PDF)
        </button>
      </div>
    </section>
  );
}
