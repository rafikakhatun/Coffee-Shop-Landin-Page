import React from 'react';

const BestOfferCard = ({profData}) => {
    console.log(profData)
    return (
        <div>

            <div className='w-72 p-6 bg-white P-8  shadow space-y-4'>
                <img className='w-60 h-56' src="src/assets/cofee6.jpeg" alt="photo" />

                <span className='font-semibold text-green-600'>$5.99</span>
                <h1 className='font-semibold'>Brazilian cofee beans</h1>
                <p className='text-md text-gray-700'>Coffee that’s always you handle your own the way you like.</p>
                <div className="flex items-center gap-4">

                    <div className="flex  border border-gray-800 rounded">
                        <div className="px-4 py-0  border-r border-gray-800">
                            3
                        </div>

                        <div className="flex flex-col">
                            <button className="px-3 py-0 border-b border-gray-400">+</button>
                            <button className="px-3 py-0">-</button>
                        </div>
                    </div>

                    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer">
                        Get Delivery
                    </button>
                </div>


            </div>

        </div>
    );
};

export default BestOfferCard;