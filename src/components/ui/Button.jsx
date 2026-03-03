import React from 'react'

const Button = (props) => {
    const { text ,func} = props;
  return (
    <div>
     <button  onClick={func} className="px-12 py-4 rounded-md bg-black text-white border border-orange-500 font-bold py-2 px-4 rounded OrangeShadow duration-200">{text}</button>
      
    </div>
  )
}

export default Button
