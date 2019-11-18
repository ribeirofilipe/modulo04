import React from 'react';
import PropTypes from 'prop-types';

function Post({ data }) {
  return (
        <div className="post">
          <img className="author-avatar" src={data.author.avatar}></img>
          <p className="author-name">{data.author.name}</p>
          <p className="date" >{data.date}</p>
          <p className="author-content">{data.content}</p>
          <p className="rectangle"></p>
          {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </div> 
      );
}

function Comment({ data })  {
  return (
    <div className="comment-box">
    <img className="user-avatar" src={data.author.avatar}></img>
      <div className="comment">
        <p className="user-comment"><strong>{data.author.name}: </strong> {data.content}</p>
      </div>
    </div>
  );
}

Post.protoTypes = {
  data: PropTypes.object
}

export default Post;
