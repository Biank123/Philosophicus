import React, { useState } from 'react';
import './DeleteAccountForm.css';

const DeleteAccountForm = ({ onSubmit }) => {
    const [deleteReason, setDeleteReason] = useState('');
    const [otherReason, setOtherReason] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const reason = deleteReason === 'other' ? otherReason : deleteReason;
        onSubmit({ reason, password });
    };

    return (
        <form className="delete-account-form" onSubmit={handleSubmit}>
            <h4>¿Por qué deseas eliminar tu cuenta?</h4>

            {/* Opciones de motivo */}
            <label>
                <span>No uso la cuenta</span>
                <input
                    type="radio"
                    value="No uso la cuenta"
                    checked={deleteReason === 'No uso la cuenta'}
                    onChange={(e) => setDeleteReason(e.target.value)}
                />
            </label>

            <label>
                <span>Preocupaciones de privacidad</span>
                <input
                    type="radio"
                    value="Preocupaciones de privacidad"
                    checked={deleteReason === 'Preocupaciones de privacidad'}
                    onChange={(e) => setDeleteReason(e.target.value)}
                />
            </label>

            <label>
                <span>Otro (especifica):</span>
                <input
                    type="radio"
                    value="other"
                    checked={deleteReason === 'other'}
                    onChange={(e) => setDeleteReason(e.target.value)}
                />
            </label>

            {/* Si se selecciona la opción "Otro", aparece el campo de texto */}
            {deleteReason === 'other' && (
                <label className="textarea-label">
                    
                    <textarea
                        placeholder="Escribe el motivo aquí..."
                        value={otherReason}
                        onChange={(e) => setOtherReason(e.target.value)}
                        required
                    />
                    <input type="radio" checked readOnly />
                </label>
            )}

            {/* Campo para contraseña */}
            <label>
                <span>Confirma tu contraseña:</span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>

            {/* Botón para eliminar cuenta */}
            <button className="submit-delete-btn" type="submit">
                Eliminar Cuenta
            </button>
        </form>
    );
};

export default DeleteAccountForm;