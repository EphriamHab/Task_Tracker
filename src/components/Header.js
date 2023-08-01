import React from "react";
import Button from "./Button";
const Header = (props) => {
    const onClick =()=>{
        console.log('click!')
    }
    return(
        <header className="header">
        <h1 style={headerStyle}>{props.title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
       </header>
    );
  
} 
const headerStyle= {
    color: 'blue',
  
}
export default Header