import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Category = () => {

  const [category , SetCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
    .then(result => {
      if(result.data.Status) {
        SetCategory(result.data.Result)
      } else {
        alert(result.data.Error)
      }
    }).catch(err => console.log(err))
  }, []);

  return (
    <div className='px-5 mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Category List</h3>
      </div>
      <Link to="/dashboard/add_category" className='btn btn-success'>Add Category</Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              category.map(c => (
                <tr>
                  <td>{c.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Category