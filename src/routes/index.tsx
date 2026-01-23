import { query, createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { AppleIcon, CpuIcon } from "lucide-solid";

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
        <img src="/fontcluster-icon.png" alt="Logo" class="w-24 h-24 drop-shadow-md" />
        <img src="/fontcluster-text.png" alt="FontCluster" class="h-12 dark:invert drop-shadow-md" />
      </div>

      <div class="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
        <Show when={latestRelease()} fallback={<div class="h-16 flex items-center justify-center text-slate-400 dark:text-zinc-500 italic">Checking for latest version...</div>}>
          <a
            href={getDmgUrl("aarch64")}
            class="group w-full sm:w-1/2 flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/50 shadow-xs backdrop-blur-sm"
          >
            <div class="flex flex-col items-start text-left">
              <span class="text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase mb-1">Download</span>
              <span class="text-lg font-bold text-slate-800 dark:text-white leading-tight">Apple Silicon</span>
              <span class="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">M1, M2, M3</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-zinc-700/50 text-slate-600 dark:text-white group-hover:bg-blue-500 group-hover:text-white transition-colors duration-100">
              <AppleIcon size={24} />
            </div>
          </a>

          <a
            href={getDmgUrl("x64")}
            class="group w-full sm:w-1/2 flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/50 shadow-xs backdrop-blur-sm"
          >
            <div class="flex flex-col items-start text-left">
              <span class="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase mb-1">Download</span>
              <span class="text-lg font-bold text-slate-800 dark:text-white leading-tight">Intel Chip</span>
              <span class="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">Older Mac models</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-zinc-700/50 text-slate-600 dark:text-white group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-100">
              <CpuIcon size={24} />
            </div>
          </a>
        </Show>
      </div>

      <Show when={latestRelease()}>
        <p class="mt-16 text-xs font-medium text-slate-400 dark:text-zinc-500">
          Latest: {latestRelease().tag_name}
        </p>
      </Show>
    </main>
  );
}
