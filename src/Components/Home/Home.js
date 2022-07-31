import React from 'react'
import './Home.css'
// import { Images } from '../Images'

const Home = () => {
  return (
    <div className='mainHeader'>
       
       {/* An Header Image will be here which happens to be the background image*/}
       <div className='headerHold'>

           {/* Top Right Corner */}
           <div className='Navigation'>
               <span>Home</span>
           </div>

           <div className='Navigation'>
               <span>Built By</span>
               {/* my Headshot image would be here with a brief introduction of me */}
           </div>

           <div className='Navigation'>
               <span>FAQ</span>
           </div>

           
       </div>


    </div>
  )
}

export default Home