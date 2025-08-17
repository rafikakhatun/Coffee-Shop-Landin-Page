import heroBg from "../assets/herobg.jpeg";

function Hero() {
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
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-red-400 cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">About Us</li>
          <li className="hover:text-red-400 cursor-pointer">Menu</li>
          <li className="hover:text-red-400 cursor-pointer">Review</li>
          <li className="hover:text-red-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      
    </section>
  );
}

export default Hero;
