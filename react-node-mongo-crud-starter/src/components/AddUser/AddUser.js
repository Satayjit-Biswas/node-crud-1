import React, { useRef } from 'react';


const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const userHandler = (e) => {       

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name:name,email:email};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Success')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={userHandler}>
                <input type="text" ref={nameRef} placeholder="Name"/>
                <input type="email" required ref={emailRef} placeholder="Email" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddUser;