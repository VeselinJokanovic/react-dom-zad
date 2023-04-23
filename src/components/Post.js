import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://jsonblob.com/api/1099276101968216064');
        const data = await response.json();
        const fetchedPost = data.posts.find((p) => p.id === parseInt(postId));
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default Post;

