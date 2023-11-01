import styles from "./Main.module.css";
import logo from "../Assets/main/logo_main.svg";
import bg from "../Assets/main/bg_main.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoCont}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.navlinksCont}>
          <a className={styles.reviews}>Reviews</a>
          <a className={styles.alerts}>Alerts</a>
          <a className={styles.trips}>Trips</a>
          <a href="/signup" className={styles.signin}>
            Sign In
          </a>
        </div>
      </nav>
      <div className={styles.bgCont}>
        <img src={bg} className={styles.bgImg} alt="background" />
        <div className={styles.text}>
          <p className={styles.text1}>Helping Others</p>
          <p className={styles.text2}>LIVE & TRAVEL</p>
          <p className={styles.text3}>Most trusted travel advise</p>
        </div>
      </div>
      <div className={styles.searchCont}>
        <div className={styles.searchTitle}>Where to?</div>
        <form className={styles.searchBar}>
          <input type="text" placeholder="Places to go, Things to do, Hotels"/>
          <button type="submit">Search</button>
        </form>
        <div className={styles.searchBtns}></div>
      </div>
    </>
  );
};

export default Main;
