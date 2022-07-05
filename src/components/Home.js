import React, {useEffect, useState} from 'react'
import skills from '../attachments/SkillsIcons.png'

function Home({mousable, setMousable}) {
  const [loadCircle, setLoadCircle] = useState(false)
  const [skillsIcons, setSkillsIcons] = useState(false)
  const [circlePulse, setCirclePulse] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setLoadCircle(true)
      setTimeout(() => {
        setSkillsIcons(true)
        setCirclePulse(true)
        setTimeout(() => {
          setSkillsIcons(false)
          setCirclePulse(false)
          setTimeout(() => {
            setMousable(true)
          }, 700);
        }, 300);
      }, 2000);
    }, 100);
  }, [])
  
  const skillsIconToggle = () => {
    if (mousable) {
      setSkillsIcons(v => !v)
    }
  }
  
  return (
    <section className='home' id='home'>
      <div className={`w-screen ${mousable ? 'h-screen' : 'h-3/4' }  flex justify-center`}>
        <div className={`home-circle mt-56 ${!loadCircle ? 'opacity-0' : 'opacity-100'} ${circlePulse ? 'scale-125' : 'scale-100'} test w-96 h-96 select-none transition-all duration-300`} >
          <img src={skills} className={`${skillsIcons ? 'opacity-10' : 'opacity-0'} w-full h-full rounded-full transition-all duration-200`} alt="skills" />
          <p className='relative -top-3/4 text-6xl select-none hover:text-neutral-300 transition-all text-neutral-500 font-extralight h-0 text-center scale-125' onMouseOver={skillsIconToggle} onMouseOut={skillsIconToggle}>Maxwell Bourgeois</p>
        </div>
      </div>
    </section>
  )
}

export default Home