import React from "react";
import Button from "./Button";
const Header = ({title,onAdd,showAdd}) => {
    return(
        <header className="header">
        <h1 style={headerStyle}>{title}</h1>
        <Button color={showAdd?'red':'green'} text={showAdd?'close':'Add'} onClick={onAdd} />
       </header>
    );
  
} 
const headerStyle= {
    color: 'blue',
  
}
export default Header