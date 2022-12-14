import React, { useContext } from 'react'
import { StepContext } from '../pages/onboarding'; 


const ProgressCircle = ({ currentStep, iterator ,lastStep }) => {
  return (
    <div className="flex flex-row items-center text-gray-500 ">
      <div className={`${iterator<=currentStep?"bg-brand text-gray-300 ":""} border-gray-100 border-2 rounded-full w-10 h-10 flex flex-row items-center justify-center`}>
        <div className="text-xs font-semibold">{iterator}</div>
      </div>

    <div> 
        <div style={{ height: "1.5px" }} className={`bg-gray-200 ${iterator==lastStep?"w-0":"w-16"}`}></div> 
        <div
          style={{ height: "0.5px", bottom: "0.9px" }}  // "track" and "thumb"
          className={`bg-brand relative left-0     
          ${iterator==lastStep?"w-0":iterator < currentStep ? "w-16":iterator==currentStep?"w-8" :iterator>currentStep?"w-0":""}`}   // thumb render as empty/half/full as per state
        ></div>
      </div>
    </div>
  );
};

 const ProgressIndicator = () => {
  const {steps,currentStep} = useContext(StepContext)

  return (
    <div className="text-center mb-20 flex">     
      {steps.map((x) => (
          <ProgressCircle
            currentStep={currentStep}
            iterator={x}
            lastStep={steps[steps.length - 1]}
          />
        ))}
      </div>

  )
}


export default ProgressIndicator