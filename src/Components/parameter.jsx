import temperature from "../assets/images/temperature.svg"

function parameter({name,value}){

    return(<div className="parameter_card">
        <div className="parameter_name">
            {name}
        </div>
        <img src={temperature}/>
        <div className="parameter_value">
            {value}
        </div>
    </div>)
}
export default parameter;