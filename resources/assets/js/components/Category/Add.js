import React from 'react'

const Add = () => {
  return (
    <div className="container-fluid">
        <form>
          <div className="form-group mx-sm-3 mb-2">
            <label for="category_name">Email Category</label>
            <input type="text" className="form-control" id="category_name" placeholder="Enter Category" />
            <br />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          
      </form>
    </div>
  )
}

export default Add
