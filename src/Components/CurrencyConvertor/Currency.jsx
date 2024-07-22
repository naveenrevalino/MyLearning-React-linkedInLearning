import { useState, useRef } from 'react';

let convertionRate = 4.65;

export default function Convertor() {

    const [ conversion, setConversion ] = useState(0);

    function simpleConv( value ) {

        const aftConv = value * convertionRate;
        console.log(aftConv);
        setConversion ( aftConv);

    }

    return(
        <div>
            <h3>Money Convertor</h3>
            <form>
            <input type="text" placeholder="Enter amount in INR" onChange={ (event) => simpleConv(event.target.value)}></input>
            <button>Convert</button>
            </form>
        </div>
    );
}

