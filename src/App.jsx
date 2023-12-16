import React from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import './App.css';
import logo from './assets/logo.png'

function App() {
  
  const uppy = new Uppy({
    debug: true,
    autoProceed: false,
    restrictions: {
      maxFileSize: null,
      minNumberOfFiles: 1,

    }})

   uppy.use(XHRUpload, {
     endpoint: 'http://localhost:8080/upload', 
     formData: true,
      });
    
  fetch('http://localhost:8080/listFiles')
  .then(response => response.json())
  .then(data => {
   console.log('Lista de archivos:', data);
  })
  .catch(error => console.error('Error al obtener la lista de archivos:', error));


  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      <h1>Cloudy</h1>
      <Dashboard uppy={uppy} />
      <h2></h2>
    </div>

    </>
  )
}

export default App
