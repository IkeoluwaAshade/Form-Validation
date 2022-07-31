import React from 'react'
import './Responsiveness.css'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'


const Responsiveness = () => {
    const [toggle, setToggle] = useState(false)

    const toggleChange = () =>{
        setToggle(!toggle)
    }


  return (

    <div className='burgerIconHold' onClick={toggleChange}>
        {toggle ? (
            <MdCancel color='#fff' size='25px' />
        ) : (
            <GiHamburgerMenu color='#fff' size='25px' />
        )}

        <div className='burgerContentHold'>
            {toggle ? <navDivs /> : null}
        </div>
    </div>
  )
}

export default Responsiveness