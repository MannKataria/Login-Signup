// Style sheet
import styles from "./Profile.module.css";

// Images
import avatar from "../Assets/profile/avatar_profile.png";
import logo from "../Assets/profile/logo_profile.svg";
import alert from "../Assets/profile/alerts_profile.svg";
import alert2 from "../Assets/main/alerts_main.svg";
import trip from "../Assets/profile/trips_profile.svg";
import trip2 from "../Assets/main/trips_main.svg";
import profileHome from "../Assets/home/profile_home.svg";

// Dependencies
import { Link } from "react-router-dom";

const Profile = () => {
  const handleMenuClick = () => {
    document.getElementById("navlinksCont2").style.display = "flex";
  };
  const handleCloseClick = () => {
    document.getElementById("navlinksCont2").style.display = "none";
  };
  const getTrips = () => {
    document.getElementById("reviewCont").style.display = "none";
    document.getElementById("favCont").style.display = "none";
    document.getElementById("tripsCont").style.display = "flex";
    document.getElementById("reviews").style.backgroundColor = "#fff";
    document.getElementById("fav").style.backgroundColor = "#fff";
    document.getElementById("trips").style.backgroundColor = "#d9d9d9";
  };
  const getReviews = () => {
    document.getElementById("reviewCont").style.display = "flex";
    document.getElementById("favCont").style.display = "none";
    document.getElementById("tripsCont").style.display = "none";
    document.getElementById("reviews").style.backgroundColor = "#d9d9d9";
    document.getElementById("fav").style.backgroundColor = "#fff";
    document.getElementById("trips").style.backgroundColor = "#fff";
  };
  const getFav = () => {
    document.getElementById("reviewCont").style.display = "none";
    document.getElementById("favCont").style.display = "flex";
    document.getElementById("tripsCont").style.display = "none";
    document.getElementById("reviews").style.backgroundColor = "#fff";
    document.getElementById("fav").style.backgroundColor = "#d9d9d9";
    document.getElementById("trips").style.backgroundColor = "#fff";
  };
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        ;
      </head>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logoCont}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.navlinksCont}>
          <Link className={styles.alerts}>
            <img src={alert} className={styles.icons} />
            Alerts
          </Link>
          <Link className={styles.trips}>
            <img src={trip} className={styles.icons} />
            Trips
          </Link>
          <Link to="/profile" className={styles.profileIconCont}>
            <img src={profileHome} className={styles.profileIcon} />
          </Link>
        </div>
        <div className={styles.menuIcon}>
          <span onClick={handleMenuClick} className="material-symbols-outlined">
            menu
          </span>
        </div>
        <div className={styles.navlinksCont2} id="navlinksCont2">
          <div className={styles.closeIcon}>
            <span
              onClick={handleCloseClick}
              className="material-symbols-outlined"
            >
              close
            </span>
          </div>
          <Link to="/profile" className={styles.profileIconCont}>
            <img src={profileHome} className={styles.profileIcon} />
          </Link>
          <Link className={styles.alerts}>
            <img src={alert2} className={styles.icons} alt="alerts" />
            Alerts
          </Link>
          <Link className={styles.trips}>
            <img src={trip2} className={styles.icons} alt="trips" />
            Trips
          </Link>
        </div>
      </nav>
      {/* Personal info */}
      <main className={styles.mainCont}>
        <div className={styles.personalCont}>
          <img src={avatar} className={styles.avatar} />
          <p className={styles.nametxt}>firstName lastName</p>
          <p className={styles.emailtxt}>abc@gmail.com</p>
          <button
            className={`${styles.options} ${styles.tripsOption}`}
            id="trips"
            onClick={getTrips}
          >
            Trips
          </button>
          <button className={styles.options} id="reviews" onClick={getReviews}>
            Reviews
          </button>
          <button className={styles.options} id="fav" onClick={getFav}>
            Favorites
          </button>
        </div>
        {/* Trips */}
        <div
          className={`${styles.profileCont} ${styles.tripsCont}`}
          id="tripsCont"
        >
          <div className={styles.tripsTitle}>
            <p className={styles.profileTitle}>Places</p>
            <p className={styles.profileTitle}>Experience</p>
          </div>
          <div className={styles.expCont}>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div
          className={`${styles.profileCont} ${styles.reviewCont}`}
          id="reviewCont"
        >
          <div className={styles.tripsTitle}>
            <p className={styles.profileTitle}>Reviews</p>
          </div>
          <div className={styles.expCont}>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
        {/* Favorites */}
        <div className={`${styles.profileCont} ${styles.favCont}`} id="favCont">
          <div className={styles.tripsTitle}>
            <p className={styles.profileTitle}>Favorites</p>
          </div>
          <div className={styles.expCont}>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.expBox}>
              <p className={styles.expTitle}>Dubai</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
