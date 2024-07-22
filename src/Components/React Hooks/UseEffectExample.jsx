import { useState, useEffect } from 'react';


export default function UseEffectExample() {

    // USE EFECT : COUNT EXAMPLE
    // * When your state changes from one value to another it will cause a side effect, we can control this side effect.
    // * The benifite of side effect is : You can control what side effects are and what they react to.
    // * As the count in the STATE changes, I want somethig to happen as a SIDE-EFFECT.
    // * We are going to react to the count as a side-effect
    // * STEP 1 : import useEffect from react ( check the import statement at the top ).
    const [ count, setCount ] = useState(0);
    

    // useEffect() :
    // Contains three arguments,
    // First argument is a function : This will be the code that we want to run,
    // Second is a return function ( is optional ), 
    // Third is an empty array : where we define what it should listen and react to.
    useEffect( () => 
    { 
      // First Argument : Function : This code will run atleast once, even if the array is empty.
      console.log("The count is: ", count );


      // Second Argument : Optional Function ( also called CleanUp Function )
      // Every time a side effect occurs because of a change in the count state, 
      // the clean up function will run first ( it will destroy its previous state  ) and run the code in the first argument runs.
      return () => { console.log("I am being cleaned up!");}
    }, 
    [count] // Third Argument : Array : will be listening to changes in the count state.
    );
  
    return (
    <header>
        <h3>Use Effect : Use Effect Counter Example</h3>
        <p>Current count : { count } </p>
        <button onClick={ () => setCount( count-1 )} > Decrement</button>
        <button onClick={ () => setCount( count+1 )} > Increment</button>
    </header>
    );
  
  }