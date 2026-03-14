import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Video Info Section */}
      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <Image
                  src="/assets/images/video-thumb.jpg"
                  alt="Video thumbnail"
                  width={600}
                  height={400}
                />
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>
                  Detailed Information On What We Do & Who We Are
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>

              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>SEO Marketing</h6>
                  <span>90%</span>
                </div>

                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Digital Marketing</h6>
                  <span>80%</span>
                </div>

                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Management</h6>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="happy-clients section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Our 4 Steps <em>To Success</em> & <span>Happy Clients</span>
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>
                Are You Ready To Work & Develop With Us?
                <br />
                Don&apos;t Hesitate & Contact Us!
              </h4>
            </div>

            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}