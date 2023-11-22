import React from 'react'

function Sidebar({ children }) {
  return (
        <>
            <div style={{backgroundColor:"black"}}>
                <h1 style={{color:'white'}}>Sidebar</h1>
                <p>Navigation Links</p>
            </div>

            <div>
                {/* Render children */}
                {children}
            </div>
        </>
  )
}

export default Sidebar
