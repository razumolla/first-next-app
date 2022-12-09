import { useState } from "react";

function Users() {
    const [users, setUsers] = useState()

    const loadAllData = () => {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }

    return (
        <div>
            <h1> All Users</h1> <hr />

            <button onClick={loadAllData}> Load User Data </button>
            {
                users?.map(user => {
                    return (
                        <div key={user.id}>
                            <h1>{user.name} </h1>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Users;