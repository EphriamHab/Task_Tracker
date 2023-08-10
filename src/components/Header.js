import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
const Header = ({title,onAdd,showAdd}) => {
    const location = useLocation()
    return(
        <header className="header">
        <h1 style={headerStyle}>{title}</h1>
        { location.pathname==='/'&&(
        <Button 
        color={showAdd?'red':'green'} 
        text={showAdd?'close':'Add'}
         onClick={onAdd}
          />
          )}
       </header>
    );
  
} 
const headerStyle= {
    color: 'blue',
  
}
export default Header