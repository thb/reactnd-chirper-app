import React from 'react'
import { useSelector } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import { useParams } from 'react-router-dom'

const TweetPage = (props) => {
 
  const { id } = useParams()
  const replies = useSelector(({ tweets }) => (
    !tweets[id]
      ? []
      : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
  ))
  
  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length !== 0 && <h3 className='center'>Replies</h3>}
      <ul>
        {replies.map((replyId) => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TweetPage
