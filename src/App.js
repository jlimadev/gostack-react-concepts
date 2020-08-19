import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  const addProjectHandler = async () => {
    const response = await api.post('projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Asdarma',
    });
    const project = response.data;
    setProjects([...projects, project ]);
  };

  return (
    <>
      <Header title='Projects' />

      <ul>
        {projects.map((project) => {
          return <li key={project.id}> {project.title} </li>;
        })}
      </ul>

      <button type='button' onClick={addProjectHandler}>
        Add Project
      </button>
    </>
  );
}

export default App;
