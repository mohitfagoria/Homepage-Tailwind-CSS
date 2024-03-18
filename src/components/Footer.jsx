import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-leto text-gray-400'>
        <li>
          <a href="#" > Facebook</a>
        </li>
        <li>
          <a href="#" > Instagram</a>
        </li>
        <li>
          <a href="#" > Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img className='rounded-full' src="./assets/mohit.jpeg" alt="help" width={50} />
        <div>
          <p className='font-playfair font-thin'>Have any Questions?</p>
          <a href="#" className=' font-lato font-medium'> Talk to a spacialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer