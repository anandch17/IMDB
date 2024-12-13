import React from 'react'
import Logo from '../Movie.png'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('authToken')
    navigate('/login')
  }

  return (
    <div className='flex justify-between items-center border-b border-gray-300 p-4'>
      <div className='flex items-center space-x-8'>
        <img className='w-12' src={Logo} alt='Movie Logo' />
        <Link to='/' className='text-blue-400 text-2xl font-bold'>
          Movies
        </Link>
       
          <Link to='/watchlist' className='text-blue-400 text-2xl font-bold'>
            Watchlist
          </Link>
       
      </div>
      <div className='space-x-4'>
       
          <>
            <Link
              to='/login'
              className='text-gray-600 hover:text-gray-900 text-lg font-semibold'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold'
            >
              Sign In
            </Link>
          </>
       
          <button
            onClick={handleLogout}
            className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg font-semibold'
          >
            Logout
          </button>
    
      </div>
    </div>
  )
}

export default Navbar
