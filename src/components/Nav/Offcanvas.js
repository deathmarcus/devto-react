import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navbar.module.scss";
import ListGroup from "react-bootstrap/ListGroup";
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
import conduct from "../assets/icons/thumb_up.png";

const OffcanvasF = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        aria-controls="offcanvasNavbar-expand-false"
        type="button"
        aria-label="Toggle navigation"
        className={`navbar-toggler collapsed`}
        onClick={handleShow}
      >
        <span className={`navbar-toggler-icon`}></span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} className={styles.offcanvasT}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>DEV Community 👩‍💻👨‍💻</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={home} alt="" srcset="" />
              </span>
              <span>{`\n`}Home</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={readingList} />
              </span>
              <span>{`\n`}ReadingList</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={listing} />
              </span>
              <span>{`\n`}Listings</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={podcast} />
              </span>
              <span>{`\n`}Podcasts</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={videos} />
              </span>
              <span>{`\n`}Videos</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={tags} />
              </span>
              <span>{`\n`}Tags</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={faq} />
              </span>
              <span>{`\n`}FAQ</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={shop} />
              </span>
              <span>{`\n`}Forem Shop</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={sponsors} />
              </span>
              <span>{`\n`}Sponsors</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={aboutNew} />
              </span>
              <span>
                {`\n`}
                {`\n`}
                {`\n`}About
              </span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={contact} />
              </span>
              <span>Contact</span>
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test" className={styles.offcanvasElement}>
              <span>
                <img src={guidesNew} />
              </span>
              <span>{`\n`}Guides</span>
            </ListGroup.Item>
            <div>
              <br></br>
              <br></br>
              <ListGroup.Item bsPrefix="test">
                <h3>Other</h3>
              </ListGroup.Item>
              <ListGroup.Item
                bsPrefix="test"
                className={styles.offcanvasElement}
              >
                <span>
                  <img src={conduct}></img>
                  <span>{`\n`}Code of Conduct</span>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                bsPrefix="test"
                className={styles.offcanvasElement}
              >
                <span>
                  <img src={policy}></img>
                  {`\n`}Privacy Policy
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                bsPrefix="test"
                className={styles.offcanvasElement}
              >
                <span>
                  <img src={eyes}></img>
                  {`\n`}Terms of Use
                </span>
              </ListGroup.Item>
            </div>
          </ListGroup>
          <div>
            <br></br>
            <br></br>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="apxvjgnln2kut3qz4vmrbnra389df3ky"
                class="crayons-icon c-link__icon"
              >
                <title id="apxvjgnln2kut3qz4vmrbnra389df3ky">Twitter</title>
                <path
                  d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                  fill="#65bbf2"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="ast4uc06wz1ezjhpr12q88ffo21ckugu"
                class="crayons-icon c-link__icon"
              >
                <title id="ast4uc06wz1ezjhpr12q88ffo21ckugu">Facebook</title>
                <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="aqcuguyr1w36dsk3e4xwb7ukk50rgv67"
                class="crayons-icon c-link__icon"
              >
                <title id="aqcuguyr1w36dsk3e4xwb7ukk50rgv67">Github</title>
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="aoilj0pwu0bw6vnzstsbpsetbuocbjbw"
                class="crayons-icon c-link__icon"
              >
                <title id="aoilj0pwu0bw6vnzstsbpsetbuocbjbw">Instagram</title>
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="abv1v07hhq0coun5czdqpp0vcmzn9039"
                class="crayons-icon c-link__icon"
              >
                <title id="abv1v07hhq0coun5czdqpp0vcmzn9039">Twitch</title>
                <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
              </svg>
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasF;
