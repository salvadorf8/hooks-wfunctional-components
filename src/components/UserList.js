import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const { resources, error } = useResources('users');

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ul>
            {resources.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;
