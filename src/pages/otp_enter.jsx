import logo from "../assets/images/logo.svg";
import kisaan from "../assets/images/kisaan.png";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function OTP_enter(){
    const emptyArr = ['','','','','',''];
    const refs = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()];
    const [inputs, setInputs] = useState(emptyArr)
    useEffect(() => {
    refs[0].current.focus();

    }, []);
    const handleInputChange = (e,index)=>{
       const val = e.target.value;
       console.log(val,index);
        if(!Number(val)) return;
        if(index<inputs.length-1){
            refs[index+1].current.focus();
        }
        const copyInputs = [...inputs];
        copyInputs[index] = val;
        setInputs(copyInputs);
    }
    const handleOnKeyDown = (e,i) =>{
        console.log(e.keyCode)
        if(e.keyCode === 8){
            const copyInputs = [...inputs];
            copyInputs[i] = '';
            setInputs(copyInputs);
            if(i>0){
                refs[i-1].current.focus();
            }
        }

    }
    const handlePaste = (e)=>{
        e.preventDefault();
        const data = e.clipboardData.getData('text');
        if(!Number(data) || data.length !== inputs.length)
            return;

        const pasteCode = data.split('');
        setInputs(pasteCode);
        refs[inputs.length-1].current.focus();
    }
    return(<div className="login_page"><div className="otp_card">
            <img src={logo} className="logo_card" alt="logo"/>
            <div id="welcome">
                Enter your OTP
            </div>
            <div className="login_buttons">
                <div className="otp_box">
                    {
                        emptyArr.map((item,i) => {
                            return <input
                                value={inputs[i]}
                                ref={refs[i]}
                                type="text"
                                maxLength="1"
                                onChange={(e)=>handleInputChange(e,i)
                            }
                            onKeyDown={(e)=>handleOnKeyDown(e,i)}
                            onPaste={(e)=>{handlePaste(e)}}
                            />
                        })
                    }
                </div>
                <Link to={"/dashboard"} className="button-3">Enter OTP</Link>

                <div className="terms">By continuing, you accept Terms & Conditions</div>
            </div>
        </div>
            <img src={kisaan} className="hero_image"/>
        </div>
    )
}
export default OTP_enter