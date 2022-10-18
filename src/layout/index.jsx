import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col justify-center items-center" >
      im layout yo
      <div>{children}</div>

    </div>
  )
}

export default Layout