import { query, createAsync, A } from "@solidjs/router";
import { Show } from "solid-js";
import { AppleIcon, ArrowRight, CpuIcon } from "lucide-solid";

const fetchLatestRelease = query(async () => {
  const response = await fetch("https://api.github.com/repos/MugiSus/fontcluster-releases/releases/latest");
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
    <main
      class="text-center mx-auto p-4 py-2 min-h-svh flex flex-col gap-4 items-center justify-center"
    >
      <div class="flex gap-4 items-center mr-4">
        <img src="/fontcluster-icon.png" alt="Logo" class="size-24 drop-shadow-md" />
        <img src="/fontcluster-text.png" alt="FontCluster" class="h-9 invert drop-shadow-md" />
      </div>

      <div class="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-2xl px-4 mt-4">
        <Show when={latestRelease()} fallback={<div class="h-16 flex items-center justify-center text-zinc-500 italic">Checking for latest version...</div>}>
          <a
            href={getDmgUrl("aarch64")}
            class="group max-w-full w-72 flex items-center justify-between p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700 shadow-xs backdrop-blur-sm"
          >
            <div class="flex flex-col items-start text-left">
              <span class="text-[10px] font-bold uppercase mb-1">Download</span>
              <span class="text-lg font-bold text-white leading-tight">Apple Silicon</span>
              <span class="text-xs text-zinc-400 mt-1.5">{latestRelease().tag_name}</span>
            </div>
            <div class="p-3 rounded-lg bg-zinc-700/50 text-white group-hover:bg-white group-hover:text-zinc-700 transition-colors duration-300">
              <AppleIcon size={24} />
            </div>
          </a>

          {/* <a
            href={getDmgUrl("x64")}
            class="group w-full sm:w-1/2 flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/50 shadow-xs backdrop-blur-sm"
          >
            <div class="flex flex-col items-start text-left">
              <span class="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase mb-1">Download</span>
              <span class="text-lg font-bold text-slate-800 dark:text-white leading-tight">Intel Chip</span>
              <span class="text-xs text-slate-500 dark:text-zinc-400 mt-1">Other Mac models</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-zinc-700/50 text-slate-600 dark:text-white group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-100">
              <CpuIcon size={24} />
            </div>
          </a> */}
        </Show>
      </div>
      <div class="absolute bottom-6 text-sm font-regular text-zinc-500">
        made with ♥ by{" "}
        <a href="https://mugisus.me" target="_blank" rel="noopener noreferrer" class="underline">
          mugisus
        </a>
        {' • '}
        <A href="/privacy" class="underline">
          Privacy Policy
        </A>
      </div>
    </main>
  );
}
