import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mostrar el mensaje de confirmación con los datos ingresados
        setConfirmationMessage(`Formulario enviado con exito. Nombre: ${formData.name}, Correo: ${formData.email}`);
    };

    return (
        <div>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
                <button type="submit">Enviar</button>
            </form>

            {}
            {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
        </div>
    );
};

export default Contacto;