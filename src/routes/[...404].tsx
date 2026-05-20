import { A } from '@solidjs/router';

export default function NotFound() {
  return (
    <main class='mx-auto flex min-h-svh flex-col items-center justify-center gap-8 p-4 text-center text-gray-300'>
      <h1 class='max-6-xs text-6xl font-thin text-zinc-300'>Page Not Found</h1>
      <A href='/' class='text-zinc-300 underline'>
        Home
      </A>
    </main>
  );
}
