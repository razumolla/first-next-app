import Link from 'next/link';


function User({ users }) {
    console.log(users);
    return (
        <div>
            <h2> All Users </h2>
            <hr />
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <Link href={`user/${user.id}`} passHref >
                                <h3>User: {user.name} </h3>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps(ctx) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: {
            users: data
        }
    }
}

export default User;