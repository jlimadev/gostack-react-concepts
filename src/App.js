import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css'

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
      console.log(response);
    });
  }, []);
  
  const addProjectHandler = () => {
    setProjects([...projects, newProject]);
    console.log(projects);
  };

  return (
    <>
      <Header title='Projects' />

      <ul>
        {projects.map((project) => {
          return <li key={project.id}> {project.title} </li>;
        })}
      </ul>

      <button type="button" onClick={addProjectHandler}>Add Project</button>
    </>
  );
}

export default App;
