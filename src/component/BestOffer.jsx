import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const BestOffer = () => {
    return (
        <div>
            <section className='py-20 px-12 bg-gray-50'>
                <div className='flex justify-between'>
                    <div>
                        <h1>That is Our Best Offer</h1>
                        <p>A coffee shop will help you to tell the audience what your business</p>
                    </div>
                    <div className='flex gap-4'>
                        <ChevronLeft className='w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full' />
                        <ChevronRight className='w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full' />

                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default BestOffer;