import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'



const uniqueList = [...new Set(Menu.map((curElement) => {
    return curElement.category;
})), "All",]
console.log(uniqueList)


const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, SetMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === 'All') {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElement) => {
            return curElement.category === category;
        })
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}></Navbar>
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
