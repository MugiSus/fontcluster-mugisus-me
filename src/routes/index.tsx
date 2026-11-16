import { query, createAsync, A } from '@solidjs/router';
import { For, Show } from 'solid-js';
import {
  Apple,
  Dices,
  Download,
  Grid2x2,
  SquareArrowOutUpRightIcon,
  Terminal,
} from 'lucide-solid';

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

  const getDownloadUrl = (extensions: string[]) => {
    const release = latestRelease();
    if (!release) return '#';
    const asset = extensions
      .map((extension) =>
        release.assets.find((a) => {
          const assetName = a.name.toLowerCase();
          return !assetName.endsWith('.sig') && assetName.endsWith(extension);
        }),
      )
      .find((a) => a);
    return asset?.browser_download_url || '#';
  };

  const downloads = () => [
    {
      label: 'Apple Silicon',
      detail: '.dmg',
      href: getDownloadUrl(['aarch64.dmg']),
      Icon: Apple,
      iconClass: 'group-hover:bg-rose-400',
    },
    {
      label: 'Windows',
      detail: '.msi',
      href: getDownloadUrl(['.msi']),
      Icon: Grid2x2,
      iconClass: 'group-hover:bg-sky-500',
    },
    {
      label: 'Linux',
      detail: '.AppImage',
      href: getDownloadUrl(['.appimage']),
      Icon: Terminal,
      iconClass: 'group-hover:bg-emerald-500',
    },
  ];

  return (
    <main class='mx-auto flex min-h-svh flex-col items-center justify-center-safe gap-16 p-4 py-24 text-center'>
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

      <a
        href='https://fontcluster-webview.vercel.app/'
        class='inline-flex items-center gap-2 rounded-full border border-zinc-500 bg-zinc-950/60 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
      >
        <Dices size={20} aria-hidden='true' />
        Quick Demo →
      </a>

      <div class='flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap'>
        <Show
          when={latestRelease()}
          fallback={
            <div class='flex h-16 items-center justify-center text-zinc-500 italic'>
              Checking for latest version...
            </div>
          }
        >
          <For each={downloads()}>
            {(download) => (
              <a
                href={download.href}
                aria-label={`Download FontCluster for ${download.label}`}
                aria-disabled={download.href === '#'}
                class='group flex w-60 max-w-full items-center justify-between gap-3 rounded-2xl border border-zinc-500 bg-zinc-950/60 p-4 backdrop-blur-sm transition-colors hover:border-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
              >
                <Download
                  size={20}
                  class='shrink-0 text-white'
                  aria-hidden='true'
                />
                <div class='flex flex-1 flex-col items-start text-left'>
                  <span class='text-lg leading-tight font-bold text-white'>
                    {download.label}
                  </span>
                  <span class='mt-1.5 text-xs text-zinc-400'>
                    {latestRelease()?.tag_name} · {download.detail}
                  </span>
                </div>
                <div
                  class={`shrink-0 rounded-lg bg-zinc-700/50 p-3 text-white transition-colors duration-300 ${download.iconClass}`}
                >
                  <download.Icon size={20} />
                </div>
              </a>
            )}
          </For>
        </Show>
      </div>

      <div class='flex items-center gap-1 text-sm text-zinc-400'>
        <a
          href={getDownloadUrl(['.rpm'])}
          target='_blank'
          rel='noopener noreferrer'
          class='underline underline-offset-4 transition-colors hover:text-white'
        >
          .rpm {latestRelease()?.tag_name}
        </a>
        <span>•</span>
        <a
          href={getDownloadUrl(['.deb'])}
          target='_blank'
          rel='noopener noreferrer'
          class='underline underline-offset-4 transition-colors hover:text-white'
        >
          .deb {latestRelease()?.tag_name}
        </a>
        <span>•</span>
        <a
          href='https://github.com/MugiSus/fontcluster-releases/releases/latest'
          target='_blank'
          rel='noopener noreferrer'
          class='underline underline-offset-4 transition-colors hover:text-white'
        >
          GitHub Releases
          <SquareArrowOutUpRightIcon size={14} class='ml-1 inline' />
        </a>
      </div>

      <div class='font-regular fixed bottom-6 text-sm text-zinc-400'>
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
