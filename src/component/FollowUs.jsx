import { Mail, Phone } from "lucide-react";
import bgFollow from "../assets/cofeebg.jpg";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const FollowUs = () => {
  return (
    <>
      <section className="w-full py-12 text-white">
        <div
          style={{ backgroundImage: `url(${bgFollow})` }}
          className="w-full h-[450px] relative bg-no-repeat bg-center bg-cover overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {/* overlay div */}
          <div
            className="absolute inset-0 bg-black/10"
            data-aos="fade-in"
            data-aos-delay="200"
          ></div>

          <div className="space-y-6 mt-10">
            <h3
              className="text-center text-xl text-rose-600"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Follow Us
            </h3>

            <h1
              className="text-center text-2xl md:text-4xl font-bold"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Have an inquiry?<br />Text or call and ask Something
            </h1>

            <div
              className="flex justify-center"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <Phone size={25} />
              <span className="text-lg">+8801742-527137</span>
            </div>

            <div
              className="flex justify-center"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <Mail size={25} />
              <span className="text-lg">mdmkcofee@784gmail.com</span>
            </div>

            <div
              className="flex gap-3 justify-center"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="w-12 h-12 bg-black/40 rounded-full flex justify-center items-center">
                <FaYoutube className="w-6 h-6 rounded-full text-red-600" />
              </div>
              <div className="w-12 h-12 bg-black/40 rounded-full flex justify-center items-center">
                <FaTwitter className="w-6 h-6 text-blue-500" />
              </div>
              <div className="w-12 h-12 bg-black/40 rounded-full flex justify-center items-center">
                <FaInstagram className="w-6 h-6 text-pink-500" />
              </div>
              <div className="w-12 h-12 bg-black/40 rounded-full flex justify-center items-center">
                <FaLinkedin className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowUs;
