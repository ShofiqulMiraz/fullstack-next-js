import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Full Stack Next Js</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
