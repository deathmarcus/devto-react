import React from "react";
import styles from "./Navbar.module.scss";

const Offcanvas = () => {
  return (
    <div>
      <div
        className={`offcanvas offcanvas-start custom-nav-off`}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className={`offcanvas-header`}>
          <h5 className={`offcanvas-title`} id="offcanvasExampleLabel">
            Dev Community
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className={`offcanvas-body`}>
          <div>
            <div className={`container-home`}>
              <div className={`list-group`}>
                <ul className={`list-home`}>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/home.png" alt="" srcset="" /> Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className="bi"
                    >
                      <img src="/assets/icons/reading_list.png" />
                      ReadingList
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/listing.png" />
                      Listings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/podcasts.png" />
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/videos.png" />
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/tags.png" />
                      Tags
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/faq.png" />
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/shop.png" />
                      Forem Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/sponsors.png" />
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/about_new.png" />
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/contact.png" />
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#index"
                      style="text-decoration:none"
                      className={styles.bi}
                    >
                      <img src="/assets/icons/guides_new.png" />
                      Guides
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-others">
              <ul className="list-others">
                <li>
                  <h5>Other</h5>
                </li>
                <li>
                  <a
                    href="#index"
                    className={styles.bi}
                    style="text-decoration:none"
                  >
                    <img src="/assets/icons/thumb_up.png"></img>Code ofConduct
                  </a>
                </li>
                <li>
                  <a
                    href="#index"
                    className={styles.bi}
                    style="text-decoration:none"
                  >
                    <img src="/assets/icons/policy.png"></img>Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#index"
                    className={styles.bi}
                    style="text-decoration:none"
                  >
                    <img src="/assets/icons/eyes.png"></img>Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            <div className="container-media">
              <ul className="menu-media">
                <a href="#index">
                  <i className={`${styles.bi}`}></i>
                </a>
                <a href="#index">
                  <i className={`${styles.bi}`}></i>
                </a>
                <a href="#index">
                  <i className={`${styles.bi}`}></i>
                </a>
                <a href="#index">
                  <i className={`${styles.bi}`}></i>
                </a>
                <a href="#index">
                  <i className={`${styles.bi}`}></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
