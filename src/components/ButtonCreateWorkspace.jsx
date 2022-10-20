import React from 'react'

const ButtonCreateWorkspace = ({ classNames, onClick }) => {
  return (
    <button onClick={onClick}
      className={`text-gray-300 text-sm font-medium bg-brand w-96 rounded-md p-3.5 ${classNames}`}
    >
      Create Workspace
    </button>
  );
};
export default ButtonCreateWorkspace