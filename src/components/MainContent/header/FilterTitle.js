import React,{useContext} from "react";
import { Context } from "../../../context/Context";

const FilterTitle=()=>{
    const {getExerciseValue} = useContext(Context)

    function getvalue(e){
        e.preventDefault();
        setTimeout(()=> getExerciseValue(e.target.value),2000)
       
    }

    return(
        <div className="filter-1">
            <div className="language-sort">
                <img src="/assets/icons/languageIcon.png" alt="language icon" />
                <img src="/assets/icons/arrow-down-1.png" alt="arrow down icon" />
            </div>
            <div className="filter-title-input">
                <img className="search-icon" src="/assets/icons/search.png" alt="search icon" />
                <input onChange={(e)=>getvalue(e)} className="filter-input filter-input_title" type="text" name="filter title" placeholder="Filter by exercise title" />
            </div>
        </div>
    )
}

export default FilterTitle;