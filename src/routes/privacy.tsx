import { A } from '@solidjs/router';

export default function Privacy() {
  return (
    <main class='flex min-h-svh items-center justify-center-safe px-6 py-16 text-zinc-200 backdrop-blur-sm'>
      <div class='mx-auto flex w-full max-w-xl flex-col gap-10'>
        <div class='flex flex-col gap-4'>
          <h1 class='text-4xl font-semibold tracking-normal text-white'>
            FontCluster Privacy Policy
          </h1>
          <p class='text-sm text-zinc-400'>Last updated: November 16, 2026</p>
          <p class='text-sm leading-7 text-zinc-300'>
            This policy explains how the FontCluster desktop application and
            this download website handle information. Font analysis in the
            desktop application runs on your device, and sessions and settings
            are saved locally. Some features contact external services, as
            described below. The linked Quick Demo is a separate web
            application; the desktop storage description below does not describe
            how that demo handles data.
          </p>
        </div>

        <section class='flex flex-col gap-8 text-sm leading-7 text-zinc-300'>
          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Accounts and Tracking
            </h2>
            <p>
              FontCluster does not require an account. We do not include usage
              analytics, advertising trackers, or tracking cookies in the
              application or this website. Network requests and information you
              send to the developer are handled as described in this policy.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Data on Your Device
            </h2>
            <p>
              FontCluster reads font files and metadata and performs analysis
              and clustering on your device. Saved sessions can contain sample
              text, font metadata, rendered previews, analysis results, and
              processing settings. Sessions, downloaded models, caches, and
              application preferences are stored on your device. FontCluster
              does not upload your local font files or analysis results to the
              developer or provide cloud synchronization for your sessions.
            </p>
            <p>
              Local storage does not mean that the application makes no network
              requests. Google Fonts, downloads, text display, and plugin
              connections have the data flows described below. Files you copy
              elsewhere may also be backed up or synchronized by services you
              use outside FontCluster.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>Google Fonts</h2>
            <p>
              When the application downloads Google Fonts for analysis or a
              preview, it sends the requested font family, weight, and sample or
              preview text to Google Fonts to obtain the required glyphs. These
              requests also expose technical information such as your IP address
              and request headers to Google. They do not require a separate
              sharing action. Using system fonts avoids these Google Fonts
              requests.
            </p>
            <p>
              See the{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noopener noreferrer'
                class='underline underline-offset-4'
              >
                Google Privacy Policy
              </a>{' '}
              for how Google handles these requests.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Updates, Downloads, and Text Display
            </h2>
            <p>
              The application checks GitHub for updates at startup and when you
              request an update check. Available updates are downloaded and
              installed automatically. It also contacts GitHub to load the
              analysis model catalog and download models you select. This
              website requests release information from GitHub, and its download
              links lead to GitHub Releases. These requests include technical
              information such as IP addresses, requested resources, and request
              headers; model requests include the application version.
            </p>
            <p>
              When the bundled display font cannot render a character in a graph
              label or font name, the application may download character lookup
              data and fallback fonts from jsDelivr. The requested resource
              paths identify character ranges and font resources, rather than
              sending the full label text. These requests also expose your IP
              address and request headers to the service.
            </p>
            <p>
              See the{' '}
              <a
                href='https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement'
                target='_blank'
                rel='noopener noreferrer'
                class='underline underline-offset-4'
              >
                GitHub Privacy Statement
              </a>{' '}
              and{' '}
              <a
                href='https://www.jsdelivr.com/terms/privacy-policy'
                target='_blank'
                rel='noopener noreferrer'
                class='underline underline-offset-4'
              >
                jsDelivr Privacy Policy
              </a>{' '}
              for their data handling practices.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Design Tool Connections
            </h2>
            <p>
              While running, FontCluster provides a local connection for design
              tool plugins. Plugins that access this connection can read the
              current session information, including its sample text, font list,
              and settings. When you send a font to a plugin, its metadata and
              the current preview text also become available through this
              connection. Reading session information does not require you to
              send a font first.
            </p>
            <p>
              The connection runs on your device. Information used in another
              application is subject to that application's privacy practices,
              including any document synchronization it provides.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>Website Hosting</h2>
            <p>
              Hosting providers may process technical information such as IP
              addresses, requested pages, and request logs to deliver and secure
              this website. This is separate from the font analysis performed in
              the desktop application.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>
              Retention and Deletion
            </h2>
            <p>
              You can delete saved sessions in the application. To remove other
              local data, delete FontCluster's application data, preferences,
              and caches from your device. Uninstalling the application alone
              may leave these files behind. Copies or backups stored elsewhere
              must be removed separately.
            </p>
            <p>
              The developer cannot remotely delete data stored only on your
              device. External providers handle retention and deletion of their
              request data under their own policies.
            </p>
          </div>

          <div class='flex flex-col gap-3'>
            <h2 class='text-base font-semibold text-white'>Contact</h2>
            <p>
              If you contact the developer, we may receive the information you
              choose to provide, such as your message and contact details. We
              use that information to respond to and follow up on your inquiry.
              The service you use to contact us may also retain your message
              under its own privacy policy.
            </p>
            <p>
              For privacy questions or deletion requests related to information
              you provided by contacting us, please contact the developer
              through{' '}
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
          {'←'} Back to Home
        </A>
      </div>
    </main>
  );
}
