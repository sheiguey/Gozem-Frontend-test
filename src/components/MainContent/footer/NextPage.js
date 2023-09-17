import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const NextPage=()=>{
    const {next,page,testimonials}=useContext(Context);
    const pages=testimonials?testimonials.pagination.total_pages:'';
    return(
        <button disabled={page===pages}  className="pagination-button next" onClick={()=>next()} >
            Next <img className="previous-icon" src="/assets/icons/arrow-right.png" alt="previous icon"/>
        </button>
    )
}

export default NextPage;