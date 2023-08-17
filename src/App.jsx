import { useState } from "react"
import Step from "./components/Step"
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import StepFive from "./pages/StepFive";



function App() {
  const [servicePicked,setServicePicked] = useState({
    selectedServices:[] ,
    selectedAddons: [],
  })
  
  const handleServiceSelection = (service, cost) => {
    setServicePicked((prevData) => ({
      ...prevData,
      selectedServices: [service,cost]
    }));
  };
  const handleAddonSelection = (addon,cost) => {
    setServicePicked((prevData) => {
      const isSelected = prevData.selectedAddons.includes(addon);
  
      if (isSelected) {
        // Si el addon ya está seleccionado, lo eliminamos del array
        const updatedAddons = prevData.selectedAddons.filter((a) => a !== addon && a !== cost);
        return {
          ...prevData,
          selectedAddons: updatedAddons,
        };
      } else {
        // Si el addon no está seleccionado, lo agregamos al array
        return {
          ...prevData,
          selectedAddons: [...prevData.selectedAddons, [addon,cost]],
        };
      }
    });
  };
  const [currentStep,setCurrentStep] = useState(1)
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne next={nextStep} />;
      case 2:
        return <StepTwo next={nextStep} prev={prevStep} pickService={handleServiceSelection} billingType={price} changeBillingType={changePrice} />;
      case 3:
        return <StepThree next={nextStep} prev={prevStep} billingType={price} pickAddon={handleAddonSelection} />;
      case 4:
        return <StepFour prev={prevStep} next={nextStep} billingType={price} service={servicePicked.selectedServices} selectedaddon={servicePicked.selectedAddons}/>;
      case 5:
        return <StepFive/>;
      default:
        return null;
    }
  };

  const [price,setPrice] = useState(false)

  const changePrice = ()=>{
      setPrice(!price)
  }


  return (
    <div className="backGround">
        <div className="container">
            <div className="c-steps">
              <div className="stepsdiv">
                <Step currentStep={currentStep} num="1" paso="STEP 1" text="YOUR INFO"/>
                <Step currentStep={currentStep} num="2" paso="STEP 2" text="SELECT PLAN"/>
                <Step currentStep={currentStep} num="3" paso="STEP 3" text="ADD-ONS"/>
                <Step currentStep={currentStep} num="4" paso="STEP 4" text="SUMMARY"/>
              </div>
            </div>
            {renderStep()}
        </div>
    </div>
  )
}

export default App
