import Link from "next/link";
import { useRouter } from "next/router";

function Blog() {
    const router = useRouter();
    const blogId = router.query.blogId;

    return (
        <div>
            <h2>This is a blog page {blogId} </h2>

        </div>
    );
};

export default Blog;