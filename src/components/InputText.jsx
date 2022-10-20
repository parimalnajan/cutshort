import React from 'react'

const InputText = ({label,isOptional,prefix}) => {
  return (
    <div className='mb-5'>
      <legend className="flex flex-row text-sm font-semibold text-gray-500 mb-1.5">
        <div>{label}</div>

        {isOptional === true ? (
          <span className="text-gray-300">
            &nbsp;{"(optional)"}
          </span>
        ) : null}
        
      </legend>

      <div className={` max-w-sm w-96 flex rounded-md text-sm font-medium text-gray-400`}>
       {prefix? <div 
            className='p-3 border-2 border-gray-200 rounded-tl-md rounded-bl-md border-r-0 bg-gray-100 min-w-min '>
            {prefix}
        </div>
        :null}
    
        <input
            type="text"
            className={`p-3 px-3 border-2 border-gray-200 w-full ${prefix?"rounded-tr-md rounded-br-md":'rounded-md'}`}
        ></input>
      </div>      
    </div>
  );
}

export default InputText