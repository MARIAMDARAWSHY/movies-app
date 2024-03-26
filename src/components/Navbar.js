import React, { useState } from 'react';
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
import NotFound from './components/NotFound'; 

const App = () => {
    const [page, setPage] = useState('home');
    const changePage = (newPage) => {
        setPage(newPage);
    };
    return (
        <div className='container-fluid movie-app'>
            {page === 'home' && (
                <Home changePage={changePage} />
            )}
            {page === 'movies' && (
                <MovieListPage changePage={changePage} />
            )}
            {page === 'about' && (
                <About changePage={changePage} />
            )}
            {page === 'notfound' && (
                <NotFound />
            )}
        </div>
    );
};
const MovieListPage = ({ changePage }) => {
    return (
        <>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <button onClick={() => changePage('home')}>Home</button>
            </div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
            </div>
            {}
        </>
    );
};

export default App;
