import React from 'react';

const AddToWatched = (props) => {
    return (
        <>
            <span className='mr-2' onClick={props.handleWatchedClick}>Add to Watched</span>
        </>
    );
};

export default AddToWatched;
