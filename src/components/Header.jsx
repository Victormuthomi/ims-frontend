import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <div className={`w-full mt-6 fixed top-0 left-0 z-20  h-12  `}>
      <div className="md:flex  container  mx-auto items-center justify-between">
        {/* right side */}
        <div>
          <Link
            to="/"
            className="font-bold text-3xl text-white cursor-pointer ml-4"
          >
            IMS
          </Link>
        </div>
        {/* left side */}
        {/* icon */}
        <div
          className={`absolute right-8 top-2  cursor-pointer md:hidden w-7 h-7 text-white`}
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose /> : <GiHamburgerMenu />}
        </div>

        {/* links */}
        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 md:pl-0 transition-all duration-500 ease-in text-white ${
            open ? "top-12 bg-[#050816 ]" : "top-[-490px] bg-transparent"
          } `}
        >
          {links?.map((link) => (
            <li className="md:ml-8 md:y-0 font-semibold flex capitalize lg:text-white gap-4 ml-4 ">
              <Link to={link.path} className="text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
