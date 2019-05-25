import React, { Component } from 'react';
import axios from 'axios';


export default class List extends Component {
  
      state = {
        categories :[],
      };
      
      componentDidMount()
      {
        axios.get(`http://127.0.0.1:8000/category`).then(res =>{ this.setState({categories:res.data})});
      }
  
  render() {
    return (
      <div className="container-fluid">
        <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Name</th>
                <th scope="col">Status</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.categories.map( category =>{
                return (
                      <tr>
                        <th scope="row">1</th>
                        <td>{category.name}</td>
                        <td>{category.active}</td>
                        <td>{category.created_at}</td>
                        <td>{category.created_at}</td>
                        <td>{categories.updated_at}</td>
                      </tr>
                )
              })

              }
              
            }
          }

        
          
             
            </tbody>
      </table>
    </div>
    )
  }
}



export default List
