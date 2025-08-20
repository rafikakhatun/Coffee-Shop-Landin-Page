
import './App.css'
import BestOffer from './component/BestOffer'
import Hero from './component/Hero';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurGalary from './component/OurGalary';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // duration = animation speed
  }, []);

  return (
    <>
   <Hero></Hero>
   <BestOffer></BestOffer>
   <OurGalary></OurGalary>
      
    </>
  )
}

export default App
