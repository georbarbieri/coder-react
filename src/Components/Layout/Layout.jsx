
import React from 'react'

const Layout = ({children}) => {

  return (
    <div>
        {children}
        <h2 style={{backgroundColor:"#B57EDC"}}>Este sería el Footer</h2>
        
    </div>
  )
}

export default Layout