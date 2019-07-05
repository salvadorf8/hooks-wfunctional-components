import React, { useState, useEffect } from 'react';
import axios from 'axios';




const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);

    // const fetchResource = async () => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    //     setResources(response.data);
    // }

    // lol, adding the resource object in the array was the solution as to why the fetchResource was not calling the service again.
    // the second argument checks for a different value, if different, fetchResource will be called, if not different, useEffect will choose not 
    // to call fetchResource again.
    // RULE: you cannot invoke the above directly in the useEffect, however you can wrap the code in parenthesis, and invoke the function as shown below
    useEffect(
        () => {
            (
                async () => {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

                    setResources(response.data);
                }
            )(resource);
            // fetchResource(resource);
        },
        [resource]
    );


    return (
        <ul>
            {resources.map(record =>
                <li key={record.id}>{record.title}</li>
            )}
        </ul>
    );
}

export default ResourceList;