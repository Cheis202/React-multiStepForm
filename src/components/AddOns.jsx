/* eslint-disable react/prop-types */
import { useState } from "react";

const AddOns = ({service,desc,mount,select}) => { 
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
        select(service,mount)
    };

    return(
        <div className={`addOn ${isChecked ? "chkd" : ""}`}>
            <div className="addon-content">
                <div>
                    <button 
                        className={`check-button ${isChecked ? "checked" : ""}`} 
                        onClick={handleCheck}
                    >
                    </button>
                </div>
                <div className="addon-text">
                    <h2>{service}</h2>
                    <p>{desc}</p>
                </div>
                <div>
                    <p className="addon-price"
                    >{mount}</p>
                </div>
            </div>
        </div>
    )
 }        



export default AddOns