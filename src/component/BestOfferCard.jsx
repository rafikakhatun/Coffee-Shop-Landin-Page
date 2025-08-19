import React from 'react';

const BestOfferCard = ({ profData }) => {
    console.log(profData)
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
        >
            <div 
                className='w-72 p-6 bg-white shadow space-y-4 rounded-xl'
                data-aos="zoom-in"
                data-aos-delay="250"
                data-aos-duration="1000"
            >
                <img
                    className='w-60 h-56 mx-auto'
                    src="src/assets/cofee6.jpeg"
                    alt="photo"
                    data-aos="fade-down"
                    data-aos-delay="300"
                />

                <span
                    className='font-semibold text-green-600'
                    data-aos="fade-right"
                    data-aos-delay="350"
                >
                    $5.99
                </span>

                <h1
                    className='font-semibold'
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    Brazilian coffee beans
                </h1>

                <p
                    className='text-md text-gray-700'
                    data-aos="fade-up"
                    data-aos-delay="450"
                >
                    Coffee that’s always you handle your own the way you like.
                </p>

                <div 
                    className="flex items-center gap-4"
                    data-aos="zoom-in-up"
                    data-aos-delay="500"
                >
                    <div className="flex border border-gray-800 rounded">
                        <div 
                            className="px-4 py-0 border-r border-gray-800"
                            data-aos="fade-up"
                            data-aos-delay="550"
                        >
                            3
                        </div>
                        <div className="flex flex-col">
                            <button 
                                className="px-3 py-0 border-b border-gray-400"
                                data-aos="fade-down"
                                data-aos-delay="600"
                            >
                                +
                            </button>
                            <button 
                                className="px-3 py-0"
                                data-aos="fade-up"
                                data-aos-delay="650"
                            >
                                -
                            </button>
                        </div>
                    </div>

                    <button
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer"
                        data-aos="flip-right"
                        data-aos-delay="700"
                    >
                        Get Delivery
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestOfferCard;
