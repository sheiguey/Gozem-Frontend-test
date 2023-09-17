import React from "react";
import NextPage from "./NextPage";
import PreviousPage from "./PreviousPage";
import Pagination from "./Pagination";
import './contentFooter.css';

const FooterContainer =()=>{
  return (
    <div className="footer">
        <PreviousPage/>
        <Pagination/>
        <NextPage />
    </div>
  )
}

export default FooterContainer;