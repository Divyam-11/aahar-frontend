import left_arrow from "../assets/images/left_arrow.svg"
import map_temp from "../assets/images/map_temp.svg"
import disease from "../assets/images/disease.svg"
import crop from "../assets/images/crop.svg"
import graph from "../assets/images/graph.svg"
import MapEmbed from "./mapEmbed.jsx";
function your_field(){
return(<div className="field_main">
    <div className="field_heading"><div>Your Field</div> <img src={left_arrow} alt=""/> </div>
    <div className="field_cards">

        <MapEmbed/>

        <div className="second_card">
            <div className="disease">
                <div className="disease_img">
                    <img src={disease} alt=""/>
                    <img src={left_arrow} alt=""/>

                </div>
                <div className="disease_text">Disease Prediction</div>
            </div>
            <div className="disease">
            <div className="disease_img">
                    <img src={crop} alt=""/>
                    <img src={left_arrow} alt=""/>

                </div>
                <div className="disease_text">Crop Rotation</div>
            </div>
        </div>
        <div className="third_card">
            <div className="npk_heading">
                <div>NPK Predictions</div>
                <img src={left_arrow} alt=""/>
            </div>
            <img src={graph} alt=""/>
        </div>
    </div>
</div>)
}

export default your_field;