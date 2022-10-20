import React, { useEffect, useState } from 'react'
import Button  from '../../components/ButtonCreateWorkspace.jsx'
import StepOne from './StepOne.jsx'
import StepThree from './StepThree.jsx'
import brandLogo from '../../assets/brand.png'
import StepTwo from './StepTwo.jsx'
import ProgressIndicator from '../../components/ProgressIndicator.jsx'
import StepFour from './StepFour.jsx'


const OnboardingPage = () => {

  useEffect(() => {
    console.log(currentStep)   
  }, [])
  
  const steps = [1,2,3,4]

  const [currentStep,setCurrentStep] = useState(1);

  const handleNextStep = () => {
    console.log('hi')
    if(currentStep===steps[steps.length-1 ])
    {alert("Hire Me"); return}
    setCurrentStep(oldState=> oldState+1)
  }

  const goToPrevStep=()=>{
    if(currentStep===steps[0])
    {alert("Hire Me"); return}
    setCurrentStep(oldState=> oldState-1)
  }
  
  return (
    <div className="flex flex-col items-center">
      <button onClick={goToPrevStep}>Back</button>
      <h1 className=" mt-16 mb-10 -ml-5 text-3xl custom-black font-bold flex flex-row justify-center items-center">
        <img className="w-14" src={brandLogo}></img>Eden
      </h1>
      <br />
      <div className="text-center mb-20 flex">
        {steps.map((x) => (
          <ProgressIndicator
            currentStep={currentStep}
            iterator={x}
            lastStep={steps[steps.length - 1]}
          />
        ))}
      </div>
      <div className="flex flex-col items-center">
      { currentStep===1? <StepOne handleNextStep={handleNextStep}/>
        :currentStep===2?<StepTwo handleNextStep={handleNextStep}/>
        :currentStep===3?<StepThree handleNextStep={handleNextStep}/>
        :currentStep===4?<StepFour handleNextStep={handleNextStep}/>
        :null
      }
      </div>

    </div>
  );
}

export default OnboardingPage 