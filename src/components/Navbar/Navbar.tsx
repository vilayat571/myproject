import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {  useState,useEffect } from "react";
import Sendlink from "../../atoms/Navbar/Sendlink";

export default function Navbar() {
  const [sideOpen, setSideOpen] = useState(false);

  function openSidebar() {
    setSideOpen(!sideOpen);
  }

  const [name, setName] = useState<string | any>("");

  const data: any = localStorage.getItem("signIn");
  const object = JSON.parse(data);

  useEffect(() => {
    const url = `https://api.safarovacademy.com/api/v1/account/${object?.userId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setName(data.username));
  }, []);

  return (
    <div>
      <div className=" flex justify-center align-middle">
        <div className="xl:w-[85%] lg:w-[85%] md:w-[85%] sm:w-[91%] rounded-full bg-[#171719] xl:mx-8 lg:mx-8 md:mx-8 sm:mx-0 mt-8 xl:px-16 lg:px-16 md:px-12 sm:px-8 py-6 flex justify-between items-center">
          <div className=" text-[27px] font-semibold tracking-wider leading-9">
            <Link to={"/"}> safarov.</Link>
          </div>

          <div className="flex xl:block lg:block md:hidden sm:hidden text-[17px] font-medium text-[#C3C3C3] justify-between ">
            <Link className="mx-4" to="/blogs">
              Blogs
            </Link>
            <Link className="mx-4" to="/askquestion">
              Ask a question
            </Link>
            <Link className="mx-4" to="/">
              Who I'am
            </Link>
          </div>

          <Sendlink
            divStyle={"xl:block lg:block md:hidden sm:hidden"}
            arrowStyle={"-rotate-45 mr-2 text-[17px] text-white font-medium"}
            textLink={object == null ? "Let's join" : name}
            pathLink={object == null ? "/signin" : "/dashboard"}
          />

          <div className=" xl:hidden lg:hidden md:block sm:block">
            <FontAwesomeIcon
              onClick={openSidebar}
              className=" mr-2 text-xl"
              icon={faBars}
            />
          </div>
        </div>
      </div>
      <div
        className={`border *: ${
          sideOpen
            ? "block w-full bg-[#121316] h-screen fixed top-0 z-10"
            : "hidden"
        }`}
      >
        <div className=" bg-[#171719] w-full border-0 outline-none flex justify-between items-center
         py-6 px-8 mx-4 my-8 rounded-full">
          <Link
            to={"/"}
            className="text-[27px] font-semibold tracking-wider leading-9"
          >
            {" "}
            safarov
          </Link>
          <button>
            <FontAwesomeIcon
              onClick={openSidebar}
              className=" mr-2 text-2xl"
              icon={faTimes}
            />
          </button>
        </div>
        <div className="grid grid-cols-1 mx-8 text-xl gap-y-1">
        <Link className="mx-4" to="/blogs">
              Blogs
            </Link>
            <Link className="mx-4" to="/askquestion">
              Ask a question
            </Link>
            <Link className="mx-4" to="/">
              Who I'am
            </Link>
        </div>
      </div>
    </div>
  );
}
