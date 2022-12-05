import { useRouter } from 'next/router';
import React from 'react';

const commentDetails = () => {

    const router = useRouter();
    const { blogId, commentId } = router.query;

    console.log("blogId:", blogId);
    console.log("CommentId:", commentId);
    return (
        <div>
            <h1> {commentId} comment blog  for blog id: {blogId} </h1>
        </div>
    );
};

export default commentDetails;