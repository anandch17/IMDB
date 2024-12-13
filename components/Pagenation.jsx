import React from 'react'

function Pagenation({handlePREV,handleNEXT,PageNo}) {
  return (
    <div className='bg-gray-400 m-8 p-2 rounded-xl flex justify-center'>
        <div className='px-8'>
        <i  onClick={handleNEXT}  className="fa-solid fa-arrow-right"></i>
        </div>
        <div className='font-bold'>
           {PageNo}
        </div>
        <div className='px-8'>
        <i   onClick={handlePREV} className="fa-solid fa-arrow-left"></i>
        </div>
    </div>
  )
}

export default Pagenation