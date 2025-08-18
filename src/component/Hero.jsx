import { AlignJustify, X } from "lucide-react";
import heroBg from "../assets/herobg.jpeg";
import { useState } from "react";

function Hero() {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay (dark layer for better text visibility) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 text-white">
        <h1 className="text-2xl md:text-3xl font-mono font-bold text-red-600">Coffee</h1>
        {/*desktop menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="hover:text-red-400 cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">About Us</li>
          <li className="hover:text-red-400 cursor-pointer">Menu</li>
          <li className="hover:text-red-400 cursor-pointer">Review</li>
          <li className="hover:text-red-400 cursor-pointer">Contact</li>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden" >
          {isOpen ? (<X className="w-8 h-8 hover:text-red-500" />): (<AlignJustify className="w-8 h-8 hover:text-red-500" />
          ) }

        </button>
      </nav>
      {/*mobile menu */}
      {isOpen && (<div className="">
        <ul className="flex flex-col items-center justify-center md:hidden gap-6 absolute font-medium text-white w-full h-screen bg-black/70 z-20">
          <li className="hover:text-red-400 cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">About Us</li>
          <li className="hover:text-red-400 cursor-pointer">Menu</li>
          <li className="hover:text-red-400 cursor-pointer">Review</li>
          <li className="hover:text-red-400 cursor-pointer">Contact</li>
        </ul>
      </div>)}



      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold max-w-xl leading-snug">
          Keep your dreams aroused with a cup of coffee.
        </h1>
        <p className="mt-4 max-w-lg text-gray-200">
          The coffee ideas shared by these generators are not cool at all, as
          they are not a human being.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium">
          Buy Now
        </button>
      </div>


    </section>
  );
}

export default Hero;
