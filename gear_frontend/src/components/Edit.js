
import React, { useState } from 'react'

const Edit = (props) => {
    const [item, setItem] = useState({...props.item})

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(item)
  }

  return (
    <>
      <details>
        <summary>Edit Gear</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="kind">Kind: </label>
          <input
            type="text"
            name="kind"
            value={item.kind}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="make">Make: </label>
          <input
            type="text"
            name="make"
            value={item.make}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="model">Model: </label>
          <input
            type="text"
            name="model"
            value={item.model}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            name="color"
            value={item.color}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="year">Year: </label>
          <input
            type="number"
            name="year"
            value={item.year}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
