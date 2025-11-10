import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Sidebar({ projects }) {
  const { currentProjectId, selectProject } = useContext(AuthContext);

  return (
    <div className="w-64 bg-gray-100 p-4 h-full">
      <h2 className="font-bold mb-4">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li
            key={project._id}
            onClick={() => selectProject(project._id)}
            className={`p-2 mb-2 rounded cursor-pointer ${
              currentProjectId === project._id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
