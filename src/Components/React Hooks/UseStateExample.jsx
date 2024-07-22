import { useState } from 'react';



export default function UseStateExample() {

    // counter : denotes my current state of count, by default its value will be ZERO.
    // setCounter : We will use this function to increment or decrement the counter value.
    // This is a perfect example of ARRAY DESTRUCTURING, we learned before in  : ToStartWith -> 4_02DestructringObjectandArrays.html

    const [ counter, setCounter ] = useState(0);
  
    return (
    <header>
        <h3>Use State : Use State Counter Example</h3>
        <p>Current count : { counter } </p>
        <button onClick={ () => setCounter( counter-1 )} > Decrement</button>
        <button onClick={ () => setCounter( counter+1 )} > Increment</button>
    </header>
    );
  
  }