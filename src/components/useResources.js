import { useState, useEffect } from 'react';
import axios from 'axios';

// putting all the logic in a function is an improvement because there is no tie to any component
const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    const [error, setError] = useState(null);

    // lol, adding the resource object in the array was the solution as to why the fetchResource was not calling the service again.
    // the second argument checks for a different value, if different, fetchResource will be called, if not different, useEffect will choose not
    // to call fetchResource again.
    // RULE: you cannot invoke the above directly in the useEffect, however you can wrap the code in parenthesis, and invoke the function as shown below
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
                setResources(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();

        return () => {
            // clean-up function if needed
        };
    }, [resource]);

    return { resources, error };
};

export default useResources;
