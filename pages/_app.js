import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

// spinner disabled
NProgress.configure({ showSpinner: false });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
