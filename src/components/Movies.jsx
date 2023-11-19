import React from 'react'
import Movie from './Movie'

export default function Movies({movies,genrename}) {
  return (
    <div className='row g-4'>
      <h3 className='display-4'>{genrename.name} movies</h3>
        {
            movies.map((movie)=>(
                <Movie 
                movie={movie}
                key={movie.id}
                />
            ))
        }
    </div>
  )
}
