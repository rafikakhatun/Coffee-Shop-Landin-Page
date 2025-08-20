import React from 'react';

const images = [
  "/src/assets/cofee3.jpeg",
  "/src/assets/cofee4.jpeg",
  "/src/assets/cofee1.jpeg",
  "/src/assets/cofee2.jpeg",
  "/src/assets/cofee14.jpeg",
  "/src/assets/cofee12.jpeg",
];

const OurGalary = () => {
  return (
    <>
      {/* Heading */}
      <section className='py-12 px-10 w-full'>
        <div className='flex flex-col space-y-5'>
          <h1 className='text-2xl md:text-3xl font-semibold text-center'>Our Galary</h1>
          <p className='text-lg md:text-xl text-center text-gray-600'>
            The coffee shop name generator is a tool for those that are deliberating what to call their new coffee
          </p>
        </div>
      </section>

     
    </>
  );
};

export default OurGalary;
