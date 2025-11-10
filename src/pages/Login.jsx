import React, { useState, useContext } from 'react';
import { loginUser } from '../api';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser({ email, password });
    login(res.data.token);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 flex flex-col gap-4">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded p-2"/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded p-2"/>
      <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
    </form>
  );
}

export default Login;
