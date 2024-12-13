import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[59vh] bg-cover bg-no-repeat bg-center bg-top h-screen flex items-end justify-center text-center' style={{ backgroundImage: `url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp)`}}>
      <div className='text-white w-full bg-blue-900/60 p-1 '>Avengers end game</div>
    </div>
  )
}

export default Banner