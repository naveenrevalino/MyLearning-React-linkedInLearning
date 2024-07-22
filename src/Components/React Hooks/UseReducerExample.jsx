import { useReducer } from "react";

// Using useReducer 
   // * STEP 1 : Define Initial State
   // * STEP 2 : Define Action(s) you want to perform
   // * STEP 3 : Reducer Function : pass the STATE and ACTION as arguments


// STEP 1 : Define Initial State
interface State {
    count: number;
    error: String | null;
}

// STEP 2 : Define Action(s) you want to perform
interface Action {
    type:"increment" | "decrement";
}

// STEP 3 : Reducer Function
function reducer ( state: State, action: Action ) {
    
    const { type } = action;

    switch ( type )
    {
        case "increment": {
            const newCount = state.count + 1;
            const hasError = state.count >= 5;
            return {...state, count: hasError ? state.count : newCount, error: hasError ? "Maximum Reached" : null }
        }
        case "decrement": {
            const newCount = state.count - 1;
            const hasError = state.count <= 0;
            return {...state, count: hasError ? state.count : newCount, error: hasError ? "Minimum Reached" : null }
        }
        default : return state;
    }
}

   // * useReducer takes in some arguments ( three arguments )
   // * two of these are required, the third one is optional, here we will talk about only the required arguments.
   // * First Argument : Reducer Function : This will take in the STATE, perform an ACTION that we define in our code
   // and return a copy of the STATE.
   // * Second Argument : Initial Value of the STATE variable.

export default function UseReducerExample() {

   const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null
   }); 
  
    return (
    <header>
        <h3>Use Reducer : Use Reducer Counter Example</h3>
        <p>Current count : { state.count } </p>
        <p>Error Message : { state.error }</p>
        <button onClick={ () => dispatch( {type: 'decrement'} )} > Decrement</button>
        <button onClick={ () => dispatch( {type: 'increment'} )} > Increment</button>
    </header>
    );
  
  }