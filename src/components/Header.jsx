import React from 'react'

const Header = ({ categeory,title}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>{categeory}</p>
      <p className='text-3xl font-extrabold text-slate-900 tracking-tight'>{title}</p>
    </div>
  )
}

export default Header