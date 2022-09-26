import React from "react";
import { Link } from "react-router-dom";
import styles from "../Home/Home.module.scss";
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

const LeftAside = () => {
  return (
    <>
      <aside
        className={`${styles.asideIzq} col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3`}
        id="aside"
      >
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

        <div className={`container-media`}>
          <ul className={`menu-media`}>
            <Link to="/">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="/">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="/">
              <i className="bi bi-github"></i>
            </Link>
            <Link to="/">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="/">
              <i className="bi bi-chat-left-text"></i>
            </Link>
          </ul>
        </div>

        <div className={`container-tags`}>
          <ul className={`list-tags`}>
            <li>
              <h5>My Tags</h5>
            </li>
            <li>
              {" "}
              <Link to="/">#devops</Link>
            </li>
            <li>
              <Link to="/">#opensource</Link>{" "}
            </li>
            <li>
              <Link to="/">#career</Link>
            </li>
            <li>
              <Link to="/">#android</Link>
            </li>
            <li>
              <Link to="/">#java</Link>
            </li>
            <li>
              <Link to="/">#testing</Link>
            </li>
            <li>
              <Link to="/">#linux</Link>
            </li>
            <li>
              <Link to="/">#angular</Link>
            </li>
            <li>
              <Link to="/">#laravel</Link>
            </li>
            <li>
              <Link to="/">#git</Link>
            </li>
            <li>
              <Link to="/">#dotnet</Link>
            </li>
            <li>
              <Link to="/">#web3</Link>
            </li>
            <li>
              <Link to="/">#ubuntu</Link>
            </li>
            <li>
              <Link to="/">#gamedev</Link>
            </li>
            <li>
              <Link to="/">#vscode</Link>
            </li>
            <li>
              <Link to="/">#swift</Link>
            </li>
            <li>
              <Link to="/">#npm</Link>
            </li>
            <li>
              <Link to="/">#bash</Link>
            </li>
            <li>
              <Link to="/">#scala</Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default LeftAside;
