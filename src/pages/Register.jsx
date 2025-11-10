import React, { useState, useContext } from 'react';
import { registerUser } from '../api';
import { AuthContext } from '../context/AuthContext';

function Register() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser({ email, password });
    login(res.data.token);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 flex flex-col gap-4">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded p-2"/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded p-2"/>
      <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600">Register</button>
    </form>
  );
}

export default Register;
