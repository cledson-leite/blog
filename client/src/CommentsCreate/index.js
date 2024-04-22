import React, {useState} from 'react'
import axios from 'axios'

export const CommentsCreate = ({postId}) => {
    const [content, setContent] = useState('')
    const onSubmit = async event => {
        event.preventDefault()
        await axios.post(
            `http://localhost:8081/posts/${postId}/comments`,
        { content}
    )
        setContent('')

    }
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">New Comment</label>
            <input
              type="text"
              className="form-control"
              value={content}
              onChange={({ target }) => setContent(target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
}