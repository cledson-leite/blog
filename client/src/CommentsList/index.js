import React from "react";


export const CommentsList = ({comments}) => {
    
    const renderComments = comments.map( comment => {
        return <li key={comment.id} >{comment.content}</li>
    })

    return (
        <ul>
            {renderComments}
        </ul>
    )
}