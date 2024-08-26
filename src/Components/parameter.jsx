import temperature from "../assets/images/temperature.svg"
function parameter(){
    return(<div className="parameter_card">
        <div className="parameter_name">
            T2S
        </div>
        <img src={temperature}/>
        <div className="parameter_value">
            100
        </div>
    </div>)
}
export default parameter;