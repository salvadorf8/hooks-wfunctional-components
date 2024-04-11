import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts');

    const handleClick = (option) => {
        setResource(option);
    };

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => handleClick('posts')}>Posts</button>
                <button onClick={() => handleClick('todos')}>Todos</button>
            </div>
            <div>what I got: {resource}</div>
            <ResourceList resource={resource} />
        </div>
    );
};

export default App;
