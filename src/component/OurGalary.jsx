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

       {/* Image Grid */}
      <section className="px-6 md:px-12 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200"
            >
              {/* Image */}
              <img
                src={src}
                alt={`Coffee ${i + 1}`}
                className="h-48 sm:h-60 md:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-3 sm:p-4 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/95 text-sm font-medium">Coffee</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-red-600 text-white px-2 py-1 text-[10px] font-semibold  shadow">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </>
  );
};

export default OurGalary;
