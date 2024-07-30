// components/HeroSection.js
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center h-[70vh] gap-5 relative">
      {/* <img src="https://svgsilh.com/svg/26432.svg" alt="background" /> */}

      <div className="text-4xl inset-0 bg-no-repeat bg-center font-bold mb-8">
        <p
          className=" text-green-500"
          style={{
            backgroundImage: "url('https://svgsilh.com/svg/26432.svg')",
            backgroundSize: "100px", // Adjust the size as needed
            // padding: '10px',
          }}
        >
          Hey there!, I'm
        </p>
        <br />
        <p className="text-[6rem] font-bold ">Jatin Sharma.</p>
      </div>

      <p className="text-4xl mb-8 font-bold">
        Software Engineer.
        <span className="text-zinc-400">
          A self-taught developer with an <br /> interest in Computer Science.
        </span>
      </p>
      <p className="text-2xl">
        <span className=" text-zinc-400">
          🚀 Currently specializing in FullStack Javascript.
        </span>
        <br />
        <span className="text-zinc-400">
          {" "}
          <span className="text-yellow-500">⚡</span>
          FullStack Engineer at{" "}
          <span className="text-green-500">CTS</span>
        </span>
      </p>

      {/* Social links*/}
      <ul className="flex gap-5"  >
        <li>
          <a href="https://github.com/jatinnsharma" target="_blank">
            <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 ">
            <FaGithub className="mr-2 text-green-500" /> Github</Button>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jatinnsharmapvt/" target="_blank">
            <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 ">
            <FaLinkedin className="mr-2 text-green-500" />  Linkedln</Button>
          </a>
        </li>
        <li>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jatinsharma2231@gmail.com" target="_blank" rel="noopener noreferrer">
        <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 ">
        <FaEnvelope className="mr-2 text-green-500" />  Email</Button>
          </a>
        </li>
      </ul>
    </section>
  );
};
