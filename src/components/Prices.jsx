import { useState } from "react";

/* eslint-disable react/prop-types */
const Prices = ({img,text,prices,additionalText,priceClas,func})=>{
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck=()=>{
    setIsChecked(!isChecked)
    }
    return(
        <button 
            className={`${priceClas} ${isChecked ? "checkedPrice" : ""}`} 
            onClick={() => {
            func(text, prices);
            handleCheck();
            }}>
            <div 
                className="btn-plan-container">
                <img 
                    src={img} 
                    alt="" />
                <div 
                    className="btn-text">
                    <h4>{text}</h4>
                    <p>{prices}</p>
                    <h5 className="addText">{additionalText}</h5>
                </div>
            </div>
        </button>
    )
}

export default Prices