import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={styles.footer}
      class=" d-flex justify-content-center p-5 my-5 flex-column"
    >
      <div class=" justify-content-center py-3 text-center">
        <a href="">DEV Communuty</a>
        <span>
          -- A constructive and inclusive social netwoek for software
          developers. With you every sted of your journey.
        </span>
      </div>
      <div class=" justify-content-center py-1 text-center">
        <span>Biult on&nbsp;</span>
        <a href="">Forem</a>
        <span>
          -- the
          <a href="">open source</a>
          software that powers
          <a href="">DEV</a>
          and other inclusive communities.
        </span>
      </div>
      <div class=" justify-content-center py-1 text-center">
        <span>Made with love and&nbsp;</span>
        <a href="">Ruby on Rails.</a>
        <span>&nbsp;DEV Community© 2016 - 2022.</span>
      </div>
      <div class="d-flex justify-content-center">
        <a href="#">
          <img src="../assets/images/hojitas.png" alt="" id="leaves" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
