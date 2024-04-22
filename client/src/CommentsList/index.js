import React, { useState, useEffect } from "react";
import axios from "axios";


export const CommentsList = ({postId}) => {
    const [comments, setComments] = useState([]);
    const fetch = async () => {
      const result = await axios.get(`http://localhost:8081/posts/${postId}/comments`);
      setComments(result.data);
    };
    useEffect(() => {
      fetch();
    }, []);

    const renderComments = comments.map( comment => {
        return <li key={comment.id} >{comment.content}</li>
    })

    return (
        <ul>
            {renderComments}
        </ul>
    )
}