import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const PreviousPage=()=>{
    const {previous,page,testimonials}=useContext(Context);
    return(
        <button disabled={page<=1}  className="pagination-button previous" onClick={()=>previous()}>
           <img className="previous-icon" src="/assets/icons/arrow-left.png"  alt="next icon"/> Previous 
        </button>
    )
}

export default PreviousPage;