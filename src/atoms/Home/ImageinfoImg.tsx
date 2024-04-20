import { Link } from "react-router-dom";
import Arrrow from "../../atoms/Navbar/Arrrow";

function ImageinfoImg() {
  return (
    <div className="col-span-1 relative xl:top-8 md:top-8 lg:top-8 sm:top-16 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-1">
      <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-semibold text-white">
        Who I’m 🤨
      </p>
      <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-normal xl:mt-12 md:mt-12 lg:mt-12 sm:mt-6 text-white">
        Someone who loves his job and helping people make the world a better
        place.
      </p>
      <p className="xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[18px] font-normal xl:mt-12 md:mt-12 lg:mt-12 sm:mt-6 text-[#c3c3c3]">
        I believe that a well designed website has the power to leave a lasting
        impression. With years of experience in the industry, I’ve had the
        privilege of working with diverse clients, helping them achieve their
        goals.
      </p>

      <Link
        to="/"
        className=" px-6 py-3 relative text-base top-12 
         
      rounded border-[1px] border-white"
      >
        Learn more
        <Arrrow style="-rotate-45 ml-2 text-base text-white font-medium" />
      </Link>
    </div>
  );
}

export default ImageinfoImg;
