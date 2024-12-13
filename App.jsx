import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Login from './components/Login'
import Signin from './components/Signin'

function App() {
  let [watchlist, setWatchlist] = useState([])

  let AddWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem('movieapp', JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  let RemoveWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id
    })

    setWatchlist(filteredWatchlist)
    localStorage.setItem('movieapp', JSON.stringify(filteredWatchlist))
    console.log(filteredWatchlist)
  }

  useEffect(() => {
    let Moviesfromlocal = localStorage.getItem('movieapp')
    if (!Moviesfromlocal) {
      return
    }
    setWatchlist(JSON.parse(Moviesfromlocal))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Banner /> <Movie AddWatchlist={AddWatchlist} RemoveWatchlist={RemoveWatchlist} watchlist={watchlist} />
        </>} />
        <Route path='watchlist' element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} RemoveWatchlist={RemoveWatchlist} />} />
        <Route path='login' element={<Login />} />
        <Route path='signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

