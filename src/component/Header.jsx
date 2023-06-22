import React from 'react'

function Header({text, bgColor, textColorr}) {

    // const headerStyles = {
    //     backgroundColor : bgColor,
    //     textColor: textColorr
    // }

  return (
    <header style = {{backgroundColor: 'blue', color: 'red'}}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

export default Header