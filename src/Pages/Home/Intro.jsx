import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import picture from "../../assets/golamsarwar.jpg";
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
    <div className="flex justify-between pl-5 pr-7 items-center gap-5">
      <div className="px-16 py-40 flex-1 border-2">
        <h1 className="text-4xl font-bold ">
          Hello, I am{" "}
          <span className="bg-secondaryColor px-2 py-1 text-primaryColor">
            MD. Golam Sarwar
          </span>
        </h1>
        <p className="mt-4 font-medium text-lg ">
          <span className="bg-secondaryColor px-2 py-1 text-primaryColor">
            Your Vision, My Code. A Perfect Web Symphony.
          </span>
        </p>
        <h1 className="text-4xl mt-4 font-bold">
          I am a{" "}
          <span className="bg-secondaryColor px-2 py-1 text-primaryColor">
            {text}
          </span>
          <span>
            <Cursor></Cursor>
          </span>
        </h1>
        <div className="flex items-center gap-2 mt-8 text-primaryColor">
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
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1u-92YHgu3_v9IUgkEgZ7Jsqi78-YmRhu/view?usp=sharing"
            target="_blank"
            className="md:px-5 md:py-3 px-3 py-2 bg-primaryColor text-white rounded-xl font-medium text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex-1 border-2">
        <img src={picture} className="w-[600px]" alt="" />
      </div>
    </div>
  );
};

export default Intro;
