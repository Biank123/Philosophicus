import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ForgotPassword.css';

const ResetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        // Mensaje que incluye un enlace para restablecer la contraseña
        const resetLink = 'https://EXAMPLE-HOST/change-password'; // Cambiar esto por el enlace real
        const templateParams = {
            message: `Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para hacerlo: ${resetLink}. Si no has sido tú, ignora este mensaje.`,
            from_name: 'Bianca de Petris',
            to_email: email,
        };

        emailjs.send('service_b0jog43', 'template_dx0kohy', templateParams, 'yzraE0v6QC9K8nd5r')
            .then((response) => {
                console.log('Correo enviado con éxito!', response.status, response.text);
                setMessage('Correo enviado con éxito. Por favor, revisa tu bandeja de entrada.');
                setEmail(''); // Limpiar el campo de entrada
            }, (err) => {
                console.error('Error al enviar correo:', err);
                setError('Error al enviar el correo. Inténtalo de nuevo más tarde.');
            });
    };

    return (
        <div className="password-change-container">
            <div className='overlay6'></div>
            <h2>Restablecer Contraseña (Está en desarrollo)</h2>
            <form className="password-change-form" onSubmit={sendEmail}>
                <label className="form-group">
                    Correo electrónico:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button className="submit-button" type="submit">Restablecer contraseña</button>
            </form>
            {message && <p className="message success">{message}</p>}
            {error && <p className="message error">{error}</p>}
        </div>
    );
};

export default ResetPasswordForm;
