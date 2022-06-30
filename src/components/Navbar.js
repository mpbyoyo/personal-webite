import React, {useState, useEffect} from 'react'

function Navbar({mousable}) {
  const [loadNav, setLoadNav] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoadNav(true)
    }, 1);
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 80
    })
  }
// ${loadNav ? 'top-0 h-20' : '-top-40 hover:top-0 hover:h-20'}
  return (
    <div className={`z-50 sticky transition-all ${mousable ? 'opacity-100' : 'opacity-0 pointer-events-none'} top-0 h-20 duration-1000`}>
      <div className='w-screen h-20 bg-neutral-900 border-b-2 border-b-neutral-600'>
        <a href='#home' onClick={handleClick}>
          <div className='icon left-4 top-3 absolute w-14 h-14 select-none'>
            <p className='text-md select-none hover:text-neutral-100 transition-all text-neutral-500 font-extralight h-0 text-center scale-150 mt-2 mr-0'>MB</p>
          </div>
        </a>

        <nav>
          <ul className='list-none flex mx-28 font-extralight text-3xl text-center select-none text-neutral-500 transition-all duration-200'>
            <li className={`mt-5 border-b-2 border-b-neutral-600 w-20 transition-all duration-200 hover:text-neutral-100 hover:border-b-neutral-50`}><a href='#about' className='w-fit' onClick={handleClick}>About</a></li>
            <li className={`mt-5 border-b-2 border-b-neutral-600 w-fit cursor-pointer transition-all duration-200 hover:text-neutral-100 hover:border-b-neutral-50 mx-7`}><a href='#contact' className='w-fit' onClick={handleClick}>Contact</a></li>
            <li className={`mt-5 border-b-2 border-b-neutral-600 w-fit cursor-pointer transition-all duration-200 hover:text-neutral-100 hover:border-b-neutral-50`}>Resume</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar