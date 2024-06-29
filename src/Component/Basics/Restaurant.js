import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import ManuCard from './MenuCard'
import MenuCard from './MenuCard'



const Restaurant = () => {
    const [menuData, setManuData] = useState(Menu);



    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item'>Breakfast</button>
                    <button className='btn-group__item'>Lunch</button>
                    <button className='btn-group__item'>Evening</button>
                    <button className='btn-group__item'>Dinner</button>
                    <button className='btn-group__item'>All</button>
                </div>
            </nav>
            <MenuCard menuData={menuData}></MenuCard>

        </>
    )
}


// const [inputValue, newChangedValue] = useState('rahid');
// const change = function (event) {
//     const newValue = event.target.value;
//     newChangedValue(newValue);

//     <h1>{inputValue}</h1>
//             <h2>{newChangedValue}</h2>
//             <input type="text" placeholder='Type Something' value={inputValue} onChange={change} />
// }
export default Restaurant
