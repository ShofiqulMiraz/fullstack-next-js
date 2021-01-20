import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const { logout } = useAuth0();
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Navbar</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link href="/profile">
                    <a className="nav-link" aria-current="page">
                      Profile
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={() => logout()}>
                  <Link href="/">
                    <a className="nav-link" aria-current="page">
                      logout
                    </a>
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link" aria-current="page">
                  Login/Register
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
