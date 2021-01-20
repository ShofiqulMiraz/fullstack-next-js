import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login</title>
      </Head>

      <div className="container">
        <div className="row">
          <p className="text-center">Wanna Login?</p>
          <button
            className="btn btn-primary w-50 m-auto mt-5"
            onClick={() => loginWithRedirect()}
          >
            Log In or Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
