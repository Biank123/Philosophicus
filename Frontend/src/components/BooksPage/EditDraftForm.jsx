import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; // Estilo predeterminado de Quill
import './EditDraftForm.css';

const EditDraftForm = ({ draft, onClose }) => {
    const [title, setTitle] = useState(draft.title);
    const [content, setContent] = useState(draft.content);
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const updatedDraft = { ...draft, title, content };

        try {
            const response = await fetch(`${apiUrl}/essays/editdraft/${updatedDraft.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(updatedDraft),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el borrador');
            }
            
            onClose(); // Cierra el formulario después de actualizar
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='edit-draft-form'>
            <h2>Editar Borrador</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Contenido:</label>
                    <ReactQuill 
                        value={content} 
                        onChange={setContent} 
                    />
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default EditDraftForm;

