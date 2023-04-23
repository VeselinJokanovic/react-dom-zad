import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="post-card">
        <h3>{post.title}</h3>
        <img src={post.imageUrl} alt={post.title} />
        <p>{post.author}</p>
      </div>
    </Link>
  );
};

export default PostCard;
