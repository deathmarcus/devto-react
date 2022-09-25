import React from "react";
import styles from "../Home/Home.module.scss";

const NavPills = () => {
  return (
    <>
      <ul className={`nav ${styles.navPills}`} id="pills-tab" role="tablist">
        <li className={`nav-tabs`} role="presentation">
          <a
            className={`nav-link`}
            href="#relevant-content"
            id="pills-relevant-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-relevant"
            type="button"
            role="tab"
            aria-controls="pills-relevant"
            aria-selected="true"
          >
            Relevant
          </a>
        </li>
        <li className={`nav-item`} role="presentation">
          <button
            className={`nav-link`}
            id="pills-latest-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-latest"
            type="button"
            role="tab"
            aria-controls="pills-latest"
            aria-selected="false"
          >
            Latest
          </button>
        </li>
        <li className={`nav-item`} role="presentation">
          <button
            className={`nav-link`}
            id="pills-top-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-top"
            type="button"
            role="tab"
            aria-controls="pills-top"
            aria-selected="false"
          >
            Top
          </button>
        </li>
      </ul>
      <div className={`tab-content`} id="pills-tabContent">
        <div
          className={`tab-pane fade show active`}
          id="pills-relevant"
          role="tabpanel"
          aria-labelledby="pills-relevant-tab"
        ></div>
        <div
          className={`tab-pane fade`}
          id="pills-latest"
          role="tabpanel"
          aria-labelledby="pills-latest-tab"
        ></div>
        <div
          className={`tab-pane fade`}
          id="pills-top"
          role="tabpanel"
          aria-labelledby="pills-top-tab"
        ></div>
      </div>

      <div className={`row main_section`}>
        <div className={`container col-12`}>
          <div
            className={`col-12 ${styles.cardP1Global} y-2`}
            id="main_posts_cards"
          ></div>
          <div
            className={`col-12 ${styles.cardP1Global} my-2`}
            id="main_posts_cards2"
          ></div>
        </div>
      </div>
    </>
  );
};

export default NavPills;
