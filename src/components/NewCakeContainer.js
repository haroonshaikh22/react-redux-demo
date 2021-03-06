import React, { useState } from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2>Number of cake - {props.numOfCakes}</h2>
        <input  type='text' value={number} onChange={ e => setNumber(e.target.value)}/>
       <button onClick={() => props.buyCake(number)}>Buy {number}Cake</button> 
    </div>
  )
}

//step 1 function to return state
const mapStateToProps = state =>{
    return{
        numOfCakes : state.cake.numOfCakes
    }
}

//step2 function to dispatch as a props
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: number => dispatch(buyCake(number))
        // buyCake: ()=> dispatch(buyCake())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)