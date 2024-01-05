import React from 'react'

const Header = ({children}) => {
  return (
    <>
    <div className='bg-gray-900 py-10  items-center'>
        <div className='max-width-md mx-auto w-full'>
            <h1 className='font-bold text-white text-center py-2'>
                Find Images 
                {children}
            </h1>
        </div>
    </div>
      
    </>
  )
}

export default Header
