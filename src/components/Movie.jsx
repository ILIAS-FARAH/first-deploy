import React from 'react'

export default function Movie({movie}) {

        return (
            <div className="col-md-6 col-lg-4 col-xl-3 d-flex mb-4 ">
            <div className="card" >
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {movie?.title || movie?.original_title || movie?.name}
                    </h5>
                    <p className="card-text" style={{ lineHeight: "1.4" }}>
                        {movie.overview.length > 150
                            ? movie.overview.split(" ").slice(0, 20).join(" ") + "..."
                            : movie.overview
                        }
                    </p>
                    {movie.media_type && (
                        <p className="card-text para" style={{ marginTop: "1rem" }}>
                            <strong>Media Type:</strong> {movie.media_type}
                        </p>
                    )}
                    {movie.release_date && (
                        <p className="card-text para">
                            <strong>Release Date:</strong> {movie.release_date}
                        </p>
                    )}
                </div>
            </div>
            </div>
  )
}
