import { query, createAsync, A } from '@solidjs/router';
import { Show } from 'solid-js';
import { DownloadIcon } from 'lucide-solid';

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type LatestRelease = {
  tag_name: string;
  assets: ReleaseAsset[];
};

const fetchLatestRelease = query(async () => {
  const response = await fetch(
    'https://api.github.com/repos/MugiSus/fontcluster-releases/releases/latest',
  );
  if (!response.ok) throw new Error('Failed to fetch latest release');
  return response.json() as Promise<LatestRelease>;
}, 'latest-release');

export default function Home() {
  const latestRelease = createAsync(() => fetchLatestRelease());

  const getDmgUrl = (arch: 'aarch64' | 'x64') => {
    const release = latestRelease();
    if (!release) return '#';
    const asset = release.assets.find((a) => a.name.endsWith(`${arch}.dmg`));
    return asset?.browser_download_url || '#';
  };

  return (
    <main class='mx-auto flex min-h-svh flex-col items-center justify-center gap-16 p-4 py-2 text-center'>
      <div class='flex flex-col items-center gap-4'>
        <img
          src='/fontcluster-icon.png'
          alt='Logo'
          class='size-24 drop-shadow-md'
        />
        <img
          src='/fontcluster-text.png'
          alt='FontCluster'
          class='h-8 drop-shadow-md invert'
        />
      </div>

      <div class='mt-4 flex w-full max-w-2xl flex-col items-center justify-center gap-6 px-4 sm:flex-row'>
        <Show
          when={latestRelease()}
          fallback={
            <div class='flex h-16 items-center justify-center text-zinc-500 italic'>
              Checking for latest version...
            </div>
          }
        >
          <a
            href={getDmgUrl('aarch64')}
            class='group flex w-72 max-w-full items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-950/30 p-4 shadow-xs backdrop-blur-sm'
          >
            <div class='flex flex-col items-start text-left'>
              <span class='mb-1 text-[10px] font-bold uppercase'>Download</span>
              <span class='text-lg leading-tight font-bold text-white'>
                Apple Silicon
              </span>
              <span class='mt-1.5 text-xs text-zinc-400'>
                {latestRelease()?.tag_name}
              </span>
            </div>
            <div class='rounded-lg bg-zinc-700/50 p-3 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-zinc-700'>
              <DownloadIcon size={24} />
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
      <div class='font-regular absolute bottom-6 text-sm text-zinc-500'>
        Made with ♥ by{' '}
        <a
          href='https://mugisus.me'
          target='_blank'
          rel='noopener noreferrer'
          class='underline underline-offset-4'
        >
          mugisus
        </a>
        {' • '}
        <A href='/privacy' class='underline underline-offset-4'>
          Privacy Policy
        </A>
      </div>
    </main>
  );
}
