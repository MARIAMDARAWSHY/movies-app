import React from 'react';

const RemoveFavourites = (props) => {
    return (
        <>
            <span className='mr-2' onClick={props.handleFavouritesClick}>Remove from Favourites</span>
        </>
    );
};

export default RemoveFavourites;
