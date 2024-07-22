import { useState } from "react";

export default function ControlledFormsExample() {

   const [title, setTitle ] = useState("");
   const [color, setColor ] = useState("#000000"); 

    const submit = (e) => {
        e.preventDefault();
        const formObject = { title, color };
        console.log( formObject);
        setColor("#000000");
        setTitle("");
    };

    return (
        <header> 
            <h3>UseState ( State ): Controlled Form Example</h3> 
            <form onSubmit={submit}>
            <input value={title} onChange={ (event) => setTitle(event.target.value) } type="text" placeholder="color title..."></input>
            <input value={color} onChange={ (event) => setColor(event.target.value) } type="color"></input>
            <button>ADD</button>
            </form>
        </header>
        
    );
}