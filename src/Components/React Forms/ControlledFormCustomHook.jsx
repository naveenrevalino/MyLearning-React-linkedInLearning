import { useState } from "react";

// Custom Hook Function
function useInput(initialValue) {

    // Make use of STATE
    const [value, setValue] = useState(initialValue);

    // Return an object
    return [
        {
            // will return an array 
            value, 
            onChange: (e) => setValue(e.target.value)
        }, 
        // Clean up function
        () => setValue(initialValue)
    ]

}

export default function ControlledFormCustomHook() {

   const [titleProps, resetTitle ] = useInput("");
   const [colorProps, resetColor ] = useInput("#000000"); 

    const submit = (e) => {

        e.preventDefault();
        
        const formObject = {
            title:titleProps.value,
            color:colorProps.value
        }

        console.log(formObject);

        resetTitle();
        resetColor();
    };

    return (
        <header> 
            <h3>UseState ( State ): Controlled Form Using Custom Hook</h3> 
            <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color title..."></input>
            <input {...colorProps} type="color"></input>
            <button>ADD</button>
            </form>
        </header>
        
    );
}