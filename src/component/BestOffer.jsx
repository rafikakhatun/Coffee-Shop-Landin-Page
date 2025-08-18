import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import BestOfferCard from './BestOfferCard';

const BestOffer = () => {
    return (
        <div>
            <section className='py-20 px-12 bg-gray-100'>
                {/*our best offer heading */}
                <div>
                    <div className='flex flex-col md:flex-row justify-between p-8 space-y-6'>
                        <div className='flex flex-col space-y-6'>
                            <h1 className='text-2xl md:text-3xl  font-semibold text-center md:text-left '>That is Our Best Offer</h1>
                            <p className='text-gray-700 text-center md:text-left'>A coffee shop will help you to tell the audience what your business</p>
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <ChevronLeft className='w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full' />
                            <ChevronRight className='w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full' />

                        </div>
                    </div>
                    {/* best offer card */}
                    <div>
                      <BestOfferCard></BestOfferCard>
                    </div>


                </div>
            </section>

        </div>
    )
};
export default BestOffer;