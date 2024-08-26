import logo from "../assets/images/logo.svg";
import kisaan from "../assets/images/kisaan.png"
import {Link} from "react-router-dom";
function Login_page(){
return(<div className="login_page"><div className="login_card">
    <img src={logo} className="logo" alt="logo"/>
    <div id="welcome">
        Welcome To <br/> AAHAR
    </div>
    <div className="login_buttons">

        <Link to={"/register"} className="button-3">Login</Link>
        <button className="create_account">Create New Account</button>
        <div className="terms">By continuing, you accept Terms & Conditions</div>
    </div>
</div>
<img src={kisaan} className="hero_image"/>
    </div>
)
}

export default Login_page