import React from "react";

// Dummy Data
const tahoe_peaks = [
    {name:"Freel", elevation: 10891},
    {name:"Monument", elevation: 10067},
    {name:"Pyramid", elevation: 9983},
    {name:"Tallac", elevation: 9735}
];

// List function
function List( { data, renderItems, renderEmpty } ) {
    return !data.length ? renderEmpty : 
    (<ul>{
        data.map( (eachItem) => (<li key={eachItem.name}> {renderItems(eachItem)}  </li>) )
        }
    </ul>)
}

export default function DataRenderProps() {

    return (
        <List 
        data={ tahoe_peaks }
        renderEmpty={<p>This list is empty!</p>}
        renderItems={ (eachItem) => <React.Fragment>{eachItem.name} - {eachItem.elevation} ft.</React.Fragment>}
        />
    );
}