import { A } from "@solidjs/router";

export default function Privacy() {
  return (
    <main class="min-h-svh px-6 py-16 text-zinc-200 backdrop-blur-sm">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-10">
        <A href="/" class="text-sm text-zinc-400 underline underline-offset-4">
          Home
        </A>

        <div class="flex flex-col gap-4">
          <h1 class="text-4xl font-semibold tracking-normal text-white">FontCluster Privacy Policy</h1>
          <p class="text-sm text-zinc-400">Last updated: May 20, 2026</p>
        </div>

        <section class="flex flex-col gap-4 text-sm leading-7 text-zinc-300">
          <p>
            FontCluster does not collect personal information directly through this website or the
            application.
          </p>
          <p>
            The FontCluster application processes font information on your device. Font files, font
            names, and analysis results are not uploaded to our servers.
          </p>
          <p>
            This website may request release information and download assets from GitHub Releases in
            order to provide the latest version of the application. GitHub may process access
            information according to its own privacy policy.
          </p>
          <p>
            We do not use analytics, advertising trackers, or third-party tracking cookies on this
            website.
          </p>
          <p>
            Hosting providers may process standard technical information, such as IP addresses and
            request logs, to operate and secure this website.
          </p>
          <p>
            If you have any questions about this privacy policy, please contact the developer through{" "}
            <a
              href="https://mugisus.me"
              target="_blank"
              rel="noopener noreferrer"
              class="underline underline-offset-4"
            >
              mugisus.me
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
