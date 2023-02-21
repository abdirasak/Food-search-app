import React from 'react'

function RestaurantShow({ data }) {
  return (
    <div className='card'>
      <div className="card-header">
        <img src={`https://picsum.photos/seed/${data.id}/150/90`} alt="books" />
      </div>
      <div className="card-body">
        <h3>{data.name}</h3>
        <p>Rating: {data.rating}</p>
        <p>Rating: {data.rating}</p>
      </div>
    </div>
  )
}

export default RestaurantShow