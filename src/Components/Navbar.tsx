import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Pre Header */}
      <div className="pre-header" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li>
                    <a href="tel:+00012345678">
                      <i className="fa fa-phone"></i> +000 1234 5678
                    </a>
                  </li>
                  <li>
                    <a href="mailto:infocompany@email.com">
                      <i className="fa fa-envelope"></i> infocompany@email.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps?q=St.+London+54th+Bull"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-map-marker"></i> St. London 54th Bull
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Google Plus">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <nav className="main-nav">
            {/* Logo */}
            <Link href="/" className="logo">
              <Image
                src="/assets/images/logo.png"
                alt="Company Logo"
                width={112}
                height={40}
              />
            </Link>

            {/* Navigation */}
            <ul className="nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="menu-trigger" aria-label="Open Menu">
              <span>Menu</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}