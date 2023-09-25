import './Signup.css'
import tour_set from '../Assets/tour-set.png'

const Signup = (props) => {
    return (
        <>
        {/* <img className="tourSet" src={tour_set} alt="tour-set" /> */}
        <div className="container">
            <form method="post" className='signupForm'>
                <div className="header">
                    <div className="text">Create Account</div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder='Full Name'/>
                    </div>
                    <div className="input">
                        <input type="email" placeholder='Email Address'/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Repeat Password'/>
                    </div>
                </div>
                <div className="submit-container">
                    <button className='signupSubmit' type='submit'>Create Account</button>
                </div>
            </form>
                <div className="form-switch">
                    Already have an account?
                    <button className='form-switch-btn' onClick={props.xyz("login")}>Log In</button>
                </div>
        </div>
        </>
    )
}

export default Signup