import logo from "../assets/images/logo.svg";
import kisaan from "../assets/images/kisaan.png";
import {Link} from "react-router-dom";

function Register(){
    return(<div className="login_page"><div className="login_card">
            <img src={logo} className="logo" alt="logo"/>
            <div id="welcome">
                Enter your
                Mobile number
            </div>
            <div className="login_buttons">
                <input type="text" name="phone_number" id="phone_number" placeholder="Phone Number"/>
                <Link to={"/register/otp"} className="button-3">Send OTP</Link>

                <div className="terms">By continuing, you accept Terms & Conditions</div>
            </div>
        </div>
            <img src={kisaan} className="hero_image"/>
        </div>
    )
}
export default Register;