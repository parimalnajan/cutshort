import React from 'react'
import ButtonCreateWorkspace from '../../components/ButtonCreateWorkspace';
import InputText from '../../components/InputText';

const StepOne = ({handleNextStep}) => {
  return (
    <div>
      <h2 className="text-2xl text-gray-800 font-bold text-center mb-3 sm:text-3xl">
        Welcome! First things first...
      </h2>
      <h3 className="text-gray-400 font-semibold text-center mb-12">
        You can always change them later.
      </h3>
      <InputText label={"Full Name"} />
      <InputText label={"Display Name"} isOptional={false}/>
      <div onClick={handleNextStep}>
      <ButtonCreateWorkspace classNames={""}/>
      </div>
    </div>

  );
}

export default StepOne