import React, { useEffect, useState } from 'react';
import gener from '../utility/gener'
import generic from '../utility/gener';

function Watchlist({ watchlist, setWatchlist,RemoveWatchlist }) {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState(['All Genres'])
  const [currGenre,setCurrgenre]=useState('All Genres')

  let handlesearch = (e) => {
    setSearch(e.target.value);
  };
   
  let handlefilter=(genre)=>{
    setCurrgenre(genre)
  }

  let sortascpop = () => {
    let sortincpop = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchlist([...sortincpop]);
  };

  let sortdecpop = () => {
    let sortdecrpop = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchlist([...sortdecrpop]);
  };

  let sortasc = () => {
    let sortinc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortinc]);
  };

  let sortdecr = () => {
    let sortdec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortdec]);
  };


  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return generic[movieObj.genre_ids[0]]
    })
    temp=new Set(temp)
    setGenre(['All Genre', ...temp])
    console.log(temp)
  }, [watchlist])


  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genre.map((genred) => {
          return <div onClick={()=>handlefilter(genred)} className={ currGenre==genred?'mx-4 text-white font-bold flex justify-center items-center h-[3rem] w-[9rem] rounded-xl bg-blue-400':'mx-4 text-white font-bold flex justify-center items-center h-[3rem] w-[9rem] rounded-xl bg-gray-400'}>
            {genred}
          </div>
        })}
      </div>

      <div className='flex justify-center my-7'>
        <input
          onChange={handlesearch}
          value={search}
          type='text'
          placeholder='search movies'
          className='px-4 h-[3rem] w-[18rem] bg-gray-200 outline-none'
        />
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-10'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>
                <div className='flex justify-center items-center'>
                  <div onClick={sortasc} className='ml-2 p-3 cursor-pointer'>
                    <i className='fa-solid fa-arrow-up'></i>
                  </div>
                  <span>Ratings</span>
                  <div onClick={sortdecr} className='ml-2 p-3 cursor-pointer'>
                    <i className='fa-solid fa-arrow-down'></i>
                  </div>
                </div>
              </th>
              <th>
                <div className='flex justify-center items-center'>
                  <div onClick={sortascpop} className='ml-2 p-3 cursor-pointer'>
                    <i className='fa-solid fa-arrow-up'></i>
                  </div>
                  <span>Popularity</span>
                  <div onClick={sortdecpop} className='ml-2 p-3 cursor-pointer'>
                    <i className='fa-solid fa-arrow-down'></i>
                  </div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if (currGenre=='All Genre'){
                return true
              }
              else{
                return generic[movieObj.genre_ids[0]]==currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className='border-b-2' key={movieObj.id}>
                    <td className='flex items-center px-6 py-4'>
                      <img
                        className='h-[5rem] w-[10rem]'
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt={movieObj.original_title}
                      />
                      <div className='mx-10 p-5'>{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{generic[movieObj.genre_ids[0]]}</td>
                    <td  onClick={()=>RemoveWatchlist(movieObj)} className='text-red-800 cursor-pointer'>Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
