import temperature from "../assets/images/temperature.svg"

function DataParameter({name,value}){

    return(<div className="data_parameter_card">
        <div className="data_parameter_name">
            {name}
        </div>

        <div className="data_parameter_value">
            {value}
        </div>
    </div>)
}
export default DataParameter;