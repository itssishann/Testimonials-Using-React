import React from 'react'
import Card from './Card';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi"
const Testimonial = (props) => {
    let reviews = props.reviews;
    function rightShiftHandler(){
        
    }
    function leftShiftHandler(){

    }
    function supriseHandler(){

    }
  return (
    <div>
        <Card review = {reviews[0]}/>
        <div className='flex justify-center  text-3xl mt-5 gap-3 font-bold text-violet-400 '>
                <button className='cursor-pointer  hover:text-violet-500' onClick={leftShiftHandler}>
                    <FiChevronLeft/>
                    </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}>
                    <FiChevronRight/>
                    </button>
            </div>
            <div>
                <button onClick={supriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' >Suprise Me!</button>
            </div>
    </div>
  )
}

export default Testimonial