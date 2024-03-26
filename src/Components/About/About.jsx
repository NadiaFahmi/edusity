import React from 'react'
import './About.css'
// import about_img from '../../assets/about.png'
import about_img from '../../assets/Nadeen.jpg'
import play_icon from '../../assets/play-icon.png'

// const About = ({setPlayState}) => {
  const About = (props) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt=''className='about-img' />
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{
          props.setPlayState(true)
        }}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturning Tommorrow's Leaders Today</h2>
        <p>Embark on a transformative educational jpurney wiht our university's comprehensive education program. Our cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <p>With the focus of innovation, hands-on learning, and personalized mentroship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, adminstrator, counselor, or educational leader , our divers range of programs offers the perfect pathway tp acheive your goals and unlock your full potenial in shaping the future of education.</p>

      </div>
    </div>
  )
}

export default About