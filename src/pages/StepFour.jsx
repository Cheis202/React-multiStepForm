/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import PrevAndNext from "../components/PrevAndNext"
import Addon from "../components/addon"


const StepFour = ({prev,next,service,selectedaddon,billingType}) => { 
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        const finalValue = [service[1]];
        
        selectedaddon.forEach((addon) => {
          finalValue.push(addon[1]);
        });
        
        const numbersOnly = finalValue.map((addon) => {
          const matches = addon.match(/\d+/);
          return matches ? parseInt(matches[0]) : 0;
        });
        
        const total = numbersOnly.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setFinalPrice(total);
      }, [selectedaddon, service]);

    return(
        <div className="c-resume">
            <div>
                <h1>Finishing up</h1>
                <p>Double-check everything look OK before confirming.</p>
            </div>
            <div className="resume">
                <div className="resume-desc">
                    <div className="servicePicked">
                        <p>{service[0]}{billingType ? " (Monthly)" : " (Yearly)"}</p>
                        <h2>{service[1]}</h2>
                    </div>
                    <div className="addonPicked">
                        {selectedaddon.map((addon, index) => (
                            <Addon key={index} addonInfo={addon[0]} addonPrice={addon[1]} />
                        ))
                        }
                    </div>
                </div>
                <div className="total">
                    <p className="total-text">
                        Total {billingType ? " (per month)" : " (per year)"}
                    </p>
                    <p className="total-price">
                        {`+$${finalPrice}${billingType ? "/mo" : "/yr"}`}
                    </p>
                </div>
            </div>
            <PrevAndNext prev={prev} next={next} text={"Confirm"}/>

        </div>
    )
}


 export default StepFour