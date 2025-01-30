import { Link } from "react-router-dom";
import imagePath from "../assets/images/rb_517.png";

const Hero = () => {
  return (
    <div className=" h-screen sm:min-h  lg:min-h-[85vh] bg-gradient-to-t from-[#FF007a] to-[#4b0082]   relative py-32    ">
      <div
        className="flex container mx-auto justify-center items-center h-full        
      "
      >
        {/* right */}
        <div className="w-full lg:w-1/2 ">
          <img src={imagePath} className="w-full h-full object-cover" />
        </div>

        {/* left */}
        <div className="w-full lg:w-1/2 sm:content-center">
          <h1 className="text-white md:text-right text-right font-bold font-sans md:text-5xl mr-6 text-2xl">
            Grow Your Business with Smarter Inventory Tools
          </h1>
          <p className="my-5 text-base font-mono md:text-right text-right text-white mr-6 md:text-3xl text-1xl">
            Optimize your business processes and enhance efficiency.
          </p>
          <div className="flex justify-end">
            <Link
              to="/login"
              className="my-6 pl-4 pt-4 pb-4 md:mr-6 mr-24 pr-4 w-32 text-base text-indigo-700 font-bold bg-green-400 hover:bg-green-400 transition-all duration-300 rounded-full  text-base"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
