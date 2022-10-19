import React from 'react'

const ProgressIndicator = ({ currentStep, iterator ,lastStep }) => {
  return (
    <div className="flex flex-row items-center text-gray-500 ">
      <div className={`${iterator<=currentStep?"bg-brand text-gray-300":""} border-gray-200 border-2 rounded-full w-10 h-10 flex flex-row items-center justify-center`}>
        <div className="text-xs font-semibold">{iterator}</div>
      </div>

    <div> 
        <div style={{ height: "1.5px" }} className={`bg-gray-200 ${iterator==lastStep?"w-0":"w-14"}`}></div> 
        <div
          style={{ height: "0.5px", bottom: "0.9px" }}  // "track" and "thumb"
          className={`bg-brand relative left-0     
          ${iterator==lastStep?"w-0":iterator < currentStep ? "w-14":iterator==currentStep?"w-7" :iterator>currentStep?"w-0":""}`}   // thumb render as empty/half/full as per state
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator