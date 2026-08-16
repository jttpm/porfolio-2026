import { PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1120px] items-center gap-2 border-t border-border px-6 pb-[60px] pt-[30px] font-mono text-[12.5px] text-faint">
      <span>© {new Date().getFullYear()} {PROFILE.name}</span>
      <span className="text-border-soft">/</span>
      <span>built with React + TypeScript</span>
    </footer>
  );
}
