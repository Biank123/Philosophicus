import React, { useEffect, useState} from 'react';
import './Publications.css'; 

const PostList = ({ posts }) => {
  const [comments, setComments] = useState({}); // Almacenar comentarios por ID de publicación
  const [newComment, setNewComment] = useState(''); // Comentario nuevo a agregar
  const [selectedPostId, setSelectedPostId] = useState(null); // ID de la publicación seleccionada
  
  // Función para obtener comentarios de la publicación al montarse
  useEffect(() => {
    const fetchComments = async () => {
      if (selectedPostId) {
        try {
          const response = await fetch(`http://localhost:3001/api/posts/${selectedPostId}/comments`);
          const data = await response.json();
          setComments((prev) => ({ ...prev, [selectedPostId]: data.comments }));
        } catch (error) {
          console.error('Error al obtener comentarios:', error);
        }
      }
    };

    fetchComments();
  }, [selectedPostId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPostId || !newComment) return; // Asegúrate de tener un ID y un comentario

    try {
      const response = await fetch(`http://localhost:3001/api/posts/${selectedPostId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      });

      if (response.ok) {
        const newCommentData = await response.json();
        setComments((prev) => ({
          ...prev,
          [selectedPostId]: [...(prev[selectedPostId] || []), newCommentData], // Añadir nuevo comentario
        }));
        setNewComment(''); // Limpiar el campo de entrada
      } else {
        console.error('Error al agregar comentario');
      }
    } catch (error) {
      console.error('Error al enviar comentario:', error);
    }
  };

  const handlePostClick = (id) => {
    if (selectedPostId === id) {
      setSelectedPostId(null); // Si ya está seleccionado, deseleccionarlo
    } else {
      setSelectedPostId(id); // Seleccionar la publicación
    }
  };

  const handleDeleteComment = async (id, commentId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${id}/comments/${commentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setComments((prev) => ({
          ...prev,
          [id]: prev[id].filter(comment => comment.id !== commentId), // Eliminar el comentario del estado
        }));
      } else {
        console.error('Error al eliminar comentario');
      }
    } catch (error) {
      console.error('Error al eliminar comentario:', error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Aquí puedes manejar la lógica de actualización de publicaciones en tu estado padre
        alert('Publicación eliminada.');
        // Opcional: Puedes agregar un callback o estado para eliminar la publicación del padre
      } else {
        console.error('Error al eliminar publicación');
      }
    } catch (error) {
      console.error('Error al eliminar publicación:', error);
    }
  };

  return (
    <div className="publication-list-container">
      <h2>Publicaciones del Foro</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.file && <a href={`http://localhost:3001/api/posts/download/${post.file}`} download target='_blank'>Descargar archivo</a>}
            {console.log(post.file)}
            <button onClick={() => handleDeletePost(post.id)}>Eliminar Publicación</button>
            <button onClick={() => handlePostClick(post.id)}>Ver Comentarios</button>
            {selectedPostId === post.id && (
              <div>
                <h4>Comentarios:</h4>
                <ul>
                  {comments[post.id]?.map(comment => (
                    <li key={comment.id}>
                      {comment.content}
                      <button onClick={() => handleDeleteComment(post.id, comment.id)}>Eliminar</button>
                    </li>
                  )) || <li>No hay comentarios.</li>}
                </ul>
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Escribe tu comentario..."
                    required
                  />
                  <button type="submit">Comentar</button>
                </form>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;