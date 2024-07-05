import React ,{useState}from 'react'

function Help() {
  const[rating,setRating]=useState(0);
  const increase=()=>{
   setRating(rating+1 )
   
  }
 const decrease=()=>
 {
 let rate= setRating(rating-1 ) ;

 }

  return (
    <div>
      <h1> help by future truth</h1>
      <h3>Rating : {rating}</h3>
      <button className='rating' onClick={increase}>+</button>
      <button className='rating'onClick={decrease}>-</button>
    </div>
  )
}

export default Help
