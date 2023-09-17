import React from "react";
import FilterTitle from "./FilterTitle";
import './contentHeader.css';
import OrtherFilter from "./OrtherFilter";


const HeaderContainer = ()=>{
   return (
      <div className="header-container">
         <FilterTitle/>
         <OrtherFilter/>
      </div>
   )
}

export default HeaderContainer;



