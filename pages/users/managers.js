import React from 'react';

const managers = ({users}) => {
    return (
        <div>
            <h1>manager page</h1>
            <h1>users: {users.length}</h1>
        </div>
    );
};

export default managers;