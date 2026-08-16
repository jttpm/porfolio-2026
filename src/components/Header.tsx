import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../data/content";
import type { SectionId } from "../types";

interface HeaderProps {
  active: SectionId;
  onNav: (id: SectionId) => void;
}

export default function Header({ active, onNav }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center gap-5 px-6 py-3.5">
        {/* Left: personal icon / brand */}
        <button
          className="focus-ring mr-auto flex items-center gap-2.5 rounded"
          onClick={() => onNav("home")}
          aria-label="Go to home"
        >
          <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-[conic-gradient(from_180deg,theme(colors.green.DEFAULT),transparent_65%,theme(colors.green.DEFAULT))] p-[2px]">
            <img
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              className="h-full w-full rounded-full border-2 border-bg object-cover"
            />
          </span>
          <span className="flex flex-col items-start">
            <span className="font-mono text-[13px] font-semibold text-ink">jett.magsino</span>
            <span className="font-mono text-[11px] text-faint">~/portfolio</span>
          </span>
        </button>

        {/* Center-left: nav tabs */}
        <nav className="hidden gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className={`focus-ring flex items-center gap-[7px] rounded-md px-3 py-2 font-mono text-[13px] transition-colors duration-150 ${
                  isActive ? "text-green" : "text-dim hover:bg-surface hover:text-ink"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                    isActive ? "bg-green shadow-glow" : "bg-faint"
                  }`}
                  aria-hidden="true"
                />
                {item.label}
                <span className={isActive ? "text-[11px] text-green-soft" : "text-[11px] text-faint"}>
                  {item.file}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right: Say hi button */}
        <button
          onClick={() => onNav("contact")}
          className="focus-ring hidden items-center gap-1.5 whitespace-nowrap rounded-lg border border-green
            bg-green px-4 py-[9px] font-mono text-[13px] font-semibold text-[#05130c]
            transition-transform duration-150 ease-out hover:-translate-y-px hover:shadow-glow-lg md:flex"
        >
          Say hi <span className="font-bold">-&gt;</span>
        </button>

        {/* Mobile menu toggle */}
        <button
          className="focus-ring flex h-[38px] w-[38px] items-center justify-center rounded-md border border-border bg-surface text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col border-t border-border px-4 pb-3.5 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNav(item.id);
                setOpen(false);
              }}
              className={`focus-ring rounded px-1.5 py-2.5 text-left font-mono text-sm ${
                active === item.id ? "text-green" : "text-dim"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNav("contact");
              setOpen(false);
            }}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-green px-4 py-[9px]
              font-mono text-[13px] font-semibold text-[#05130c]"
          >
            Say hi <span className="font-bold">-&gt;</span>
          </button>
        </div>
      )}
    </header>
  );
}
