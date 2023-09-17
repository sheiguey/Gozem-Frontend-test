import React from "react";
import { Routes,Route } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import ContentDetail from "./components/MainContent/ContentDetail";

const Router =()=>{
    return(
          <Routes>
            <Route path="/" element={<MainContent/>} />
            <Route path="testimonial/:id" element={<ContentDetail/>} />
          </Routes>
    )
}

export default Router;