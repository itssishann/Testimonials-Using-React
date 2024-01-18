import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
const Card = (props) => {
    let review = props.review
    return (
        <div className='flex flex-col md:relative'>
           <div className='relative'>
    <div className='absolute top-[-7rem] z-10'>
        <div className='h-[140px] rounded-full bg-violet-500 top-[-4px] z-14 absolute w-[140px] left-[5px]'></div>
        <img className='aspect-square relative rounded-full w-[140px] h-[140px] z-15' src={review.image} alt="" />
    </div>
</div>

            <div className='mt-7 text-center'>
                <p className='font-bold text-2xl capitalize tracking-wide'>{review.name}</p>
                <p className='text-violet-600 uppercase text-md '>{review.job}</p>
            </div>
            <div className='mx-auto text-violet-400 mt-5'>
                < FaQuoteLeft />
            </div>
            <div className='mt-4 text-center capitalize text-slate-700'>
                {review.text}
            </div>
            <div className='mx-auto text-violet-400 mt-5'>
                <FaQuoteRight />
            </div>
         
        </div>
    )
}

export default Card