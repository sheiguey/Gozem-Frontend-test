import React,{useContext} from "react";
import Testimonial from "./Testimonial";
import { Context } from "../../../context/Context";
import Loader from "../../loader/Loader";
import './body.css';
import { NavLink } from "react-router-dom";

const Listtestimonials =()=>{
    const { testimonials} =useContext(Context);
    const dat =
        <ul className="list-testimonials">
            {
                testimonials?testimonials?.data.slice(0,10).map((testimonial) =>(
                    <NavLink to={`testimonial/${testimonial.id}`} className='link' key={testimonial.id}>
                    <Testimonial
                        key={testimonial.id}
                        content={testimonial.content}
                        mentor={testimonial.mentor}
                        exerciseTitle={testimonial.exercise.title}
                        languageIcon={testimonial.language.icon_url}
                        createdTime={testimonial.created_at}
                    />
                    </NavLink>
                )
                ):<Loader/>
            } 

            {
                (testimonials&&testimonials.data.length===0)?<p className="no-data"> No data for this filter</p>:''
            }
         
        </ul>
    return (
        <React.Fragment>
              {dat}
        </React.Fragment>
    )
}

export default Listtestimonials;