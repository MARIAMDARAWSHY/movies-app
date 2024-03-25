import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import AddToWatched from './components/AddToWatched';
import RemoveFromWatched from './components/RemoveFromWatched';
import About from './components/About'; 
import Home from './components/Home';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [watched, setWatched] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showAbout, setShowAbout] = useState(false);
    const [showHome, setShowHome] = useState(true); 

    const getMovieRequest = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=2acd84b9`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const addWatchedMovie = (movie) => {
        const newWatchedList = [...watched, movie];
        setWatched(newWatchedList);
    };

    const removeWatchedMovie = (movie) => {
        const newWatchedList = watched.filter(
            (watchedMovie) => watchedMovie.imdbID !== movie.imdbID
        );

        setWatched(newWatchedList);
    };

    const toggleAbout = () => {
        setShowAbout(!showAbout);
    };

    const toggleHome = () => {
        setShowHome(!showHome);
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <button onClick={toggleAbout}>About</button>
                <button onClick={toggleHome}>Home</button>
            </div>
            {showAbout ? <About /> : null}
            {showHome ? <Home /> : null} 
            <>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading heading='Movies' />
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className='row'>
                    <MovieList
                        movies={movies}
                        handleFavouritesClick={addFavouriteMovie}
                        handleWatchedClick={addWatchedMovie}
                        favouriteComponent={AddFavourites}
                        watchedComponent={AddToWatched}
                    />
                </div>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading heading='Favourites' />
                </div>
                <div className='row'>
                    <MovieList
                        movies={favourites}
                        handleFavouritesClick={removeFavouriteMovie}
                        handleWatchedClick={addWatchedMovie}
                        favouriteComponent={RemoveFavourites}
                        watchedComponent={AddToWatched}
                    />
                </div>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading heading='Watched' />
                </div>
                <div className='row'>
                    <MovieList
                        movies={watched}
                        handleFavouritesClick={addFavouriteMovie}
                        handleWatchedClick={removeWatchedMovie}
                        favouriteComponent={AddFavourites}
                        watchedComponent={RemoveFromWatched}
                    />
                </div>
            </>
        </div>
    );
};

export default App;
