import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const links = (
    <>
      <ul className="flex flex-col lg:flex-row justify-center lg:items-center lg:gap-10 gap-3">
        <div>
          <li>
            <Link
              href="#home"
              className={
                activeLink === "#home"
                  ? "border-b-2 border-b-midnight font-primary font-medium"
                  : "font-primary font-medium"
              }
              onClick={() => setActiveLink("#home")}
            >
              Home
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link
              href="#about-me"
              className={
                activeLink === "#about-me"
                  ? "border-b-2 border-b-midnight font-primary font-medium"
                  : "font-primary font-medium"
              }
              onClick={() => setActiveLink("#about-me")}
            >
              About Me
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link
              href="#skills"
              className={
                activeLink === "#skills"
                  ? "border-b-2 border-b-midnight font-primary font-medium"
                  : "font-primary font-medium"
              }
              onClick={() => setActiveLink("#skills")}
            >
              Skills
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link
              href="#projects"
              className={
                activeLink === "#projects"
                  ? "border-b-2 border-b-midnight font-primary font-medium"
                  : "font-primary font-medium"
              }
              onClick={() => setActiveLink("#projects")}
            >
              Projects
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link
              href="#contact-me"
              className={
                activeLink === "#contact-me"
                  ? "border-b-2 border-b-midnight font-primary font-medium"
                  : "font-primary font-medium"
              }
              onClick={() => setActiveLink("#contact-me")}
            >
              Contact Me
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="bg-primaryColor text-white rounded-lg dropdown-content z-1 mt-3 w-32 p-4"
            >
              {links}
            </ul>
          </div>
          <Link href="#home">
            <img className="w-40 h-16 object-contain" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1u-92YHgu3_v9IUgkEgZ7Jsqi78-YmRhu/view?usp=sharing"
            target="_blank"
            className="md:px-5 md:py-3 px-3 py-2 bg-primaryColor text-white rounded-xl font-medium text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
