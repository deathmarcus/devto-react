import React from "react";
import styles from "../Home/Home.module.scss";
import asideDer from "../assets/images/Aside-der.jfif";

const RightAside = () => {
  return (
    <>
      <aside
        className={`container ${styles.rP1} col-lg-3 col-xl-3 col-xxl-3 ${styles.asideDer}`}
      >
        <div className={`container card ${styles.rP1Card}`}>
          <img src={asideDer} alt="" srcset=""></img>
          <a className="link-aside" href="#">
            Forem for Android is here!
          </a>
        </div>
        <div className={`card ${styles.rP1Card}`}>
          <ul className={`list-group list-group-flush`}>
            <li
              className={`${styles.listGroupItem} ${styles.rP1CardTextHeading}`}
            >
              Listings
            </li>
            <li className={`${styles.listGroupItem} ${styles.rP1CardText}`}>
              Get paid to talk about using Fauna
            </li>
            <li className={`${styles.listGroupItem} ${styles.rP1CardText}`}>
              Frontend developer ready for some summer works
            </li>
          </ul>
        </div>
        <div className={`card ${styles.rP1Card}`}>
          <ul className={`list-group list-group-flush`}>
            <li
              className={`${styles.listGroupItem} ${styles.rP1CardTextHeading}`}
            >
              #help
            </li>
            <li className={`${styles.listGroupItem} ${styles.rP1CardText}`}>
              Azure/Dev/AI Journey and beyond!
            </li>
          </ul>
        </div>
        <div className={`card ${styles.rP1Card}`}>
          <ul className={`list-group list-group-flush`}>
            <li
              className={`${styles.listGroupItem} ${styles.rP1CardTextHeading}`}
            >
              #discuss
            </li>
            <li className={`${styles.listGroupItem} ${styles.rP1CardText}`}>
              Q: As a #CodeNewbie, what are your learning goals for the next
              #30days?
            </li>
            <li className={`${styles.listGroupItem} ${styles.rP1CardText}`}>
              What's the difference between a library and a framework
            </li>
            <li className={`${styles.listGroupItem} ${styles.rP1CardText}`}>
              Composition api or Options api?
            </li>
            <li className={`${styles.listGroupItem} ${styles.rP1CardText}`}>
              What were your mistakes in your career path?
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default RightAside;
