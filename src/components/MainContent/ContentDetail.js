import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../../context/Context";
import './contentDetail.css';

const ContentDetail =()=>{
    const params = useParams();
    const {testimonials}=useContext(Context);
    const testimonialDetail = testimonials?testimonials.data.filter(item=>item.id===params.id):'';

    return (
        <div className="testtimonial-detail">
            <h1 className='title'>Testimonial Detail</h1>
            <div className="testimonial-detail_header">
                <img src={testimonialDetail[0].exercise.icon_url}  alt="exercise icon"/>
                <h3>{testimonialDetail[0].exercise.title}</h3>
                <p className="mentor">by <span>{testimonialDetail[0].mentor}</span> </p>
            </div>
            <p className="language">
             <span>{testimonialDetail[0].language.title}</span> <img src={testimonialDetail[0].language.icon_url} alt="language icon"/> 
            </p>
            <p>"{testimonialDetail[0].content}"</p>
            <div className="testimonial-detail_footer">
                <p>Posted on: <span>{testimonialDetail[0].created_at}</span> </p>
            </div>
        </div>
     
    )
}

export default ContentDetail;