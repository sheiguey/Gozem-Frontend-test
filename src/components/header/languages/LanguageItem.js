import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const LanguageItem=({count,icon,title,slug})=>{    
   const {getLanguageValue,display}=useContext(Context)

    return (
        <li className="language-item">
            <div className="language-item_label">
                <input name="language" type="radio" value={title} onClick={()=>{getLanguageValue(slug);display()}}/>
                <img className="language-item_icon" src={icon} alt="language icon"/>
                <p className="langue-item_title">{title}</p>
            </div>
            <span className="language-item_count">{count}</span>
        </li>
    )
}

export default LanguageItem;