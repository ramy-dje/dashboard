import React from 'react'

const Button = ({color,bgColor,text,borderRadius,size}) => {
  return (
    <div style={{color,backgroundColor:bgColor,borderRadius}} className={`text-${size} w-fit  p-3 hover:drop-shadow-xl hover:cursor-pointer`} >
      {text}
    </div>
  )
}

export default Button