function PostList({ data }) {
    console.log("Post data", data);
    return (
        <div>
            <h2>Post list page </h2>
            {
                data.map(post => {
                    return (
                        <div key={post.id}>
                            <h3>Post Title: {post.title} </h3>
                            <h3>Post Body: {post.body} </h3>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getStaticProps(ctx) {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();

    return {
        props: {
            data: data
        }
    }
}

export default PostList;