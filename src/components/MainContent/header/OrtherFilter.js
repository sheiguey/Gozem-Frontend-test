import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const OrtherFilter =()=>{
  const {getOrderValue}= useContext(Context)
    return (
        <div className="filter-title-input">
                <img className="arrow-down_2" src="/assets/icons/Shape.png" alt="Arrow down icon" />
                <select id="order" className="filter-input filter-input_other" onChange={(e)=>getOrderValue(e.target.value)}>
                    <option htmlFor="order" value='oldest_first'>Sort by Most older</option>   
                    <option htmlFor="order" value='newest_first'>Sort by Most recent</option> 
                </select>
    
        </div>
    )
}

export default OrtherFilter;