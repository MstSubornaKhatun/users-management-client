import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users); // (3) [{…}, {…}, {…}]

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email}
        console.log(user)
    }

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>



            {
                users.map(user =><p key={user.id}>{user.name}: {user.email}</p>)
            }
            
        </div>
    );
};

export default Users;