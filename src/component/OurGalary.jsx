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
      <section className='py-8 px-10 w-full' data-aos="fade-up">
        <div className='flex flex-col space-y-5' data-aos="fade-up" data-aos-delay="100">
          <h1 className='text-2xl md:text-3xl font-semibold text-center' data-aos="zoom-in">
            Our Galary
          </h1>
          <p
            className='text-lg md:text-xl text-center text-gray-600'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The coffee shop name generator is a tool for those that are deliberating what to call their new coffee
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 md:px-12 py-10 pb-12" data-aos="fade-up">
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          data-aos="zoom-in-up"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200"
              data-aos="flip-left"
              data-aos-delay={i * 100}
            >
              {/* Image */}
              <img
                src={src}
                alt={`Coffee ${i + 1}`}
                className="h-48 sm:h-60 md:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                data-aos="zoom-in"
              />

              {/* Overlay */}
              <div
                className="pointer-events-none absolute inset-0 flex items-end justify-between p-3 sm:p-4 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="text-white/95 text-sm font-medium" data-aos="fade-right">
                  Coffee
                </span>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-red-600 text-white px-2 py-1 text-[10px] font-semibold  shadow"
                  data-aos="fade-left"
                >
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*Load more */}
      <section className='px-8 py-12 w-full'>
        <div className='flex flex-col  space-y-4'>
          <div className='w-1/2 border border-gray-700 mx-auto' data-aos="fade-right"></div>
          <span className='text-center text-red-600' data-aos="fade-up">LOAD MORE</span>
          <div className='w-1/2 border mx-auto border-gray-700'></div>
        </div>
        

      </section>
    </>
  );
};

export default OurGalary;
