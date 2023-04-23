import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import PostCard from './PostCard';
import Post from './Post';
import AddPost from './AddPost';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch('https://jsonblob.com/api/1099276101968216064');
    const data = await response.json();
    setPosts(data.posts);
  };

  return (
    <div className="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <div className="post-list">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          }
        />
        <Route path="/post/:postId" element={<Post />} />
        <Route
          path="/add-post"
          element={<AddPost onAddPost={fetchPosts} />}
        />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Main;
