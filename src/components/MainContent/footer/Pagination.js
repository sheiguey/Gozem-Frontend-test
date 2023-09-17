import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { pagination } from "../../../services";

const Pagination =()=>{
    const {testimonials,upDatePageNumber} = useContext(Context);
    const pages=testimonials?testimonials.pagination.total_pages:''
    const currentPage =testimonials?testimonials.pagination.current_page:''
    
    function activePage(item){
      return (testimonials && currentPage===item)?'active-page ':'pagination-button'
    }

    function paginate(){
      return(
          testimonials ? pagination({ currentPage, pages }).map((page, index) => 
            page?(<button 
                      type="button" key={`page-${page}`}
                      className={activePage(page)} 
                      onClick={() => upDatePageNumber(page)} 
                  >
                  {page}
                  </button>
                  ):(
            <span key={`separator-${index}`} className="separator">
              ...
            </span>
          )
          ):<p>loading...</p>     
      )
    }
     

    return (
      <div className="pagination">
        {paginate()}
      </div>
    )
}

export default Pagination;