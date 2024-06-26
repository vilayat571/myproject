import { Link } from "react-router-dom";
import Arrrow from "../Navbar/Arrrow";
import myCV from "../../assets/images/vilayat_safarov_cv.pdf";
import waving from '../../assets/images/wawing-emoji.png'

function HomebeginText() {
  return (
    <div className="col-span-2 h-[400px]">
      
      <p className="text-[29px] relative top-3 ml-1 tracking-wider font-thin mb-4 ">
        Hi there <img src={waving} className="w-8 inline" alt="Vilayat waves to everybody" /> I am
      </p>
      <div className="xl:text-[90px] md:text-[90px] lg:text-[90px] sm:text-[70px] font-bold">
        <div className=" ">Vilayat</div>
        <div className=" relative bottom-6">Safarov</div>
      </div>
      <p className="font-light text-lg ml-1 relative bottom-4">
        Software developer with
        <br />
        UI\UX design skills
      </p>

      <div>
        <Link
          to={myCV}
        
          target="blank"
          className="relative top-5 px-8 py-3 rounded-[4px] text-base border-[1px] border-white "
        >
          Check out my CV
          <Arrrow style={"-rotate-45 ml-[2px] mt-[3px] text-base "} />
        </Link>
      </div>

    </div>
  );
}

export default HomebeginText;
