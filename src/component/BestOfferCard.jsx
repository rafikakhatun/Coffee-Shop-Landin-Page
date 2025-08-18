import React from 'react';

const BestOfferCard = () => {
    return (
        <div>

            <div className='w-72 h-96 bg-white'>
                <img src="src/assets/cofee6.jpeg" alt="photo" />
                <span>$5.99</span>
                <h1>Brazilian cofee beans</h1>
                <p>Coffee that’s always you handle your own the way you like.</p>
                <div class="flex items-center gap-4">

                    <div class="flex border border-gray-400 rounded">
                        <div class="px-4 py-2 border-r border-gray-400">
                            3
                        </div>

                        <div class="flex flex-col">
                            <button class="px-3 py-1 border-b border-gray-400">+</button>
                            <button class="px-3 py-1">-</button>
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