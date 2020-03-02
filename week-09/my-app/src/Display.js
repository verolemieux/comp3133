import React from 'react';
import Greeter from './Greeter';
import LikeButton from './LikeButton';

const Display = () => {
    const buttons = []
    for (var i = 0; i < 10; i++) {
        buttons.push(<LikeButton />)
    }
    return (
        <>        
        <Greeter />
        {buttons}
        </>
    );
}
 
export default Display;