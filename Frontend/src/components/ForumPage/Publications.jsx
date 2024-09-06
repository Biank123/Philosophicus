import React from 'react';
import './Publications.css'; // Asegúrate de que el nombre del archivo sea correcto

const PostList = ({ posts, onPostClick }) => {
  return (
    <div className="publication-list-container">
      <h2>Publicaciones</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => onPostClick(post.id)}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.file && <a href={`/uploads/${post.file}`} download>Descargar archivo</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;