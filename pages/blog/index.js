import Link from "next/link";

function Blog({ blogId }) {
    return (
        <div>
            <Link href="/blog/1">
                Blog 1
            </Link>

            <Link href="/blog/2">
                Blog 2
            </Link>

            <Link href="/blog/3">
                Blog 3
            </Link>

            <Link href="/blog/4" replace>
                Blog 4
            </Link>

            <Link href={`/blog/${blogId}`} replace>
                <h2> Blog 5 </h2>
            </Link>
        </div>
    );
};

export default Blog;