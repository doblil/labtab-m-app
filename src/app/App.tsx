import React from 'react';
import './App.scss';
import '../sass/base/title.scss'
import '../sass/content.scss'
import Menu from '../screens/menu/menu';

import { } from 'react-router-dom';
import { ContentRouter } from '../content-router/content-router';
import Auth from '../screens/auth/auth';

function App() {
  return (
    <div className="App">

      <ContentRouter/>
      <Menu/>

    {/* <Auth/> */}
    </div>
  );
}

export default App;
