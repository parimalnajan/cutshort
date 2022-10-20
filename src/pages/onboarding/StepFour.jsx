import React, { useContext } from 'react'
import {StepContext} from '../onboarding'


const StepFour = () => {
  const {value, handleNextStep} = useContext(StepContext)

  return (
    <div className='flex flex-col items-center'>
        <span style={{fontSize:"62px"}} className="material-symbols-outlined text-brand active mb-8">
        check_circle
        </span>

    <h2 className='text-3xl font-bold custom-black mb-4'>Congratulations, Eren Yaeger!</h2>
    <h3 className='text-sm font-medium custom-gray mb-6'>You have completed onboarding, you can start using the Founding Titan!</h3>

    <button 
      className={`text-gray-300 text-sm font-semibold bg-brand w-96 rounded-md p-4 `}
      onClick={handleNextStep}
    >
      Launch Eden
    </button>
    </div>


  )
}

export default StepFour