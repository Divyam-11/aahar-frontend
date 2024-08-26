import wind from "../assets/images/wind.svg"
import visibility from "../assets/images/visibility.svg"
import humidity from "../assets/images/humidity.svg"
import aqi from "../assets/images/aqi.svg"
function Environment_parameters(){
return(<div className="environment_main">
    <div className="first_env">
        <div className="wind">
            <img src={wind} alt="" />
            <div className="wind_text">Wind: 2mph</div>

        </div>
        <div className="wind">
            <img src={visibility} alt=""/>
            <div className="wind_text">Visibility: 8KM</div>
        </div>
        <div className="wind">
            <img src={humidity} alt=""/>
            <div className="wind_text">Humidity: 99%</div>
        </div>
    </div>
    <div className="second_env">
        <div className="aqi">
    <img src={aqi} alt=""/>
            <div className="aqi_text">AQI: 143</div>
        </div>
    </div>
</div>)
}
export default Environment_parameters;