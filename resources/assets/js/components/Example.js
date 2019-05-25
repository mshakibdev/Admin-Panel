import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
export default class Example extends Component {
    render() {
        return (
        <BrowserRouter>
            <div>
            <Header />
            <Footer />
            </div>               
      </BrowserRouter>  
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
