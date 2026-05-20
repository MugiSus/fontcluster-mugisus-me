import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center min-h-svh mx-auto text-gray-300 p-4 flex flex-col items-center justify-center gap-8">
      <h1 class="max-6-xs text-6xl text-zinc-300 font-thin">Page Not Found</h1>
      <A href="/" class="text-zinc-300 underline">
        Home
      </A>
    </main>
  );
}
