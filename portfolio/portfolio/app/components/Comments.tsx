import React from 'react'
import styles from './Comments.module.css'
interface Comment {
    id: number
    name: string
    email: string
    body: string
}

const Comments = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await res.json()
  return (
    <div><h3>Comments</h3>
    <ul>
        {comments.map((comment: Comment) => <li className={styles.card} key={comment.id}>{comment.body}</li>)}
    </ul>
    </div>
  )
}

export default Comments