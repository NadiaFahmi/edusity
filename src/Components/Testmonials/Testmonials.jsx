import React ,{useRef}from  'react'
import './Testmonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import suzi from '../../assets/ssuzi.png'
// import user_1 from '../../assets/user-1.png'
import nahla from '../../assets/Nahla.png'

// import user_2 from '../../assets/user-2.png'
// import user_3 from '../../assets/user-3.png'
import Norhan from '../../assets/Norhan.png'
// import user_4 from '../../assets/user-4.png'
import Jailan from '../../assets/Jailan.png'

const Testmonials = () => {

  const slider = useRef()
  let tx =0;
  const slideForward = ()=>{
   if(tx > -50){
     tx -=25;
  }
  
   slider.current.style.transform = `translateX(${tx}%)`

  }
  const slideBackward = ()=>{
    if(tx < 0){
      tx +=25;
   }
   slider.current.style.transform = `translateX(${tx}%)`


  }


  return (
    <div className='testmonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt='' className='back-btn'onClick={slideBackward}/>
      <div className='slider'>

        <ul ref={slider}>
        

          <li>
          <div className='slide'>
            <div className='user-info'>
              {/* <img src={user_1} alt=''/> */}
              <img src={suzi} alt=''/>
              <div>
                {/* <h3>Milliama Jackson 1</h3> */}
                <h3>Suzan Salama</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truly eceeded my expectation</p>
          </div>
          </li>
          <li>
          <div className='slide'>
            <div className='user-info'>
              {/* <img src={user_2} alt=''/> */}
              <img src={nahla} alt=''/>

              <div>
                {/* <h3>William Jackson 2</h3> */}
                <h3>Nahla Salam</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truly eceeded my expectation</p>
          </div>
          </li>
          <li>
          <div className='slide'>
            <div className='user-info'>
              <img src={Norhan} alt=''/>
              <div>
                {/* <h3>William Jackson 3</h3> */}
                <h3>Norhan Salam</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truly eceeded my expectation</p>
          </div>
          </li>
          <li>
          <div className='slide'>
            <div className='user-info'>
              {/* <img src={user_4} alt=''/> */}
              <img src={Jailan} alt=''/>

              <div>
                {/* <h3>William Jackson 4</h3> */}
                <h3>Jailan Salama </h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community , state-of-the-art facilities , and commitment to academic excellence have truly eceeded my expectation</p>
          </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Testmonials