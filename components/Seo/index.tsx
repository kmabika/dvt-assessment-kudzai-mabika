import Head from "next/head";

const Seo = ({
  title,
  description,
  locale,
  currentUrl,
}: SeoTypes) => {
  return (
    <Head>
      <meta
        name="apple-mobile-web-app-title"
        content={title ?? "Kudzai Mabika • DVT Deezer Assessment "}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="application-name"
        content={title ?? "Kudzai Mabika • DVT Deezer Assessment "}
      />
      <meta name="theme-color" content={"#52C3B8"} />
      <title>{title ?? "Kudzai Mabika • DVT Deezer Assessment "}</title>
      <meta
        name="title"
        property="title"
        content={title ?? "Kudzai Mabika • DVT Deezer Assessment "}
      />
      <meta
        name="description"
        property="description"
        content={description ?? "Kudzai Mabika • DVT Deezer Assessment "}
      />
      <meta
        name="og:title"
        property="og:title"
        content={title ?? "Kudzai Mabika • DVT Deezer Assessment "}
      />
      <meta
        name="og:description"
        property="og:description"
        content={description ?? "Kudzai Mabika • Deezer Assessment"}
      />
      <meta name="og:url" property="og:url" content={currentUrl} />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:locale" property="og:locale" content={locale} />
      <meta name="twitter:url" property="twitter:url" content={currentUrl} />
      <meta name="twitter:card" property="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        property="twitter:title"
        content={title ?? "Kudzai Mabika • Deezer Assessment "}
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description ?? "Kudzai Mabika • Deezer Assessment "}
      />
      <link rel="shortcut icon" href={`/images/favicon/apple-touch-icon.png`} />
      <link
        rel="shortcut icon"
        href={`/images/favicon/android-chrome-512x512.png`}
      />
      <link
        rel="shortcut icon"
        href={`/images/favicon/android-chrome-192x192.png`}
      />
      <link
        rel="icon"
        sizes="16x16"
        href={`/images/favicon/favicon-16x16.png`}
      />
      <link
        rel="icon"
        sizes="32x32"
        href={`/images/favicon/favicon-32x32.png`}
      />
    </Head>
  );
};

export default Seo;
