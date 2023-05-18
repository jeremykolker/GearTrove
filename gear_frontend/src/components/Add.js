import React, { useState, useEffect } from 'react'

const Add = (props) => {
  let emptyItem = { kind: '', make: '', model: '', color: '', year: ''  }
  const [item, setItem] = useState(emptyItem)

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(item)
  }
  
  return (
    <>
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
    </>
  )
}

export default Add
