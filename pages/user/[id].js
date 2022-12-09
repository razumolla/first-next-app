import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SingleUser() {
    const [user, setUser] = useState(null);
    const { id } = useRouter().query;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])

    // console.log(user);
    return (
        <div>
            <h2>Single User </h2>
            <h3> Name: {user?.name} </h3>
            <h3> Name: {user?.website} </h3>
            <hr />
        </div>
    );
}

// export async function getServerSideProps(ctx) {
//     const { params } = ctx;

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data = await res.json()

//     return {
//         props: {
//             user: data
//         }
//     }
// }

export default SingleUser;