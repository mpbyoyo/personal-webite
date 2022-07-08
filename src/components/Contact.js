import React from 'react'

function Contact() {
  return (
    <section className="contact bg-neutral-900 border-t-neutral-600 border-t-4 h-52" id="contact">
      <div className='mt-5 flex flex-wrap'>
        <h1 className='text-neutral-500 font-extralight text-5xl absolute left-24 select-none contact-header'>Contact Me!</h1>
        <ul className='text-neutral-500 font-extralight text-3xl mt-16 absolute flex flex-wrap scale-90 contacts'>
          <li id='phone' className="method phone hover:text-neutral-300  cursor-pointer">
            <p className='select-none'>Phone</p>
            <p className='text-xl cursor-auto'>504-402-6253</p>
          </li>
          <li id='email' className={`method discord hover:text-neutral-300  text-center cursor-pointer`}>
            <p className='select-none'>Email</p>
            <p className='text-lg cursor-auto text-center w-fit'>maxwellbourgeois@gmail.com</p>
          </li>
          <li id='discord' className="method email hover:text-neutral-300  cursor-pointer">
            <p className='select-none'>Discord</p>
            <p className='text-xl cursor-auto'>Light#0378</p>
          </li>
          <li id='linkedin' className="method linkedin hover:text-neutral-300 "><a href='https://www.linkedin.com/in/maxwell-bourgeois-b1052317a/' target='_blank'>Linkedin</a></li>
          <li id='github' className="method github hover:text-neutral-300 "><a href='https://github.com/mpbyoyo' target='_blank'>Github</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact