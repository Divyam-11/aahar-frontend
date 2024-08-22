
import './App.css'
import Header from "./Components/Header.jsx";
import kisaan from "../src/assets/images/kisaan.png"
function App() {


  return (
    <>
      <Header/>
        <img src={kisaan} className="kisaan_background"/>
    </>
  )
}

export default App
