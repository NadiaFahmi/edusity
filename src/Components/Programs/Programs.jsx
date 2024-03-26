import React from 'react'
import './Programs.css'
import prgram_1 from '../../assets/program-1.png'
import prgram_2 from '../../assets/program-2.png'
import prgram_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
// import Nadia from '../../assets/Nadia.png'
import program_icon_3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={prgram_1} alt='' />
        <div className='caption'>
          <img src={program_icon_1} alt='' />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={prgram_2} alt='' />
        
        <div className='caption'>
          <img src={program_icon_2} alt='' />
         
          <p>Masters Degree</p>
        </div>
        
      </div>
      <div className='program'>
        <img src={prgram_3} alt='' />
        <div className='caption'>
          <img src={program_icon_3} alt='' className='imgs'/>
          <p>Post Graduation</p>
        </div>
       </div>
    </div>
  )
}

export default Programs