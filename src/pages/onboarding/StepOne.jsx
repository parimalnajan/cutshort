import React from 'react'
import ButtonCreateWorkspace from '../../components/ButtonCreateWorkspace';
import InputText from '../../components/InputText';

const StepOne = ({handleNextStep}) => {
  return (
    <div>
      <h2 className="text-2xl custom-black font-bold text-center mb-3 sm:text-3xl">
        Welcome! First things first...
      </h2>
      <h3 className="custom-gray font-medium text-center mb-12">
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