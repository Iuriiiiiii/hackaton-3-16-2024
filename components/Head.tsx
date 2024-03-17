import { asset, Head as RuntimeHead } from "$fresh/runtime.ts";

interface IProps {}

export function Head(props: IProps) {
  return (
    <RuntimeHead>
      <meta charSet="utf-8" />
      <meta name="robots" content="follow" />
      <meta
        name="keywords"
        content="IG, Podcasts, Showcase, Jacob Gironn"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="minified-styles.css" />

      {/* <!-- Primary Meta Tags --> */}
      <title>Jacob Gironn - Showcase 👜</title>
      <meta name="title" content="Jacob Gironn - Showcase" />
      <meta
        name="description"
        content="An usefull webpage that will show you information about my work history"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jacobsgironn.me/" />
      <meta property="og:title" content="Jacob Gironn - Showcase" />
      <meta
        property="og:description"
        content="An usefull webpage that will show you information about my work history"
      />
      <meta
        property="og:image"
        content="https://jacobsgironn.me/img/meta/thumb.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jacobsgironn.me/" />
      <meta property="twitter:title" content="Alexander Casas - Portfolio" />
      <meta
        property="twitter:description"
        content="An usefull webpage that will show you information about my work history"
      />
      <meta
        property="twitter:image"
        content="https://jacobsgironn.me/img/meta/thumb.png"
      />

      <meta name="theme-color" content="#0F172A" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <script type="application/javascript" src="masonry.pkgd.min.js"></script> */}
      {/* <script type="application/javascript" src="main.js" defer></script> */}
    </RuntimeHead>
  );
}
