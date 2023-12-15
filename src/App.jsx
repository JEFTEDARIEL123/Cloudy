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
    autoProceed: true,
    restrictions: {
      maxFileSize: 1000000, 
      

    },
  });

  uppy.use(XHRUpload, {
    endpoint: 'URL',
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      <h1>Cloudy</h1>
      <Dashboard uppy={uppy} />
    </div>

    </>
  )
}

export default App
