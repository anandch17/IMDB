import React from 'react'
import Watchlist from './Watchlist'

function Moviecard({watchlist,poster_path,name,AddWatchlist,movieObj,RemoveWatchlist}) {
  
  function doesContain(movieObj) {
    return watchlist.some(item => item.id === movieObj.id);
    
  }
  
  
  
  
  
  return (
  

    <div className='h-[40vh] w-[190px] bg-center bg-cover rounded-xl  flex flex-col  items-end justify-between  hover:scale-110 hover:translate-y-[-5px] duration-300 hover:cursor-pointer' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
    {doesContain(movieObj)? <div   onClick={()=>(RemoveWatchlist(movieObj))} className='m-4 bg-black flex justify-center h-7 w-8  rounded-xl items-center'>&#10060;</div>:<div  onClick={()=>(AddWatchlist(movieObj))} className='m-4 bg-black flex justify-center h-7 w-8  rounded-xl items-center'> &#128525;</div>}
   
    <div className=' flex flex-row text-white w-full bg-gray-900/60  rounded-xl text-center'>{name}</div>
    

    
    </div>
    
  )
}

export default Moviecard
// // https://api.themoviedb.org/3/movie/popular?api_key=6f5ab2299aacd0bb92df681b785f413d&language=en-US&page=1
