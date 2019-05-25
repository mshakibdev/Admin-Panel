import React from 'react';
import Add from './Add';

import List from './List';
import { BrowserRouter,Route,Link } from 'react-router-dom';
import Navigation from './Navigation';

const Index = () => {
  return (
      <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path='/category' component={List}/>
        <Route exact path='/category/add' component={Add}/>
      </div>
      </BrowserRouter>
    
  )
}

export default Index
