import React from 'react';

import useResources from './useResources';

const ResourceList = ({ resource }) => {
    const { resources, error } = useResources(resource);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ul>
            {resources.map((record) => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
};

export default ResourceList;
