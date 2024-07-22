import { useRef } from "react";

export default function UncontrolledFormsExample() {

    const textTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = textTitle.current.value;
        const color = hexColor.current.value;
        const formObject = { title, color };
        console.log( formObject);
        textTitle.current.value = "";
        hexColor.current.value = "";
    };

    return (
        <header> 
            <h3>UseRef ( Reference ): Uncontrolled Form Example</h3> 
            <form onSubmit={submit}>
            <input ref={ textTitle }  type="text" placeholder="color title..."></input>
            <input ref={ hexColor } type="color"></input>
            <button>ADD</button>
            </form>
        </header>
        
    );
}