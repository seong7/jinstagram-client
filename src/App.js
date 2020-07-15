import React from 'react';
import { Route } from 'react-router-dom';
import { Nav } from './containers';
import { LoginPage, JoinPage, PostPage } from './pages';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Route component={LoginPage} path='/login' exact />
      <Route component={JoinPage} path='/join' exact />
      <Route component={PostPage} path='/' exact />
    </div>
  );
}

export default App;
