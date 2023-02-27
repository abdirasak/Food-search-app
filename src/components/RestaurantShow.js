import React from 'react'

function RestaurantShow({ data }) {
  return (
    <div className='card'>
      <div className="card-header">
        <img src={data.image_url} alt="Restaurant" />
      </div>
      <div className="card-body">
        <p><span>{data.name}</span></p>
        <p> <span>Location:</span> {data.location.display_address.slice(0, 2).join(", ")}</p>
        <p> {data.phone ? <span>Phone Number: {data.phone}</span> : null}</p>
        <p> <span>Rating:</span> {data.rating}</p>
      </div>
    </div>
  )
}

export default RestaurantShow