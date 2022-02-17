import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIcecream } from '../redux'

function HooksIcecreamContainer() {
    const numOfIcecream = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of IceCream - {numOfIcecream}</h2>
       <button onClick={()=> dispatch(buyIcecream())}>Buy IceCream</button> 
    </div>
  )
}

export default HooksIcecreamContainer