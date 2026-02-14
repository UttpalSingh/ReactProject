import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-2 text-white'>
    
    <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-35 flex items-center px-10 border-white rounded-full uppercase'>
        
        <Link className='text-[6vw] mt-5' to='/projects'>Work</Link>

    </div>

    <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-35 flex items-center px-10 border-white rounded-full uppercase'>

        <Link className='text-[6vw] mt-5' to='/agence'>Agencey</Link>

    </div>
    </div>
  )
}

export default HomeBottomText
