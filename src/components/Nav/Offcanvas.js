import React from "react";
import styles from "./Navbar.module.scss";
import home from "../assets/icons/home.png";
import readingList from "../assets/icons/reading_list.png";
import listing from "../assets/icons/listing.png";
import podcast from "../assets/icons/podcasts.png";
import videos from "../assets/icons/videos.png";
import tags from "../assets/icons/tags.png";
import faq from "../assets/icons/faq.png";
import shop from "../assets/icons/shop.png";
import sponsors from "../assets/icons/sponsors.png";
import aboutNew from "../assets/icons/about_new.png";
import contact from "../assets/icons/contact.png";
import guidesNew from "../assets/icons/guides_new.png";
import policy from "../assets/icons/policy.png";
import eyes from "../assets/icons/eyes.png";

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
            <div className={styles.containerHome}>
              <div className={`list-group`}>
                <ul className={`list-home`}>
                  <li>
                    {" "}
                    <span>
                      <img src={home} alt="" srcset="" />
                    </span>
                    <span>{`\n`}Home</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={readingList} />
                    </span>
                    <span>{`\n`}ReadingList</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={listing} />
                    </span>
                    <span>{`\n`}Listings</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={podcast} />
                    </span>
                    <span>{`\n`}Podcasts</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={videos} />
                    </span>
                    <span>{`\n`}Videos</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={tags} />
                    </span>
                    <span>{`\n`}Tags</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={faq} />
                    </span>
                    <span>{`\n`}FAQ</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={shop} />
                    </span>
                    <span>{`\n`}Forem Shop</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={sponsors} />
                    </span>
                    <span>{`\n`}Sponsors</span>
                  </li>
                  <li>
                    <span>
                      <img src={aboutNew} />
                    </span>
                    <span>
                      {`\n`}
                      {`\n`}
                      {`\n`}About
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={contact} />
                    </span>
                    <span>Contact</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <img src={guidesNew} />
                    </span>
                    <span>{`\n`}Guides</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`container-others`}>
              <ul className={`list-others`}>
                <li>
                  <h5>Other</h5>
                </li>
                <li>
                  <img src={policy}></img>Privacy Policy
                </li>
                <li>
                  <img src={eyes}></img>Terms of Use
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
