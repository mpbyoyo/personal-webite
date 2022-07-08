import React from 'react'
import rubyshield from '../attachments/rubyshield.png'
import railsshield from '../attachments/railsshield.png'
import reactshield from '../attachments/reactshield.png'
import tailwindshield from '../attachments/tailwindshield.png'
import jsshield from '../attachments/jsshield.png'
import cssshield from '../attachments/cssshield.png'
import htmlshield from '../attachments/htmlshield.png'

function About() {
  return (
    <section className='' id="about">
      <div className="about relative w-screen min-h-screen bg-neutral-800 border-t-4 border-t-neutral-600">
        <div className="relative text-6xl text-white w-screen justify-center h-full">

          <h1 className='text-neutral-500 text-6xl scale-110 mt-10 text-center'>About Me</h1>

          <section id='aboutme'>
            <div className='relative bg-neutral-900 rounded-xl w-4/5 my-5 p-10 flex text-center left-52 x-center top-28 aboutme'>
              <img className="w-40 mr-10 pointer-events-none" src="" alt="Picture of me" />
              <p className='text-xl'>This is information about me</p>
            </div>
          </section>
          
          <br />
          <section id='aboutskills'>
            <h1 className='text-neutral-400 text-6xl scale-110 text-center opacity-0'>.</h1>
            <div className='text-xl relative w-4/5 flex left-52 x-center top-24 skills'>

              <div className='bg-neutral-900 rounded-xl mr-4 p-10 w-4/12 languages'>
                <p className='ml-3 mb-4'>Languages:</p>
                <div className='flex flex-wrap'>
                  <div>
                    <img className='shields w-20 mx-1 hover:scale-105 transition-all' src={jsshield} alt="" />
                    <p>JavaScript</p>
                  </div>
                  <div className='text-center'>
                    <img className='shields w-20 mx-1 hover:scale-105 transition-all' src={rubyshield} alt="" />
                    <p>Ruby</p>
                  </div>
                  <div className='text-center'>
                    <img className='shields w-20 mx-1 hover:scale-105 transition-all' src={cssshield} alt="" />
                    <p>CSS</p>
                  </div>
                  <div className="text-center">
                    <img className='shields w-20 mx-1 hover:scale-105 transition-all' src={htmlshield} alt="" />
                    <p>HTML</p>
                  </div>
                </div>
                <p className='text-xl ml-3 mt-14 mb-4'>Frameworks:</p>
                <div className='flex flex-wrap'>
                  <div className="text-center">
                    <img className='shields w-20 mx-1 hover:scale-105 transition-all' src={reactshield} alt="" />
                    <p className='w-20'>React JS</p>
                  </div>
                  <div className="text-center">
                    <img className='shields w-20 mx-1 hover:scale-105 transition-all' src={railsshield} alt="" />
                    <p>Rails</p>
                  </div>
                  <div className="text-center">
                    <img className='shields w-20 mx-1 hover:scale-105 transition-all' src={tailwindshield} alt="" />
                    <p>TailWind</p>
                  </div>
                </div>
              </div>


              <div className='bg-neutral-900 rounded-xl p-10 w-8/12 other-box float-right'>
                
              </div>


            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default About