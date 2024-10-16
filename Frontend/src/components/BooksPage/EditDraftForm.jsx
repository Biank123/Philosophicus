import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; // Estilo predeterminado de Quill
import './EditDraftForm.css';

const EditDraftForm = ({ draft, onClose }) => {
    const [title, setTitle] = useState(draft.title);
    const [content, setContent] = useState(draft.content);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const updatedDraft = { ...draft, title, content };

        try {
            const response = await fetch(`http://localhost:3001/essays/editdraft/${updatedDraft.id}`, {
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

            // Aquí puedes agregar lógica adicional si es necesario, como actualizar el estado en el componente padre
            
            onClose(); // Cierra el formulario después de actualizar
        } catch (error) {
            console.error('Error:', error);
            // Maneja el error, por ejemplo, mostrando un mensaje al usuario
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

