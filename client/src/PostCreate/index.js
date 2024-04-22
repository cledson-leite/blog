import React, {useState} from 'react'
import axios from 'axios'

export const PostCreate = () => {
    const [title, setTitle] = useState('')
    const onSubmit = async event => {
        event.preventDefault();
        await axios.post('http://localhost:8080/posts', {title})
        setTitle('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={title}
                        onChange={({target}) => setTitle(target.value)}
                    />
                </div>
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}