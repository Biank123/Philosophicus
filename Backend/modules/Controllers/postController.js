const postModel = require('../Models/postModel');
const path = require('path');
const fs = require('fs');

// Crear una nueva publicación
// const createPostController = async (req, res) => {
//   const { title, content, category } = req.body;

//   // Inicializa file como null
//   let file = null;

//   // Verifica si se ha subido un archivo
//   if (req.file) {
//     // Obtener la extensión del archivo original
//     const ext = path.extname(req.file.originalname); 
//     // Generar el nombre del archivo con timestamp para evitar conflictos
//     file = `${Date.now()}${ext}`; 
//   } else {
//     // Si no se ha subido ningún archivo, retornar error
//     return res.status(400).json({ error: 'No se ha subido ningún archivo.' });
//   }

//   try {
//     // Guarda la publicación en la base de datos
//     const newPost = await postModel.createPost(title, content, category, file);
//     res.status(201).json(newPost);
//   } catch (err) {
//     console.error('Error al crear la publicación:', err);
//     res.status(500).json({ error: 'Error al crear la publicación' });
//   }
// };

const createPostController = async (req, res) => {
  const { title, content, category } = req.body;

  // Inicializa file como null
  let file = null;

  // Verifica si se ha subido un archivo
  if (req.file) {
      // Obtener la extensión del archivo original
      const ext = path.extname(req.file.originalname); 
      // Generar el nombre del archivo con timestamp para evitar conflictos
      file = `${Date.now()}${ext}`; 

      // Definir las rutas de archivo
      const tempPath = req.file.path; // Ruta temporal donde Multer guardó el archivo
      const newPath = path.join(__dirname, '../uploads', file); // Nueva ruta con nombre correcto

      // Verifica si la carpeta de destino existe, si no la crea
      fs.mkdir(path.dirname(newPath), { recursive: true }, (err) => {
          if (err) {
              console.error('Error al crear la carpeta de destino:', err);
              return res.status(500).json({ error: 'Error al crear la carpeta de destino.' });
          }

          // Mover el archivo a la carpeta 'uploads' con el nuevo nombre
          fs.rename(tempPath, newPath, (err) => {
              if (err) {
                  console.error('Error al mover el archivo:', err);
                  return res.status(500).json({ error: 'Error al mover el archivo.' });
              }

              // Ahora que el archivo se movió correctamente, guardar en la base de datos
              savePostToDatabase();
          });
      });
  } else {
      // Si no se ha subido ningún archivo, retornar error
      return res.status(400).json({ error: 'No se ha subido ningún archivo.' });
  }

  // Función para guardar el post en la base de datos
  const savePostToDatabase = async () => {
      try {
          // Guarda la publicación en la base de datos
          const newPost = await postModel.createPost(title, content, category, file);
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
  
    try {
      const comments = await postModel.getCommentsByPostId(id); 
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

// Agregar un nuevo comentario a una publicación
const addCommentController = async (req, res) => {
  const { id } = req.params; // ID de la publicación
  const { content } = req.body; // Contenido del comentario

  try {
      const newComment = await postModel.addComment(id, content); 

      res.status(201).json(newComment); // Responde con el nuevo comentario creado
  } catch (err) {
      console.error('Error al agregar comentario:', err);
      res.status(500).json({ error: 'Error al agregar comentario' });
  }
};

module.exports = {
    createPostController,
    getAllPostsController,
    getPostByIdController,
    getCommentsByPostIdController,
    deleteCommentController,
    deletePostController,
    addCommentController
};