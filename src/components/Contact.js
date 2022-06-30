import React from 'react'

function Contact() {
  return (
    <section className="contact bg-neutral-900 border-t-neutral-600 border-t-4 w-screen h-52" id="contact">
      <div className='mt-5 w-96'>
        <h1 className='text-neutral-500 font-extralight text-5xl ml-10'>Contact Me!</h1>
        <ul className='text-neutral-500 font-extralight text-3xl mt-9 flex w-full'>
          <li id='phone' className="phone hover:text-neutral-300 w-0 h-0 ml-10">Phone</li>
          <li id='discord' className="email hover:text-neutral-300 w-0 h-0 ml-40">Discord</li>
          <li id='email' className={`discord ml-40 hover:text-neutral-300 w-0 h-0 text-center`}>Email</li>
          <li id='linkedin' className="linkedin hover:text-neutral-300 w-0 h-0 ml-40"><a href='https://www.linkedin.com/in/maxwell-bourgeois-b1052317a/' target='_blank'>Linkedin</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact