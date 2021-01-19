import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login</title>
      </Head>

      <div className="container">
        <div className="row">
          <button className="btn btn-primary"onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      </div>
    </>
  );
};

export default Login;
