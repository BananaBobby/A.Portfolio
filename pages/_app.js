import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf8" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

        <meta property="og:url" content="https://anastasiabelyaeva.com" />
        <meta name="twitter:url" content="https://anastasiabelyaeva.com" />
        <link rel="canonical" href="https://anastasiabelyaeva.com" />

        <meta name="subject" content="Dancer portfolio" />
        <meta name="theme-color" content="#fff" />

        <title>
          Anastasia Belyaeva | Dancer, choreographer, model
        </title>

        <meta property="og:title" content="Anastasia Belyaeva | Dancer, choreographer, model" />
        <meta name="twitter:title" content="Anastasia Belyaeva | Dancer, choreographer, model" />

        <meta name="description" content="Contemporary dancer and conceptual movement creator based in Amsterdam." />
        <meta property="og:description" content="Contemporary dancer and conceptual movement creator based in Amsterdam." />
        <meta name="twitter:description" content="Contemporary dancer and conceptual movement creator based in Amsterdam." />

        <meta property="og:image" content="https://anastasiabelyaeva.com/public/img/share.png" />
        <meta name="twitter:image" content="https://anastasiabelyaeva.com/public/img/share.png" />

        <meta property="og:site_name" content="Anastasia Belyaeva" />
        <meta property="og:type" content="website" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128602868-1" />

        {/*<script>*/}
        {/*  window.dataLayer = window.dataLayer || [];*/}
        {/*  function gtag(){dataLayer.push(arguments)}*/}
        {/*  gtag('js', new Date());*/}
        {/*  gtag('config', 'UA-128602868-1');*/}
        {/*  export default MyApp*/}
        {/*</script>*/}
      </Head>
      <Component {...pageProps} />
      <script src="/js/bundle.js" />
    </div>
  )
}

export default MyApp;
