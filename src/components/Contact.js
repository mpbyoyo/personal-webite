import React from 'react'

function Contact() {
  return (
    <section className="contact bg-neutral-900 border-t-neutral-600 border-t-4 w-screen h-52" id="contact">
      <div className='mt-5 w-96'>
        <h1 className='text-neutral-500 font-extralight text-5xl ml-10 select-none'>Contact Me!</h1>
        <ul className='text-neutral-500 font-extralight text-3xl mt-9 -ml-3 flex w-full scale-90'>
          <li id='phone' className="phone hover:text-neutral-300 h-0 ml-10 cursor-pointer">
            <p className='select-none'>Phone</p>
            <p className='text-xl cursor-auto'>504-402-6253</p>
            </li>
          <li id='discord' className="email hover:text-neutral-300 h-0 ml-40 cursor-pointer">
            <p className='select-none'>Discord</p>
            <p className='text-xl cursor-auto'>Light#0378</p>
          </li>
          <li id='email' className={`discord ml-40 hover:text-neutral-300 h-0 text-center cursor-pointer`}>
            <p className='select-none'>Email</p>
            <p className='text-xl cursor-auto'>maxwellbourgeois@gmail.com</p>
          </li>
          <li id='linkedin' className="linkedin hover:text-neutral-300 h-0 ml-40"><a href='https://www.linkedin.com/in/maxwell-bourgeois-b1052317a/' target='_blank'>Linkedin</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact