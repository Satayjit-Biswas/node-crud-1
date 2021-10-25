import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);
    // delete user
    const handleDeleteUser = id =>{
        const suredelete = window.confirm("Are sure Delete this id");
        if(suredelete){
            fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount >0){
                    alert('Delete')
                    const lastUser = users.filter(user=> user._id !== id);
                    setUsers(lastUser)
                }
            })
        }
    }
    return (
        <div>
            <h2>This is Users</h2>
            <h3>Total User: {users.length}</h3>
            {
                users.map((outputUser)=><div key={outputUser._id}>Name:{outputUser.name} :: Email:{outputUser.email}  ...
                <NavLink to={`/users/update/${outputUser._id}`}><button>Update</button></NavLink>
                <button onClick={()=>handleDeleteUser(outputUser._id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default Users;