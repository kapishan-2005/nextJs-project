import Image from "next/image";

export default function Hero() {
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 align-self-center">
            <div className="caption header-text">
              <h6>SEO DIGITAL AGENCY</h6>
              <div className="line-dec"></div>

              <h4>
                Discover More <em>About Us</em>
              </h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore.
              </p>

              <div className="main-button">
                <a href="#">Discover More</a>
              </div>

              <span>or</span>

              <div className="second-button">
                <a href="#">Check our FAQs</a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 align-self-center">
            <Image
              src="/assets/images/about-us-image.jpg"
              alt="About us illustration"
              width={500}
              height={400}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}