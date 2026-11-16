// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>FontCluster</title>
          <meta
            name='description'
            content='Explore fonts by visual similarity with FontCluster, a desktop app for macOS, Windows, and Linux.'
          />
          <meta property='og:title' content='Download FontCluster' />
          <meta
            property='og:description'
            content='Explore fonts by visual similarity with FontCluster, a desktop app for macOS, Windows, and Linux.'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://fontcluster.mugisus.me' />
          <meta
            property='og:image'
            content='https://fontcluster.mugisus.me/fontcluster-thumb.png'
          />
          <meta property='og:image:width' content='1920' />
          <meta property='og:image:height' content='1005' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Download FontCluster' />
          <meta
            name='twitter:description'
            content='Explore fonts by visual similarity with FontCluster, a desktop app for macOS, Windows, and Linux.'
          />
          <meta
            name='twitter:image'
            content='https://fontcluster.mugisus.me/fontcluster-thumb.png'
          />
          <link rel='icon' href='/favicon.ico' />
          {assets}
        </head>
        <body>
          <div id='app'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
