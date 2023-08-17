/* eslint-disable react/prop-types */
import AddOns from "../components/AddOns"
import PrevAndNext from "../components/PrevAndNext"

const StepThree = ({next,prev,billingType,pickAddon}) => { 

    return(
        <div className="c-addOns">
            <div>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="addons_container">
                <AddOns select={pickAddon} service="Online service" desc="Access to multiplayer games" mount={billingType ? "+$1/mo" : "+$10/yr"}/>
                <AddOns select={pickAddon} service="Larger storage" desc="Extra 1TB of cloud save" mount={billingType ? "+$2/mo" : "+$20/yr"}/>
                <AddOns select={pickAddon} service="Customizable profile" desc="Custom theme on your profile" mount={billingType ? "+$2/mo" : "+$20/yr"}/>
            </div>
            <PrevAndNext next={next} prev={prev} text={"Next Step"}/>


        </div>
    )
}


 export default StepThree