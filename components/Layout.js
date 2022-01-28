import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Next.js Template by Sreekesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </>
  );
}
