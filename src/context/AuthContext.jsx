import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [currentProjectId, setCurrentProjectId] = useState(localStorage.getItem('projectId') || '');

  useEffect(() => localStorage.setItem('token', token), [token]);
  useEffect(() => localStorage.setItem('projectId', currentProjectId), [currentProjectId]);

  const login = (newToken) => setToken(newToken);
  const selectProject = (projectId) => setCurrentProjectId(projectId);

  return (
    <AuthContext.Provider value={{ token, login, currentProjectId, selectProject }}>
      {children}
    </AuthContext.Provider>
  );
};
