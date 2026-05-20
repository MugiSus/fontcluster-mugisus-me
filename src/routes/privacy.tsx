import { A } from '@solidjs/router';

export default function Privacy() {
  return (
    <main class='flex min-h-svh items-center justify-center-safe px-6 py-16 text-zinc-200 backdrop-blur-sm'>
      <div class='mx-auto flex w-full max-w-2xl flex-col gap-10'>
        <div class='flex flex-col gap-4'>
          <h1 class='text-4xl font-semibold tracking-normal text-white'>
            FontCluster Privacy Policy
          </h1>
          <p class='text-sm text-zinc-400'>May 20, 2026</p>
        </div>

        <section class='flex flex-col gap-8 text-sm leading-7 text-zinc-300'>
          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Information We Collect
            </h2>
            <p>
              FontCluster does not collect personal information directly through
              this website or the application. We do not operate user accounts,
              analytics, advertising trackers, or third-party tracking cookies.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>Font Data</h2>
            <p>
              The FontCluster application processes font information on your
              device. Font files, font names, local font metadata, and analysis
              results are not uploaded to our servers. Any application data
              saved locally remains on your device unless you choose to share
              it.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Third-Party Services
            </h2>
            <p>
              This website may request release information and download assets
              from GitHub Releases to provide the latest version of the
              application. GitHub may process access information according to
              its own privacy policy.
            </p>
            <p>
              Hosting providers may process standard technical information, such
              as IP addresses and request logs, to operate and secure this
              website. We do not share personal information with analytics
              providers, advertising networks, or data brokers.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Retention and Deletion
            </h2>
            <p>
              Because FontCluster does not collect or store personal information
              on our servers, there is no personal information retained by us to
              delete.
            </p>
            <p>
              Local application data can be removed from your device by deleting
              the application and its local data. We do not have access to data
              stored only on your device.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>Contact</h2>
            <p>
              If you contact the developer, we may receive the information you
              choose to provide, such as your message and contact details. We
              use that information only to respond to your inquiry and delete it
              when it is no longer needed.
            </p>
            <p>
              You can stop using the application at any time. Since the
              application does not collect personal information, there is no
              separate consent withdrawal process for data collection. For
              privacy questions or deletion requests related to information you
              provided by contacting us, please contact the developer through{' '}
              <a
                href='https://mugisus.me'
                target='_blank'
                rel='noopener noreferrer'
                class='underline underline-offset-4'
              >
                mugisus.me
              </a>
              .
            </p>
          </div>
        </section>

        <A href='/' class='text-sm text-zinc-400 underline underline-offset-4'>
          {'←'} Home
        </A>
      </div>
    </main>
  );
}
