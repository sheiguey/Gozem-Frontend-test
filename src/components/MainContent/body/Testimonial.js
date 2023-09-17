import moment from "moment/moment";
import React,{Fragment} from "react";

const Testimonial =({content,mentor,exerciseTitle,languageIcon,createdTime})=>{
     const description = content.slice(0,70);
     const newDate = moment(createdTime,"YYYYMMDD").fromNow()
    return(
         <Fragment>
            <li className="single-testimonial">
               <div className="about">
                 <img className="icon-language" src={languageIcon} alt="language icon"/>
                 <img className="profile" src="/assets/icons/user.png"  alt="profile picture"/>
                 <span className="mentor-information">
                    <h4 className="mentor-name">{mentor}</h4>
                    <p className="mentor-occupation">{exerciseTitle}</p>
                 </span>
               </div>
               <p className="description">
                 {description}{description.length>50&&'...'}
               </p>
               <div className="time">
                 <p>{newDate} </p><span><img src="/assets/icons/detail-icon.png" alt="detail icon"/></span>
               </div>
            </li>
         </Fragment>
    )
}

export default Testimonial;