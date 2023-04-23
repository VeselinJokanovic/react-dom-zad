import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const post = {
      id: Date.now(),
      title,
      imageUrl,
      author,
      content,
    };

    try {
      const response = await fetch('https://jsonblob.com/api/1099276101968216064');
      const data = await response.json();
      const posts = data.posts;

      posts.push(post);

      await fetch('https://jsonblob.com/api/1099276101968216064', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ posts }),
      });

 
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-post">
      <form onSubmit={handleSubmit}>
        <label>
          Post Title:
          <input
            type="text"
            maxLength="20"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <label>
          Author Name:
          <input
            type="text"
            maxLength="20"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Post Content:
          <textarea
            maxLength="250"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
