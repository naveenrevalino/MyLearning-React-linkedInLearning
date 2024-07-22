import { useState, useEffect } from "react";

export default function FetchFromGraphQL() {

    // STATE : Datat Container
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    // Query String
    const query = `
    query {
        allLifts {
            name
            elevationGain
            status
        }
    }
    `;

    // Build The Options
    const opts = {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({query})
    };

    // API CALL : using useEffect
    useEffect( () => 
    { 
        // Set Loading to true
        setLoading(true);
        // will fetch data from the endpoint
        fetch(`https://snowtooth.moonhighway.com`, opts)
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
    function Lift( {name, elevationGain, status}) {
        return (
            <div>
                <h3>Fetch API : Using GraphQL</h3>
                <h3>{name}</h3>
                <p>{elevationGain} {status}</p>
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
    return (

        <div>
            {data.data.allLifts.map( (lift) => <Lift key={lift.name} name={lift.name} elevationGain={lift.elevationGain} status={lift.status} />)}
        </div>
        );

}