import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter ,Route} from 'react-router-dom';
import Header from './Header';

export default class Example extends Component {
    render() {
        return (
          <BrowserRouter>
            <Navigation />
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>

          </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
