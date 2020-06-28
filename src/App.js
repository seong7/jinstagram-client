import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from './pages';

function App() {
  return (
    <div className='App'>
      <Route component={LoginPage} path='/login' exact />
      <Route component={RegisterPage} path='/register' exact />
    </div>
  );
}

export default App;
