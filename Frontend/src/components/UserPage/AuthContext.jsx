import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Recuperar el estado de autenticación desde localStorage
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('userId');
        if (token && id) {
            setIsAuthenticated(true);
            setUserId(Number(id));
        }
    }, []);

    const login = (token) => {
        setIsAuthenticated(true);
        localStorage.setItem('token', token); // Guarda el token en localStorage
        localStorage.setItem('userId', userId);
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userId }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
