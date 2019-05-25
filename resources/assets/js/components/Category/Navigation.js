import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
        <div className="container-fluid">
            <hr />
            <NavLink to="/category" className="btn btn-primary">List</NavLink> &nbsp;
            <NavLink to="/category/add" className="btn btn-success">Add</NavLink>
            <hr />
        </div>
  )
}

export default Navigation;
