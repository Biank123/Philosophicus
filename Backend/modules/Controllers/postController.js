const postModel = require('../Models/postModel');
const path = require('path');
const fs = require('fs');

const createPostController = async (req, res) => {
    const { title, content, category } = req.body;

    // Inicializa file como null
    let file = null;

    // Verifica si se ha subido un archivo
    if (req.file) {
        const ext = path.extname(req.file.originalname);
        file = `${Date.now()}${ext}`;

        const tempPath = req.file.path;
        const newPath = path.join(__dirname, '../uploads', file);

        // Captura el userId antes de entrar en la función de callback
        const userId = req.user.id; // Capturando userId aquí

        // Verifica si la carpeta de destino existe
        fs.mkdir(path.dirname(newPath), { recursive: true }, (err) => {
            if (err) {
                console.error('Error al crear la carpeta de destino:', err);
                return res.status(500).json({ error: 'Error al crear la carpeta de destino.' });
            }

            fs.rename(tempPath, newPath, async (err) => {
                if (err) {
                    console.error('Error al mover el archivo:', err);
                    return res.status(500).json({ error: 'Error al mover el archivo.' });
                }

                // Ahora que el archivo se movió correctamente, guardar en la base de datos
                await savePostToDatabase(file, userId); // Pasar userId aquí
            });
        });
    } else {
        return res.status(400).json({ error: 'No se ha subido ningún archivo.' });
    }

    // Función para guardar el post en la base de datos
    const savePostToDatabase = async (file, userId) => {
        try {
            const newPost = await postModel.createPost(title, content, category, file, userId);
            res.status(201).json(newPost);
        } catch (err) {
            console.error('Error al crear la publicación:', err);
            res.status(500).json({ error: 'Error al crear la publicación' });
        }
    };
};


// Obtener todas las publicaciones
const getAllPostsController = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json(posts);
    } catch (err) {
        console.error('Error al obtener publicaciones:', err);
        res.status(500).json({ error: 'Error al obtener publicaciones' });
    }
};

// Obtener una publicación por ID
const getPostByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postModel.getPostById(id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Publicación no encontrada' });
        }
    } catch (err) {
        console.error('Error al obtener la publicación:', err);
        res.status(500).json({ error: 'Error al obtener la publicación' });
    }
};

const getCommentsByPostIdController = async (req, res) => {
    const { id } = req.params; 

    // Convertir el ID a un número entero
    const postId = parseInt(id, 10);

    if (isNaN(postId)) {
        return res.status(400).json({ error: 'ID de publicación inválido' });
    }

    try {
        const comments = await postModel.getCommentsByPostId(postId); 
        res.json({ comments });
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
        res.status(500).json({ error: 'Error al obtener comentarios' });
    }
};


const deleteCommentController = async (req, res) => {
  const { id, commentId } = req.params;
  try {
      // Eliminar el comentario usando el commentId
      const result = await postModel.deleteComment(commentId); 

      if (result) {
          res.status(204).send(); // No content, significa que se eliminó con éxito
      } else {
          res.status(404).json({ error: 'Comentario no encontrado' });
      }
  } catch (error) {
      console.error('Error al eliminar comentario:', error);
      res.status(500).json({ error: 'Error al eliminar comentario' });
  }
};

const deletePostController = async (req, res) => {
  const { id } = req.params;

  try {
      const result = await postModel.deletePost(id); 

      if (result) {
          res.status(204).send(); // No content, significa que se eliminó con éxito
      } else {
          res.status(404).json({ error: 'Publicación no encontrada' });
      }
  } catch (error) {
      console.error('Error al eliminar publicación:', error);
      res.status(500).json({ error: 'Error al eliminar publicación' });
  }
};


const addCommentController = async (req, res) => {
    const { id } = req.params; // ID de la publicación
    const { content } = req.body; // Contenido del comentario

    try {
        const userId = req.user.id; // Obtener el ID del usuario autenticado
        const newComment = await postModel.addComment(id, content, userId); // Pasar userId aquí

        res.status(201).json(newComment); // Responde con el nuevo comentario creado
    } catch (err) {
        console.error('Error al agregar comentario:', err);
        res.status(500).json({ error: 'Error al agregar comentario' });
    }
};

// Controlador para obtener publicaciones por ID de usuario
const getPostsByUserIdController = async (req, res) => {
    const userId = req.user.id; // Obtener el ID del usuario autenticado desde el middleware de autenticación
  
    try {
      const posts = await postModel.getPostsByUserId(userId); // Llama a la función del modelo para obtener publicaciones
      return res.status(200).json(posts);
    } catch (error) {
      console.error('Error al obtener las publicaciones:', error);
      return res.status(500).json({ error: 'Error al obtener las publicaciones' });
    }
  };

 
  // Controlador para obtener comentarios por ID de usuario
const getCommentsByUserIdController = async (req, res) => {
    const userId = req.user.id;

    try {
        // Validar el ID de usuario antes de consultar la base de datos
        if (!userId) {
            return res.status(400).json({ error: 'ID de usuario es requerido.' });
        }

        // Obtener los comentarios basados en userId
        const comments = await postModel.getCommentsByUserId(userId); 

        if (!comments || comments.length === 0) {
            return res.status(404).json({ error: 'No se encontraron comentarios para este usuario.' });
        }

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
        res.status(500).json({ error: 'Error al obtener comentarios.' });
    }
};

module.exports = {
    createPostController,
    getAllPostsController,
    getPostByIdController,
    getCommentsByPostIdController,
    deleteCommentController,
    deletePostController,
    addCommentController,
    getPostsByUserIdController,
    getCommentsByUserIdController
};