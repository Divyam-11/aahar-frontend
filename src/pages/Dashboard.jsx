import Weather_card from "../Components/weather_card.jsx";
import Environment_parameters from "../Components/environment_parameters.jsx";
import Your_field from "../Components/your_field.jsx";
import Parameters from "../Components/parameters.jsx";
import Community from "../Components/community.jsx";

function Dashboard(){
    return(<div className="dashboard">
        <div className="first_row">
    <Weather_card />
        <Environment_parameters/>

        <Your_field />
        </div>
        <div className="second_row">
        <Parameters/>
        </div>
        <div className="third_row">
        <Community/>
        </div>
    </div>)
}

export default Dashboard;