import React from 'react'

export default function Card({ shoe, onClick }) {
    
    return (
    <div className="col-md-4" onClick={onClick}>
        <img src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="80%"/>
        <h4>{shoe.title}</h4>
        <p>{shoe.price}</p>
    </div>
  )
}