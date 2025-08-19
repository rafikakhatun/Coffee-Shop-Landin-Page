import React from 'react';

const BestOfferCard = () => {
    return (
        <div>

            <div className='w-72 p-6 bg-white shadow-lg rounded-lg P-8  space-y-4'>
                <img className='w-60 h-56' src="src/assets/cofee6.jpeg" alt="photo" />

                <span className='font-semibold'>$5.99</span>
                <h1 className='font-semibold'>Brazilian cofee beans</h1>
                <p className='text-md text-gray-700'>Coffee that’s always you handle your own the way you like.</p>
                <div class="flex items-center gap-4">

                    <div class="flex  border border-gray-800 rounded">
                        <div class="px-4 py-0  border-r border-gray-800">
                            3
                        </div>

                        <div class="flex flex-col">
                            <button class="px-3 py-0 border-b border-gray-400">+</button>
                            <button class="px-3 py-0">-</button>
                        </div>
                    </div>

                    <button class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded">
                        Get Delivery
                    </button>
                </div>


            </div>

        </div>
    );
};

export default BestOfferCard;