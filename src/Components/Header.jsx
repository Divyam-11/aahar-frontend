import './header.css'
import logo from "../assets/images/logo.svg"
import lang_logo from"../assets/images/language_icon.svg"
import down_arrow_icon from "../assets/images/down-arrow-icon.svg"
function Header(){

    return(<div className="main">

        <img src={logo} className="logo" alt="logo"/>
        <div className="langs">
            <img src={lang_logo} alt="language" />
            <p>Language</p>
            <img src={down_arrow_icon} className="down_arrow" alt="down_arrow"/>
        </div>
    </div>)

}

export default Header