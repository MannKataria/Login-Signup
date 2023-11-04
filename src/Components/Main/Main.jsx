import styles from "./Main.module.css";
import styles2 from "./Footerpart.module.css";
import logo from "../Assets/main/logo_main.svg";
import bg from "../Assets/main/bg_main.png";
import tourists from '../Assets/main/tourists.png';
import logoimg from '../Assets/main/logo.png';
import footerlogo from '../Assets/main/footerlogo.png';
import fb from '../Assets/main/fb.png';
import x from '../Assets/main/x.png';
import yt from '../Assets/main/yt.png';
import insta from '../Assets/main/insta.png';
import mailbox from '../Assets/main/mailbox.png';
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





      <div className={styles2.container}>
        <div className={styles2.leftpart}>
          <img src = {logoimg} alt='logo' className={styles2.logo}></img>
          <div className={styles2.text1}>
            See what is our clients say about us
          </div>
          <div className={styles2.text2}>
            Our top 1% of places, stays, eats, and experiences—decided by you.
          </div>
          <button className={styles2.pillbutton}>
            See the winners
          </button>
        </div>
        <div>
          <img src = {tourists} alt = "tourists" className={styles2.tourists}></img>
        </div>
      </div>

      

    <div className={styles2.footer}>

      
      <div className={styles2.newsletter}>
        <div className={styles2.newslettertext}>
          <div className={styles2.subscribetext}>Subscribe Newsletter</div>
          
          <div className={styles2.quotetext}>
            <div className={styles2.title}>The Travel</div>
            <div className={styles2.subtext}>Get inspired! Receive travel discounts, tips and behind the scenes stories.</div>
          </div>

          <div className={styles2.emailinputblock}>
            <input className={styles2.inputfield} placeholder='Your email address'></input>
            <button className={styles2.inputbutton}>Subscribe</button>
          </div>
        </div>
        <img src={mailbox} alt='mailbox' className={styles2.mailboxpic}></img>
      </div>


        <div className={styles2.aboutus}>
          
          <div className={styles2.footerlogoblock}>
            <img src= {footerlogo} alt ="logo"></img>
            <div className={styles2.footerroutier}>Routier</div>
            <div className={styles2.icons}>
              <img src={fb} alt='fb'></img>
              <img src={x} alt='x'></img>
              <img src={yt} alt='yt'></img>
              <img src={insta} alt='insta'></img>
            </div>
          </div>

          <div className={styles2.footertextblockcover}>
              <div className={styles2.footertextblock}>
                <div className={styles2.footertexttitle}>About us</div>
                <div className={styles2.footernormaltext}>What is Routier?</div>
                <div className={styles2.footernormaltext}>How it works?</div>
              </div>

              <div className={styles2.footertextblock}>
                <div className={styles2.footertexttitle}>Our Activities</div>
                <div className={styles2.footernormaltext}>Northern Lights</div>
                <div className={styles2.footernormaltext}>Cruising & sailing</div>
                <div className={styles2.footernormaltext}>Multi-activities</div>
                <div className={styles2.footernormaltext}>Kayaing</div>
              </div>

              <div className={styles2.footertextblock}>
                <div className={styles2.footertexttitle}>Travel Blogs</div>
                <div className={styles2.footernormaltext}>Bali Travel Guide</div>
                <div className={styles2.footernormaltext}>Sri Lanks Travel Guide</div>
                <div className={styles2.footernormaltext}>Peru Travel Guide</div>
                <div className={styles2.footernormaltext}>Bali Travel Guide</div>
              </div>

              <div className={styles2.footertextblock}>
                <div className={styles2.footertexttitle}>Contact us</div>
                <div className={styles2.footernormaltext}>Our Story</div>
                <div className={styles2.footernormaltext}>Work with us</div>
                <div className={styles2.footernormaltext}>Want to be Collaborator?</div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Main;
