import { useState, useEffect } from "react";

export default function HandlingDataLoadingStates() {

    // STATE : Datat Container
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    // API CALL : using useEffect
    useEffect( () => 
    { 
        // Set Loading to true
        setLoading(true);
        // will fetch data from the endpoint
        fetch(`https://api.github.com/users/moonhighway`)
        // convert the data to json
        .then( (response) => response.json())
        // set the data to the STATE using setData
        .then( (data) => setData(data))
        .then( () => setLoading(false))
        .catch( () => setError);

        // Finally we are passing an emptu array as an argument to useEffect, 
        // that way it will only fetch the data from the source only once ( when the application loads for the first time ).
    }, [] );

    // CHILD COMPONENT : We will use this to display that data in the UI
    function GitHubUser( {name, location, avatar}) {
        return (
            <div>
                <h3>Fetch API : Handling Data Loading States</h3>
                <h3>{name}</h3>
                <p>{location}</p>
                <img src={avatar} height={150} alt={name}></img>
            </div>
        );
    }

    // If Loading is true
    if(loading) return <h2>Data is loading...</h2>;

    // If there is any erroe
    if(error) return (<pre>{JSON.stringify(error)}</pre>);

    // If no data we return null
    if(!data) return null;

    // RETURN STATEMENT
    if(data) 
    return <GitHubUser name={data.name} location={data.location} avatar={data.avatar_url}/>

}