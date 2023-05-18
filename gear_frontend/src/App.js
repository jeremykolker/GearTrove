import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'



const App = () => {
  let [item, setItem] = useState([])

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/item/' + event.target.value)
      .then((response) => {
        getItem()
      })
  }
  
  const handleCreate = (addItem) => {
    axios
      .post('http://localhost:8000/api/item', addItem)
      .then((response) => {
        console.log(response)
        getItem()
      })
  }

  const getItem = () => {
  axios
    .get('http://localhost:8000/api/item')
    .then(
      (response) => setItem(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
 }
 
 const handleUpdate = (editItem) => {
  console.log(editItem)
  axios
    .put('http://localhost:8000/api/item/' + editItem.id, editItem)
    .then((response) => {
      getItem()
    })
}


 useEffect(() => {
  getItem()
 }, []) 


 return (
  <>
    <h1>Gear Trove</h1>
    <div className="add">
      <h2>Add Gear</h2>
      <Add handleCreate={handleCreate} />
    </div>
    <div className="items">
      {item.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-header">
              <h5>Kind: {item.kind}</h5>
              <h5>Make: {item.make}</h5>
              <h5>Model: {item.model}</h5>
            </div>
            <div className="card-body">
              <h5>Color: {item.color}</h5>
              <h5>Year: {item.year}</h5>
              <Edit handleUpdate={handleUpdate} item={item} />
              <button onClick={handleDelete} value={item.id}>
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </>
);

}

export default App