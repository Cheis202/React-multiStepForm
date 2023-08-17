/* eslint-disable react/prop-types */
import Forms from "../components/Forms"


const StepOne = ({next})=>{



    return(
        <div className="c-form">
                <div className="form-text">
                  <h1>Personal Info</h1>
                  <p>Please provide your name, email address and phone number.</p>
                </div>
                <div className="form-input">
                  <Forms type="text" text="Name" example="EJ: Jack Sparrow" />
                  <Forms type="email" text="Email Address" example="EJ: jacksparrow@lorem.com" />
                  <Forms type="text" text="Phone Number" example="EJ: 1123456789" />
                </div> 
                <div className="next-container">
                  <button onClick={next} className="next">Next Step</button>
                </div>
        </div>
    )
}


export default StepOne