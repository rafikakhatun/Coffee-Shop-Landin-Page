import { ArrowRight } from 'lucide-react';
import React from 'react';

const UpdateNewsCard = () => {
    return (
        <div>

            <div className="w-72 shadow-lg rounded-xl  flex flex-col space-y-3">
                        <img
                            src="src/assets/cofee10.jpeg"
                            alt="Coffee beans"
                            className="rounded-t-xl w-full h-48 object-cover bg-gray-200  transform transition-transform duration-300 hover:scale-105"
                        />
                        <div className='p-4 space-y-3'>
                        <h1 className="text-xl font-bold">Coffee beans</h1>
                        <p className="text-gray-600 text-sm">
                            These advertising mottos are targeted to the 50% of coffee drinking consumers.
                        </p>
                        <span className="text-red-500 text-md cursor-pointer flex ">
                            Learn More  <ArrowRight size={18} className='mt-1 ' />
                        </span>
                        </div>
                    </div>
            
        </div>
    );
};

export default UpdateNewsCard;