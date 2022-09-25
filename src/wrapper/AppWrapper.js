import React from 'react'
import { NavDots, SocialMedia } from '../components'


const AppWrapper = ( Component, idName, classNames ) => function HOC() {
  return (
    <div id={idName} className={`${classNames}`} >
        <Component />
        <SocialMedia />
        
        <NavDots active={idName} />
    </div>
  )
}

export default AppWrapper