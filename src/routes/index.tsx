import { query, createAsync } from "@solidjs/router";
import { Show } from "solid-js";

const fetchLatestRelease = query(async () => {
  const response = await fetch("https://api.github.com/repos/MugiSus/fontcluster/releases/latest");
  if (!response.ok) throw new Error("Failed to fetch latest release");
  return response.json();
}, "latest-release");

export default function Home() {
  const latestRelease = createAsync(() => fetchLatestRelease());

  const getDmgUrl = (arch: "aarch64" | "x64") => {
    const release = latestRelease();
    if (!release) return "#";
    const asset = release.assets.find((a: any) => a.name.endsWith(`${arch}.dmg`));
    return asset?.browser_download_url || "#";
  };

  return (
    <main class="text-center mx-auto p-4 bg-linear-to-b from-slate-50 to-slate-100 py-2 dark:from-zinc-950 dark:to-zinc-900 min-h-screen flex flex-col items-center justify-center">
      <div class="flex gap-4 items-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <img src="/fontcluster-icon.png" alt="Logo" class="w-24 h-24 drop-shadow-2xl" />
        <img src="/fontcluster-text.png" alt="FontCluster" class="h-12 dark:invert drop-shadow-md" />
      </div>

      <div class="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
        <Show when={latestRelease()} fallback={<div class="h-16 flex items-center justify-center text-slate-400 dark:text-zinc-500 italic">Checking for latest version...</div>}>
          <a
            href={getDmgUrl("aarch64")}
            class="group w-full sm:w-1/2 flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/50 shadow-xs hover:shadow-md transition-all duration-100 backdrop-blur-sm"
          >
            <div class="flex flex-col items-start text-left">
              <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase mb-1">Download</span>
              <span class="text-lg font-bold text-slate-800 dark:text-white leading-tight">Apple Silicon</span>
              <span class="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">M1, M2, M3 series</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-zinc-700/50 text-slate-600 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-3.5 1.44-4.5 1.44S11.12 5 8.94 5a4.91 4.91 0 0 0-5 5.06c0 4.22 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z"/><path d="M11.88 5c.44-2 1.44-3.5 3-4.5"/></svg>
            </div>
          </a>

          <a
            href={getDmgUrl("x64")}
            class="group w-full sm:w-1/2 flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/50 shadow-xs hover:shadow-md transition-all duration-100 backdrop-blur-sm"
          >
            <div class="flex flex-col items-start text-left">
              <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">Download</span>
              <span class="text-lg font-bold text-slate-800 dark:text-white leading-tight">Intel Chip</span>
              <span class="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">Older Mac models</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-zinc-700/50 text-slate-600 dark:text-white group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/></svg>
            </div>
          </a>
        </Show>
      </div>

      <Show when={latestRelease()}>
        <p class="mt-12 text-[11px] font-medium text-slate-400 dark:text-zinc-500 animate-in fade-in duration-1000 delay-500">
          Latest: <span class="font-mono bg-slate-200/50 dark:bg-zinc-800 px-1.5 py-1 rounded text-slate-600 dark:text-zinc-300">{latestRelease().tag_name}</span>
        </p>
      </Show>
    </main>
  );
}
