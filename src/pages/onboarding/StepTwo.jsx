import React, { useContext } from 'react'
import ButtonCreateWorkspace from '../../components/ButtonCreateWorkspace';
import InputText from '../../components/InputText';
import {StepContext} from '../onboarding'

const StepTwo = () => {
  const {value, handleNextStep} = useContext(StepContext)

  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-2xl custom-black font-bold text-center mb-3 sm:text-3xl">
        Let's set up a home for all your work
      </h2>
      <h3 className="custom-gray font-medium text-center mb-12">
        You can always create another workplace later.
      </h3>
      <InputText label={"Workspace Name"}/>
      <InputText label={"Workspace URL"} isOptional={true} prefix={"www.eden.com/"}/>
      <div onClick={handleNextStep}>
      <ButtonCreateWorkspace/>
      </div>
    </div>
  );
}

export default StepTwo