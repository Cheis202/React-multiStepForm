/* eslint-disable react/prop-types */
import Prices from "../components/Prices"
import PrevAndNext from "../components/PrevAndNext"

const StepTwo = ({next,prev, billingType, changeBillingType, pickService})=>{

    
    return(
        <div className="c-plans">
            <div>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="plans_prices">
                <Prices
                    func={pickService}
                    img="./icon-arcade.svg" 
                    priceClas={billingType ? "prices-btn-monthly" : "prices-btn-yearly"} 
                    text="Arcade" 
                    prices={billingType ?"$9/mo" : "$90/yr"} 
                    additionalText={billingType ? "" : "2 months free"}/>
                <Prices 
                    func={pickService}
                    img="./icon-advanced.svg" 
                    priceClas={billingType ? "prices-btn-monthly" : "prices-btn-yearly"}  
                    text="Advanced" prices={billingType ?"$12/mo" : "$120/yr"} 
                    additionalText={billingType ? "" : "2 months free"}/>
                <Prices 
                    func={pickService}
                    img="./icon-pro.svg" 
                    priceClas={billingType ? "prices-btn-monthly" : "prices-btn-yearly"}  
                    text="Pro" 
                    prices={billingType ?"$15/mo" : "$150/yr"} 
                    additionalText={billingType ? "" : "2 months free"}/>
            </div>
            <div className="toggle">
                <div className="toggle-c">
                    <p  className={billingType ? "mly" : "yr"}
                    >Monthly</p>
                    <div className="toggle-background">
                        <button className={billingType ? "monthly" : "yearly"} onClick={changeBillingType}></button>
                    </div>
                    <p  className={billingType ? "yr" : "mly"}
                    >Yearly</p>
                </div>
            </div>
            <PrevAndNext prev={prev} next={next} text={"Next Step"}/>
        </div>
    )
}


export default StepTwo