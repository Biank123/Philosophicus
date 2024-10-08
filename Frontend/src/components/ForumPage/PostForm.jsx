// formulario que permite a los usuarios escribir un mensaje, seleccionar una categoría y subir un archivo
import React, { useState } from 'react';
import './PostForm.css';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear FormData
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    if (file) {
      formData.append('file', file);
    }

    // Enviar datos al backend
    try {
      const response = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Publicación exitosa');
        setTitle('');
        setContent('');
        setCategory('General');
        setFile(null);
      } else {
        alert('Error al publicar. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar la publicación:', error);
      alert('Error al enviar la publicación. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="post-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenido"
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Lenguaje">Lenguaje</option>
          <option value="Filosofía">Filosofía</option>
        </select>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default PostForm;
