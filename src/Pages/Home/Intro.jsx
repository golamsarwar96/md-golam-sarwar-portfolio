import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import picture from "../../assets/pfp.png";
const Intro = () => {
  const [text] = useTypewriter({
    words: [
      "Front-End Web Developer",
      "React Developer",
      "Web Enthusiast",
      "Problem Solver",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="flex justify-between pl-5 pr-3 items-center gap-5 flex-col md:flex-row mt-5 md:mt-0">
      <div className="lg:px-16 lg:py-40 flex-1">
        <h1 className="lg:text-[40px] text-xl font-bold ">
          Hello, I am{" "}
          <span className="bg-secondaryColor px-4 py-1 text-primaryColor">
            MD. Golam Sarwar
          </span>
        </h1>
        <p className="mt-2 font-medium lg:text-xl md:text-base ">
          <span className=" text-primaryColor">
            Your Vision, My Code. A Perfect Web Symphony.
          </span>
        </p>
        <h1 className="lg:text-4xl text-xl mt-4 font-bold">
          I am a{" "}
          <span className="bg-secondaryColor px-4 py-1 text-primaryColor">
            {text}
          </span>
          <span>
            <Cursor></Cursor>
          </span>
        </h1>
        <div className="flex items-center gap-2 mt-10 text-primaryColor">
          <Link to="https://github.com/golamsarwar96">
            <FaGithub className="text-3xl"></FaGithub>
          </Link>
          <Link to="https://www.linkedin.com/in/md-golam-sarwar-20a1522ba/">
            <FaLinkedin className="text-3xl"></FaLinkedin>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100070767671286">
            <FaFacebook className="text-3xl"></FaFacebook>
          </Link>
        </div>
        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1u-92YHgu3_v9IUgkEgZ7Jsqi78-YmRhu/view?usp=sharing"
            target="_blank"
            className="md:px-5 md:py-3 px-3 py-2 bg-primaryColor text-white rounded-xl font-medium text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img src={picture} className="w-[550px]" alt="" />
      </div>
    </div>
  );
};

export default Intro;
