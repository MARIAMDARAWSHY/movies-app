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
    const [page, setPage] = useState('home'); // يحدد الصفحة التي يجب عرضها

    // دالة تقوم بتغيير الصفحة عند الضغط على الزر
    const changePage = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className='container-fluid movie-app'>
            {/* العرض يعتمد على قيمة الصفحة */}
            {page === 'home' && (
                <Home changePage={changePage} />
            )}
            {page === 'movies' && (
                <MovieListPage changePage={changePage} />
            )}
            {page === 'about' && (
                <About changePage={changePage} />
            )}
            {/* إضافة المكون NotFound */}
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
                {/* زر يقوم بتغيير الصفحة إلى Home */}
            </div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
                {/* قائمة الأفلام */}
            </div>
            {/* هنا يجب عرض قائمة الأفلام المحملة */}
            {}
        </>
    );
};

export default App;
