import React, { useEffect, useState } from 'react';
import './Publications.css';
import { useAuth } from '../UserPage/AuthContext';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Obtener todas las publicaciones
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setPosts(data);

        // Cargar comentarios para cada publicación
        const commentsData = {};
        for (const post of data) {
          const commentsResponse = await fetch(`http://localhost:3001/api/posts/${post.id}/comments`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
          const commentsArray = await commentsResponse.json();
          commentsData[post.id] = commentsArray; // Asigna los comentarios al post correspondiente
        }
        setComments(commentsData); // Actualiza el estado de comentarios
      } catch (error) {
        console.error('Error al obtener publicaciones:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPostId || !newComment) return;

    try {
      const response = await fetch(`http://localhost:3001/api/posts/${selectedPostId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ content: newComment }),
      });

      if (response.ok) {
        const newCommentData = await response.json();
        setComments((prev) => ({
          ...prev,
          [selectedPostId]: [
            ...(Array.isArray(prev[selectedPostId]) ? prev[selectedPostId] : []),
            newCommentData,
          ],
        }));
        setNewComment('');
      } else {
        console.error('Error al agregar comentario');
      }
    } catch (error) {
      console.error('Error al enviar comentario:', error);
    }
  };

  const handlePostClick = (id) => {
    if (selectedPostId === id) {
      setSelectedPostId(null);
    } else {
      setSelectedPostId(id);
    }
  };

  const handleDeleteComment = async (postId, commentId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${postId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        setComments((prev) => ({
          ...prev,
          [postId]: prev[postId].filter((comment) => comment.id !== commentId),
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
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        alert('Publicación eliminada.');
        setPosts(posts.filter(post => post.id !== id));
        // Eliminar comentarios del post eliminado
        setComments((prev) => {
          const newComments = { ...prev };
          delete newComments[id];
          return newComments;
        });
      } else {
        console.error('Error al eliminar publicación');
      }
    } catch (error) {
      console.error('Error al eliminar publicación:', error);
    }
  };

  useEffect(() => {
    if (selectedPostId) {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/posts/${selectedPostId}/comments`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener comentarios');
                }

                const data = await response.json();
                setComments(prevComments => ({
                    ...prevComments,
                    [selectedPostId]: data.comments,
                }));
            } catch (error) {
                console.error('Error al obtener comentarios:', error);
            }
        };

        fetchComments();
    }
}, [selectedPostId]);

  return (
    <div className="publication-list-container">
      <h2>Publicaciones del Foro</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p><strong>{post.username}</strong><br/>
            <em>{new Date(post.created_at).toLocaleString()}</em></p>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            {/* Visualización de archivos */}
            {post.file && (
              <div>
                {/\.(jpeg|jpg|png)$/i.test(post.file) && (
                  <img
                    src={`http://localhost:3001/uploads/${post.file}`}
                    alt={post.title}
                    style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                  />
                )}
                {/\.(pdf)$/i.test(post.file) && (
                  <div>
                    <iframe
                      src={`http://localhost:3001/uploads/${post.file}`}
                      width="100%"
                      height="300px"
                      title="PDF Viewer"
                      style={{ marginBottom: '10px' }}
                    />
                    <a href={`http://localhost:3001/api/posts/download/${post.file}`} download target='_blank'>Descargar archivo</a>
                  </div>
                )}
                {/\.(doc|docx)$/i.test(post.file) && (
                  <div>
                    <p>Este archivo es un documento de Word y no se puede visualizar directamente.</p>
                    <a href={`http://localhost:3001/api/posts/download/${post.file}`} download>Descargar Documento de Word</a>
                  </div>
                )}
              </div>
            )}

            <button onClick={() => handleDeletePost(post.id)}>Eliminar Publicación</button>
            <button onClick={() => handlePostClick(post.id)}>Ver Comentarios</button>

            {selectedPostId === post.id && (
              <div>
                <h4>Comentarios:</h4>
                <ul>
                  {(Array.isArray(comments[post.id]) ? comments[post.id] : []).map((comment) => (
                    <li key={comment.id}>
                      <p><strong>{comment.username}</strong> <br/>
                      <em>{new Date(comment.created_at).toLocaleString()}</em></p>
                      <p>{comment.content}</p>
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