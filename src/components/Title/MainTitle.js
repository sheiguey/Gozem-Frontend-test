import { useContext } from 'react';
import './title.css'
import { Context } from '../../context/Context';

const MainTitle =()=>{
    const {testimonials} = useContext(Context)
    return (
        <div className='main-title'>
            <img src="/assets/icons/a-badge.png" alt="a badge icon title"/> 
            <div className='title-content'><h1 className='title'>Testimonial I've left</h1><span className='count-testimonial'>
                {testimonials&&testimonials.pagination?.total_count}</span></div>
            <img src="/assets/icons/Frame.png" alt="frame line title"/> 
        </div>
    )
}

export default MainTitle;