import React, { useContext } from 'react'
import ButtonCreateWorkspace from '../../components/ButtonCreateWorkspace';
import {StepContext} from '../onboarding'

const StepThree = () => {
  const {value, handleNextStep} = useContext(StepContext)

    const CardsData=[
        {
            title:"For myself",
            description:"Write beter. Think more clearly. Stay organized",
            icon:"person"
        },
        {
            title:"With my team",
            description:"Wikis, docs, tasks & projects, all in one place.",
            icon:"groups"
        }
    ]
  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-2xl custom-black font-bold text-center mb-3 sm:text-3xl">
        How are you planning to use Eden?
      </h2>
      <h3 className="custom-gray font-medium text-center mb-12">
        We'll streamline your setup experience accordingly.
      </h3>
      <div className="flex flex-row mb-6">
        {CardsData.map((x, i) => (
          <WorkspaceTypeCard
            title={x.title}
            description={x.description}
            icon={x.icon}
          />
        ))}
      </div>
      <div >
        <ButtonCreateWorkspace onClick={handleNextStep}/></div>
    </div>
  );
}

const WorkspaceTypeCard = ({title,description,icon}) =>{
    return (
        <div className="p-5 w-40 h-30 border-gray-200 border-2 rounded-md mx-4">
          <span class="material-symbols-outlined active text-brand mb-4">
            {icon}
          </span>          {/* https://fonts.google.com/icons */}
          <div className="font-extrabold text-gray-600 mb-2 text-sm">{title}</div>
          <div className="text-xs font-semibold text-gray-400">{description}</div>
        </div>
    );
}

export default StepThree