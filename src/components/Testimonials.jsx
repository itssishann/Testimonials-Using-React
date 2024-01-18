import { useState } from 'react'
import Card from './Card';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi"
const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index,setIndex] =useState(0);
    function leftShiftHandler(){
       if(index-1<0){
        setIndex(reviews.length-1)
    }
    else{
        setIndex(index-1)
       }
    }
    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1)
           }
    }
    function supriseHandler(){
      let randomIdx= Math.floor(Math.random() * reviews.length);
      setIndex(randomIdx)
    }
  return (
    <div className='h-[] w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 hover:shadow-2xl transition-all duration-500'>
        <Card review = {reviews[index]}/>
        <div className='flex justify-center  text-3xl mt-6 gap-3 font-bold text-violet-400 '>
                <button className='cursor-pointer  hover:text-violet-500' onClick={leftShiftHandler}>
                    <FiChevronLeft/>
                    </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}>
                    <FiChevronRight/>
                    </button>
            </div>
            <div>
                <button onClick={supriseHandler} className='bg-violet-400 select-none hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white mt-4 text-lg' >Suprise Me!</button>
            </div>
    </div>
  )
}

export default Testimonial