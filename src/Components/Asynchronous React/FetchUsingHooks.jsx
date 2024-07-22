import { useState, useEffect } from "react";

export default function FetchUsingHooks() {

    // STATE : Datat Container
    const [ data, setData ] = useState(null);

    // API CALL : using useEffect
    useEffect( () => 
    { 
        // will fetch data from the endpoint
        fetch(`https://api.github.com/users/moonhighway`)
        // convert the data to json
        .then( (response) => response.json())
        // set the data to the STATE using setData
        .then( (data) => setData(data))

        // Finally we are passing an emptu array as an argument to useEffect, 
        // that way it will only fetch the data from the source only once ( when the application loads for the first time ).
    }, [] );

    // CHILD COMPONENT : We will use this to display that data in the UI
    function GitHubUser( {name, location, avatar}) {
        return (
            <div>
                <h3>Fetch API : Fetch data from external source</h3>
                <h3>{name}</h3>
                <p>{location}</p>
                <img src={avatar} height={150} alt={name}></img>
            </div>
        );
    }


    // RETURN STATEMENT
    if(data) 
    return <GitHubUser name={data.name} location={data.location} avatar={data.avatar_url}/>

}