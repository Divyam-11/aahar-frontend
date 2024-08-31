import sunny from "../assets/images/sunny.svg"
import location from "../assets/images/location.svg"
function Weather_card(){
return(
    <div className="weather_card_main">
        <div className="weather_data">37°
            <img src={sunny} alt=""/>
        </div>
        <div className="location">
            <img src={location} alt="" />
            <p>Patiala,IN</p>
        </div>
    </div>
)
}
export default Weather_card;