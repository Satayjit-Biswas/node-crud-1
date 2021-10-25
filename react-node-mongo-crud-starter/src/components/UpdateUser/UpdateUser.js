import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const[user,setUser] = useState({})
    const {id}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    },[])
    return (
        <div>
            <h2>This is Update User</h2>
            <h3>Updater This owner {user.name}</h3>
        </div>
    );
};

export default UpdateUser;