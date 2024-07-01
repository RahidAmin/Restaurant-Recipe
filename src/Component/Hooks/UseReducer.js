// import React, { useReducer, useState } from 'react'
// import "./style.css";

// const UseReducer = () => {
//     //const initialNumber = 0;
//     // const [myNum, setMyNum] = useState(initialNumber)
//     const initialData = 5;
//     const reducer = (state, action) => {
//         if (action.type === 'Incr') {
//             state = state + 1;
//         }
//         if (state > 0 && action.type === 'Decr') {
//             state = state - 1;
//         }
//         return state;
//     }

//     const [state, dispatch] = useReducer(reducer, initialData)

//     return (
//         <div>
//             <div className='center_div'>
//                 <p>{state}</p>
//                 <div class="button2" onClick={() => dispatch({ type: 'Incr' })}>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     Incr
//                 </div>
//                 <div class="button2" onClick={() => dispatch({ type: 'Decr' })}>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     Decr
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UseReducer
