/* eslint-disable react/prop-types */
const Step = ({num,paso,text,currentStep}) => {

    return(

        <div className="steps_content">
            <div className={`number ${num == currentStep ? "number-background" : ""}`}>
              <p>{num}</p>
            </div>
            <div className="text">
              <div>
                <h5>{paso}</h5>
                <h2>{text}</h2>
              </div>
            </div>
        </div>
    )

}

export default Step