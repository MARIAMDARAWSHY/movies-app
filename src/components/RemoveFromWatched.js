import React from 'react';

const RemoveFromWatched = (props) => {
    return (
        <>
            <span className='mr-2' onClick={props.handleWatchedClick}>Remove from Watched</span>
        </>
    );
};

export default RemoveFromWatched;
