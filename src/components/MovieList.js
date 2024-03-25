import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    const WatchedComponent = props.watchedComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3' key={index}>
                    <img src={movie.Poster} alt='movie'></img>
                    <div className='overlay d-flex align-items-center justify-content-center'>
                        <FavouriteComponent handleFavouritesClick={() => props.handleFavouritesClick(movie)} />
                        <WatchedComponent handleWatchedClick={() => props.handleWatchedClick(movie)} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
