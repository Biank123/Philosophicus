import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import ChangePasswordForm from './ChangePasswordForm';
import DeleteAccountForm from './DeleteAccountForm';
import { useAuth } from './AuthContext';
import EditDraftForm from '../BooksPage/EditDraftForm';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [activeSection, setActiveSection] = useState('config');
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [userData, setUserData] = useState({});
    const [drafts, setDrafts] = useState([]);
    const [posts, setPosts] = useState([]); // Para almacenar las publicaciones del usuario
    const [comments, setComments] = useState([]); // Para almacenar los comentarios del usuario
    const [essays, setEssays] = useState([]);
    const { isAuthenticated, userId } = useAuth();
    const [editingDraft, setEditingDraft] = useState(null);
    const navigate = useNavigate();
    const [receivedMessages, setReceivedMessages] = useState([]);
    const [users, setUsers] = useState([]); // Estado para almacenar usuarios
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [recipient, setRecipient] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [messages, setMessages] = useState([]);


    const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            console.log('Datos del token:', decodedToken);
        }
        if (!token) {
            console.error('No hay token de autenticación disponible');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/users/profile/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log('Datos del usuario recibidos:', data);

            const userId = data.id ? Number(data.id) : null;
            setUserData({ ...data, id: userId });

        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);

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

    const fetchPosts = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No hay token de autenticación disponible');
            return; // Detener la ejecución si no hay token
        }

        try {
            // Solicitar publicaciones
            const postsResponse = await fetch('http://localhost:3001/api/posts/user/posts', {
                method: 'GET',
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
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const fetchComments = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No hay token de autenticación disponible');
            return; // Detener la ejecución si no hay token
        }

        try {

            // Solicitar comentarios
            const commentsResponse = await fetch(`http://localhost:3001/api/posts/user/comments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!commentsResponse.ok) {
                const errorBody = await commentsResponse.text(); // Para obtener el mensaje de error del servidor
                console.error('Error en la respuesta:', errorBody);
                throw new Error(`HTTP error! status: ${commentsResponse.status}`);
            }
            const commentsData = await commentsResponse.json();
            console.log('Comentarios recibidos:', commentsData);
            setComments(commentsData); // Asegúrate de que commentsData es el formato esperado para setComments
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleDeleteAccount = async ({ reason, password }) => {
        if (!window.confirm("¿Estás seguro de que deseas eliminar su cuenta?")) {
            return; // Cancelar si el usuario no confirma
        }

        try {
            const requestBody = JSON.stringify({ reason, password });

            const response = await fetch('http://localhost:3001/api/users/profile', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: requestBody,
            });

            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(`Error: ${errorMessage.error || response.statusText}`);
            }

            const result = await response.json();
            console.log('Respuesta del servidor:', result);
            alert('Cuenta eliminada con éxito')
            navigate('/')
        } catch (error) {
            console.error('Error al eliminar la cuenta:', error);
            // Maneja el error, por ejemplo, mostrando un mensaje al usuario
        }
    };

    const fetchEssays = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('No hay token de autenticación disponible');
            return; // Detener la ejecución si no hay token
        }

        try {
            const response = await fetch(`http://localhost:3001/essays/published/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();

            // Verifica que `data` sea un arreglo
            if (Array.isArray(data)) {
                setEssays(data);
            } else {
                console.error('La respuesta no es un arreglo:', data);
            }
        } catch (error) {
            console.error('Error al obtener los ensayos:', error);
        }
    };

    // Función para eliminar un ensayo
    const handleDeleteEssay = async (essayId) => {
        if (!window.confirm("¿Estás seguro de que deseas eliminar este ensayo?")) {
            return; // Cancelar si el usuario no confirma
        }

        try {
            const response = await fetch(`http://localhost:3001/essays/delete/${essayId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el ensayo');
            }

            console.log('Ensayo eliminado con éxito');
            // Actualizar el estado de ensayos
            setEssays(essays.filter(essay => essay.id !== essayId));
        } catch (error) {
            console.error('Error al eliminar el ensayo:', error);
        }
    };

    // Función para publicar un borrador
    const handlePublishEssay = async (essayId) => {
        try {
            const response = await fetch(`http://localhost:3001/essays/publishdraft/${essayId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Error al publicar el ensayo');
            }

            // Actualizar los ensayos después de publicar
            await fetchEssays();
            fetchDrafts(); // Recargar los borradores
        } catch (error) {
            console.error('Error al publicar el ensayo:', error);
        }
    };

    // Función para eliminar un borrador
    const handleDeleteDraft = async (essayId) => {
        if (!window.confirm("¿Estás seguro de que deseas eliminar este borrador?")) {
            return; // Cancelar si el usuario no confirma
        }

        try {
            const response = await fetch(`http://localhost:3001/essays/deletedraft/${essayId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el borrador');
            }

            // Actualizar los borradores después de eliminar
            fetchDrafts();
        } catch (error) {
            console.error('Error al eliminar el borrador:', error);
        }
    };

    const handleEditDraft = (draft) => {
        setEditingDraft(draft); // Establece el borrador a editar
    };

    // MANEJO DE ENVÍO DE MENSAJERÍA

    const fetchMessages = async (targetUserId) => {
        const currentUserId = userData.id; // Suponiendo que userData tiene el ID del usuario autenticado
        console.log('ID del usuario objetivo en fetch:', targetUserId);
        
        if (!targetUserId || isNaN(targetUserId) || targetUserId === currentUserId) {
            console.error('targetUserId no es válido o es el ID del usuario actual');
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:3001/api/messages/${targetUserId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
    
            const data = await response.json();
            console.log('Mensajes recibidos:', data);
            setReceivedMessages(data || []);
            setMessages(data || []);
            console.log('Estado de receivedMessages:', receivedMessages);
        } catch (error) {
            console.error('Error al obtener mensajes:', error);
        }
    };
  

    useEffect(() => {
        console.log('Mensajes recibidos actualizados:', receivedMessages);
    }, [receivedMessages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/messages', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ receiver_id: recipient, content: messageContent })
            });
            if (!response.ok) {
                throw new Error('Error al enviar el mensaje');
            }
            alert('Mensaje enviado');
            setRecipient('');
            setMessageContent('');
            fetchMessages(recipient); // Actualiza los mensajes enviados después de enviar uno

        } catch (error) {
            console.error('Error al enviar mensaje:', error);
        }
    };


    const handleDeleteMessage = async (messageId) => {
        try {
            const response = await fetch(`http://localhost:3001/api/messages/${messageId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el mensaje');
            }
            setMessages(messages.filter(msg => msg.id !== messageId)); 
            alert('Mensaje eliminado con éxito');
            fetchMessages(userId);
        } catch (error) {
            console.error('Error al eliminar el mensaje:', error);
        }
    };

    // Filtrar usuarios en función del input
    const handleRecipientChange = (e) => {
        const value = e.target.value;
        setRecipient(value);
        // Filtrar usuarios que coincidan con el texto ingresado
        setFilteredUsers(users.filter(user => user.username.toLowerCase().includes(value.toLowerCase())));
    };

    // Manejar la selección de un usuario
    const handleUserSelect = (selectedUser) => {
        setRecipient(selectedUser.id); // Establecer el ID del usuario
        setRecipientName(selectedUser.username); // Establecer el nombre de usuario para mostrar
        setFilteredUsers([]); // Limpiar la lista filtrada
        fetchMessages(selectedUser.id);
    };

    // Efecto para obtener usuarios
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };

        fetchUsers();

    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            setUserData({
                id: tokenData.id,
                username: tokenData.username,
                email: tokenData.email,
            });
        }
    }, []);


    const renderSection = () => {
        switch (activeSection) {
            case 'config':
                return (
                    <div className="section-box">
                        <h3>Configuración</h3>
                        <p>Aquí está la información de configuración del usuario. Seleccione una acción a realizar:</p>
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
                        <h3>Borradores de ensayos</h3>
                        {drafts.length > 0 ? (
                            <ul>
                                {drafts.map(draft => (
                                    <li key={draft.id}>
                                        <div>{draft.title}</div>
                                        <button onClick={() => handlePublishEssay(draft.id)}>Publicar</button>
                                        <button onClick={() => handleEditDraft(draft)}>Editar</button>
                                        <button onClick={() => handleDeleteDraft(draft.id)}>Eliminar</button>
                                    </li>
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
                        <h3>Publicaciones del foro</h3>
                        {posts.length > 0 ? (
                            <ul>
                                {posts.map(post => (
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay publicaciones.</p>
                        )}
                        <div className="section-box">
                            <h3>Publicaciones de ensayos</h3>
                            <ul>
                                {essays.length > 0 ? (
                                    essays.map(essay => (
                                        <div>
                                            <li key={essay.id}>{essay.title}</li>
                                            <p>{essay.content}</p>
                                            <p>{essay.created_at}</p>
                                            <button onClick={() => handleDeleteEssay(essay.id)}>Eliminar</button>
                                        </div>
                                    ))
                                ) : (
                                    <li>No has publicado ensayos.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                );
            case 'comments':
                return (
                    <div className="section-box">
                        <h3>Comentarios del Foro</h3>
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
            case 'messages':
                return (
                    <div className="section-box">
                        <h3>Mensajes</h3>

                        {/* Mostrar mensajes recibidos y enviados */}
                        {receivedMessages.length > 0 ? (
                            <div>
                                <ul>
                                    {receivedMessages.map(message => {
                                        const sender = users.find(user => user.id === message.sender_id);
                                        const receiver = users.find(user => user.id === message.receiver_id);

                                        return (
                                            <li key={message.id}>
                                                <p><strong>De:</strong> {sender ? sender.username : message.sender_id}</p>
                                                <p><strong>Para:</strong> {receiver ? receiver.username : message.receiver_id}</p>
                                                <p>{message.content}</p>
                                                <button onClick={() => handleDeleteMessage(message.id)}>Eliminar</button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            <p>No tienes mensajes.</p>
                        )}

                        {/* Formulario para enviar un nuevo mensaje */}
                        <form onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                value={recipientName}
                                onChange={handleRecipientChange}
                                placeholder="Usuario destinatario"
                                required
                            />
                            {/* Mostrar sugerencias de usuarios */}
                            {filteredUsers.length > 0 && (
                                <ul className="suggestions">
                                    {filteredUsers.map(user => (
                                        <li key={user.id} onClick={() => handleUserSelect(user)}>
                                            {user.username}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <textarea
                                value={messageContent}
                                onChange={e => setMessageContent(e.target.value)}
                                placeholder="Escribe tu mensaje aquí"
                                required
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                );
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            const fetchUserDataAndEssays = async () => {
                try {
                    await fetchUserData();
                } catch (error) {
                    console.error('Error al obtener los datos del usuario:', error);
                }
            };
            fetchUserDataAndEssays();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (userData) {
            console.log("userData:", userData);

            const fetchData = async () => {
                try {
                    await Promise.all([fetchDrafts(), fetchComments(), fetchPosts(), fetchEssays(), fetchMessages(userData.id)]);
                } catch (error) {
                    console.error('Error al obtener los demás datos:', error);
                }
            };

            fetchData();
        }
    }, [userData]);

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
                        <a href="#messages" onClick={() => setActiveSection('messages')}>Mensajes</a>
                    </li>
                </ul>
            </div>
            <div className="content">
                {renderSection()}
                {editingDraft && (
                    <EditDraftForm
                        draft={editingDraft}
                        onClose={() => setEditingDraft(null)} // Función para cerrar el formulario
                    />
                )}
            </div>
        </div>
    );
};

export default ProfilePage;