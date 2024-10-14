import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import ChangePasswordForm from './ChangePasswordForm';
import DeleteAccountForm from './DeleteAccountForm';

const ProfilePage = () => {
    const [activeSection, setActiveSection] = useState('config');
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [userData, setUserData] = useState(null);
    const [drafts, setDrafts] = useState([]);
    const [posts, setPosts] = useState([]); // Para almacenar las publicaciones del usuario
    const [comments, setComments] = useState([]); // Para almacenar los comentarios del usuario

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/users/profile/user', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUserData(data);
                console.log('User data set:', data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchDrafts = async () => {
            try {
                const response = await fetch('http://localhost:3001/essays/drafts', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDrafts(data);
            } catch (error) {
                console.error('Error fetching drafts:', error);
            }
        };

        const fetchPostsAndComments = async () => {
            // Obtener el token de localStorage
            const token = localStorage.getItem('token');
            // Verificar si el token existe
            if (!token) {
                console.error('No hay token de autenticación disponible');
                return; // Detener la ejecución si no hay token
            }

            try {
                // Solicitar publicaciones
                const postsResponse = await fetch('http://localhost:3001/api/posts/user/posts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!postsResponse.ok) {
                    throw new Error(`HTTP error! status: ${postsResponse.status}`);
                }
                const postsData = await postsResponse.json();
                console.log('Publicaciones recibidas:', postsData);
                setPosts(postsData);

                // Solicitar comentarios
                const commentsResponse = await fetch('http://localhost:3001/api/posts/user/comments', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!commentsResponse.ok) {
                    throw new Error(`HTTP error! status: ${commentsResponse.status}`);
                }
                const commentsData = await commentsResponse.json();
                console.log('Comentarios recibidos:', commentsData);
                setComments(commentsData);
            } catch (error) {
                console.error('Error fetching posts or comments:', error);
            }
        };

        fetchUserData();
        fetchDrafts();
        fetchPostsAndComments(); // Llama a la función para obtener publicaciones y comentarios
    }, []);

    const handleDeleteAccount = async ({ reason, password }) => {
        try {
            const requestBody = JSON.stringify({
                reason,
                password,
            });

            const response = await fetch('http://localhost:3001/profile', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: requestBody,
            });

            // Maneja la respuesta
            if (!response.ok) {
                // Lanza un error si la respuesta no es correcta
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Respuesta del servidor:', result);

        } catch (error) {
            console.error('Error al eliminar la cuenta:', error);
        }
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'config':
                return (
                    <div className="section-box">
                        <h3>Configuración</h3>
                        <p>Aquí irá la información de configuración del usuario.</p>
                        <button
                            className="change-password-btn"
                            onClick={() => setShowPasswordForm(!showPasswordForm)}
                        >
                            Cambiar Contraseña
                        </button>

                        {showPasswordForm && <ChangePasswordForm />}
                        {/* Botón para eliminar cuenta */}
                        <button
                            className="delete-account-btn"
                            onClick={() => setShowDeleteForm(!showDeleteForm)}
                            style={{ marginTop: '10px' }}
                        >
                            Eliminar Cuenta
                        </button>

                        {showDeleteForm && (
                            <DeleteAccountForm onSubmit={handleDeleteAccount} />
                        )}
                    </div>
                );
            case 'writings':
                return (
                    <div className="section-box">
                        <h3>Borradores</h3>
                        {drafts.length > 0 ? (
                            <ul>
                                {drafts.map(draft => (
                                    <li key={draft.id}>{draft.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay borradores guardados.</p>
                        )}
                    </div>
                );
            case 'posts':
                return (
                    <div className="section-box">
                        <h3>Publicaciones</h3>
                        {posts.length > 0 ? (
                            <ul>
                                {posts.map(post => (
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay publicaciones.</p>
                        )}
                    </div>
                );
            case 'comments':
                return (
                    <div className="section-box">
                        <h3>Comentarios</h3>
                        {comments.length > 0 ? (
                            <ul>
                                {comments.map(comment => (
                                    <li key={comment.id}>{comment.content}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay comentarios.</p>
                        )}
                    </div>
                );
            default:
                return (
                    <div className="section-box">
                        <h3>Selecciona una sección</h3>
                        <p>Por favor, selecciona una sección del menú para ver más detalles.</p>
                    </div>
                );
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="Perfil"
                    className="profile-image"
                />
                <h2 className="username">{userData ? userData.username : 'Cargando...'}</h2>
                <h3 className="email">{userData ? userData.email : 'Cargando...'}</h3>
            </div>
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="#config" onClick={() => setActiveSection('config')}>Configuración</a>
                    </li>
                    <li>
                        <a href="#writings" onClick={() => setActiveSection('writings')}>Borradores</a>
                    </li>
                    <li>
                        <a href="#posts" onClick={() => setActiveSection('posts')}>Publicaciones</a>
                    </li>
                    <li>
                        <a href="#comments" onClick={() => setActiveSection('comments')}>Comentarios</a>
                    </li>
                    <li>
                        <a href="#scores" onClick={() => setActiveSection('scores')}>Puntajes</a>
                    </li>
                    <li>
                        <a href="#reviews" onClick={() => setActiveSection('reviews')}>Revisiones</a>
                    </li>
                </ul>
            </div>
            <div className="content">
                {renderSection()}
            </div>
        </div>
    );
};

export default ProfilePage;