import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import { name } from 'tar/lib/types'
import Pagenation from './Pagenation'

function Movie({AddWatchlist,RemoveWatchlist,watchlist}) {
  const[movies,setMovies]=useState([])
  const[PageNo,setPageNo]=useState(1)

  const handlePREV =()=>{
    if(PageNo==1){
      setPageNo(1)
    }
    else{
      
      setPageNo(PageNo-1)
    }
  }

  const handleNEXT =()=>{
    setPageNo(PageNo+1)
}

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6f5ab2299aacd0bb92df681b785f413d&language=en-US&page=${PageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[PageNo])
  return (
    <div className='p-2 '>
      <div className=' m-5 text-center text-2xl font-bold '>
        Trending Movies
      </div>
<div className=' gap-7 flex flex-row flex-wrap justify-around items-center'>

{movies.map((movieObj)=>{
  return <Moviecard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} AddWatchlist={AddWatchlist} RemoveWatchlist={RemoveWatchlist} watchlist={watchlist} />
})}



</div>
<Pagenation PageNo={PageNo} handleNEXT={handleNEXT} handlePREV={handlePREV}/>
    </div>
  )
}

export default Movie