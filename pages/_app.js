import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import NavBar from "../components/NavBar/navbar";
import { Auth0Provider } from "@auth0/auth0-react";

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
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
        <title>Full Stack Next Js</title>
      </Head>
      <Auth0Provider
        domain="shofiqulmiraz.us.auth0.com"
        clientId="SKGLT5vPGlhIlGSjDQFYHKUZ3lrcR3hB"
        redirectUri="https://fullstack-next-js.vercel.app/profile"
      >
        <div className="container-fluid">
          <div className="row">
            <NavBar />
            <Component {...pageProps} />
          </div>
        </div>
      </Auth0Provider>
    </>
  );
}

export default MyApp;
