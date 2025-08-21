import { ArrowRight } from 'lucide-react';
import React from 'react';

const UpdateNewsCard = ({ profCofeeItem }) => {
    console.log(profCofeeItem)
    return (
        <div data-aos="fade-up">
            <div 
              className="w-72 shadow-lg rounded-xl flex flex-col space-y-3" 
              data-aos="zoom-in"
            >
                <img
                    src={profCofeeItem?.image}
                    alt="Coffee beans"
                    className="rounded-t-xl w-full h-60 object-cover bg-gray-200 transform transition-transform duration-300 hover:scale-105"
                    data-aos="fade-down"
                />
                <div className='px-4 py-8 space-y-3' data-aos="fade-up">
                    <h1 className="text-xl font-bold" data-aos="fade-right">
                        {profCofeeItem?.name}
                    </h1>
                    <p className="text-gray-600 text-sm" data-aos="fade-left">
                        {profCofeeItem?.title}
                    </p>
                    <span className="text-rose-600 text-md cursor-pointer flex" data-aos="zoom-in">
                        Learn More  
                        <ArrowRight size={18} className='mt-1 ' />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UpdateNewsCard;
