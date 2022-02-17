// import React from 'react'
// import { connect } from 'react-redux'
// import {buyIcecream} from '../redux'

// function IcecreamContainer(props) {
//   return (
//     <div>
//         <h2>Number of Cake {props.numOfIcecreams}</h2>
//         <button onClick={props.buyIcecream}>Buy cake</button>
//     </div>
//   )
// }

// //step 1 function to return state
// const mapStateToProps = state =>{
//     return{
//        numOfIcecreams = state.icecream.numOfIcecreams
//     }
// }

// //step2 function to dispatch as a props
// const mapDispatchToProps = dispatch =>{
//     return{
//         buyIcecream : () => dispatch(buyIcecream())
//         // buyCake: ()=> dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)