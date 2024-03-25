import React from 'react';

const AddFavourites = (props) => {
    return (
        <>
            <span className='mr-2' onClick={props.handleFavouritesClick}>Add to Favourites</span>
        </>
    );
};

export default AddFavourites;
