import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { CommentsCreate } from '../CommentsCreate'
import { CommentsList } from '../CommentsList'


export const PostList = () => {
    const [posts, setPosts] = useState({})
    const fetch = async () => {
        const result = await axios.get('http://localhost:8082/posts')
        setPosts(result.data)
    }
    useEffect(() => {
        fetch()
    }, [])
    const renderPosts = Object.values(posts).map(post => {
        return (
          <div
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
            key={post.id}
          >
            <div className="card-body">
              <h3>{post.title}</h3>
              <CommentsList comments={post.comments} />
              <CommentsCreate postId={post.id} />
            </div>
          </div>
        );
    })
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderPosts}
        </div>
    )
}