import styles from "./Signup.module.css";
import tour_set from "../Assets/tour-set-signup.svg";
import logo from "../Assets/logo_signup.svg";
import { useState } from "react";
import fb from "../Assets/fb.png";
import googlebutton from "../Assets/google.png";
import jwt_decode from 'jwt-decode';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useGoogleLogin  } from '@react-oauth/google';

const Signup = () => {
  const [user, setUser] = useState({});
  //google login setup
  const login = useGoogleLogin({
      onSuccess: codeResponse => {
          console.log(jwt_decode(codeResponse))
          setUser(codeResponse)
      }
  });

  //facebook login setup
  const responseFacebook = (response) => {                           //success
      console.log("facebook result  " + response.credential)
      setUser(response)
  }
  const handleLoginFailure = (error) => {                            //failure
      console.log(error)
  }

  return (
    <>
      <div className={styles.mainCont}>
        <div className={styles.logoCont}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={tour_set} alt="tourset" className={styles.tourset} />
        </div>
        <div className={styles.signupCont}>
          <form method="post" className={styles.signupForm}>
            <div className={styles.header}>
              <div className={styles.text}>Create Account</div>
              <div className="customlogin">
                <button
                  type="button"
                  onClick={() => login()}
                  className="custombutton"
                >
                  <img src={googlebutton} alt="google"></img>
                  <div>Signup with Google</div>
                </button>

                <div className="loginbutton">
                  <FacebookLogin
                    appId="3478666502461850"
                    autoLoad
                    fields="name, email, picture"
                    callback={responseFacebook}
                    onFailure={handleLoginFailure}
                    render={(renderProps) => (
                      <button
                        type="button"
                        onClick={renderProps.onClick}
                        className="custombutton"
                      >
                        <img src={fb} alt="fb"></img>
                        <div>Signup with Facebook</div>
                      </button>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className={styles.or}>- OR -</div>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className={styles.input}>
                <input type="email" placeholder="Email Address" />
              </div>
              <div className={styles.input}>
                <input type="password" placeholder="Password" />
              </div>
              <div className={styles.input}>
                <input type="password" placeholder="Repeat Password" />
              </div>
            </div>
            <button className={styles.signupSubmit} type="submit">
              Create Account
            </button>
          </form>
          <div className={styles.alreadyAcc} id="alreadyAcc">
            Already have account?{" "}
            <a href="/login" className={styles.login}>
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
