function SingleUser({ user }) {
    return (
        <div>
            <h2>Single User </h2>
            <h3> Name: {user.name} </h3>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const { params } = ctx;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()

    return {
        props: {
            user: data
        }
    }
}

export default SingleUser;