import React from 'react'

import './Content.scss'

export function Content(props) {

  const { children } = props; 
  

  return (
    <div className='content'>
        
        <div>
          {children}
        </div>
        
    </div>
  )
}
