
import React from 'react'


function Dado(min, max) {
    let min = 1;
    let max = 11;

    let numero = Math.random() * (max - min) + min;

    return (
        <div className='dado'>
            <h1 className='numero'>{numero}</h1>
        </div>
    );
}

export default Dado;