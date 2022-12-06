function Post({ data }) {
    console.log("post", data);
    return (
        <div>
            <h1>Single post</h1>
            <h3>Post Title: {data.title} </h3>
            <p>Post Body: {data.body} </p>
            <hr />
        </div>
    );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: { id: `${post.id}` },
        }
    })
    return {
        // paths: [
        //     { params: { id: '1' } },
        //     { params: { id: '2' } },
        //     { params: { id: '3' } }
        // ],

        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(ctx) {
    const { params } = ctx

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json();

    return {
        props: {
            data: data
        }
    }
}

export default Post;