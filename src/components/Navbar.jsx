import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { token, login } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <h1 className="font-bold text-xl">DevMentor AI</h1>
      {token && (
        <button onClick={() => login('')} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
