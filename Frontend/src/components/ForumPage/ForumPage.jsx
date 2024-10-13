import React, { useEffect, useState } from 'react';
import PostForm from './PostForm'; // Importa el formulario para crear publicaciones
import PostList from './Publications'; // Importa la lista de publicaciones
import './ForumPage.css'; 

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Obtener publicaciones del servidor
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Error al obtener publicaciones');
        }
      } catch (error) {
        console.error('Error al obtener publicaciones:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${id}/comments`);
      if (response.ok) {
        const data = await response.json();
        setSelectedPost(data);
      } else {
        console.error('Error al obtener comentarios');
      }
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  };

  return (
    <div className="forum-page">
      <PostForm />
      <PostList posts={posts} onPostClick={handlePostClick} />
      {selectedPost && (
        <div className="comments-section">
          <h3>Comentarios</h3>
          <ul>
            {selectedPost.comments.map(comment => (
              <li key={comment.id}>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ForumPage;