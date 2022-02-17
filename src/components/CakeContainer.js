import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cake - {props.numOfCakes}</h2>
       <button onClick={props.buyCake}>Buy Cake</button> 
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
        buyCake: () => dispatch(buyCake())
        // buyCake: ()=> dispatch(buyCake())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)