import React from 'react'
import ButtonCreateWorkspace from '../../components/ButtonCreateWorkspace';
import InputText from '../../components/InputText';

const StepTwo = ({handleNextStep}) => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-2xl text-gray-800 font-bold text-center mb-3 sm:text-3xl">
        Let's set up a home for all your work
      </h2>
      <h3 className="text-gray-400 font-semibold text-center mb-12">
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