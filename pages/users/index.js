import React from 'react';

const index = ({users}) => {
    return (
        <div>
            <h1>{users.length}</h1>
        </div>
    );
};

export default index;

export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const users=await res.json()
     return{
         props: {users}
     }
}