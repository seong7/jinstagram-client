import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from './pages';

function App() {
  return (
    <div className='App'>
      <Route component={LoginPage} path="/login" exact/>
    </div>
  );
}

export default App;
