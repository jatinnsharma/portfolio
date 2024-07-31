import "./styles.css";

// components/AboutMe.js
export const AboutMe = () => {
  return (
    <section className="mb-[8rem]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-yellow-500">⚡</span>
            About Me
          </h2>
          <p className="text-lg mb-4">
            Hey! I'm Jatin Sharma, A passionate Software developer with 1 years
            of experiences in a wide range of disciplines, mainly concerning the
            web.
          </p>
          <p className="text-lg mb-4">
            Currently i work as Junior Software Engineer at CTS which is where
            my passion for project and development converge.
            <br />
            <br />
            My most recent passions are GoLang and devops learning. when i have
            time, i enjoy writing code about a different purpose. I love
            programming and i always try to improve myself. I love study new
            languages and take courses in programming(devops right now).
          </p>
          {/* <p className="text-lg mb-4">
          When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀
          </p> */}
          <p className="animated-text">Shine bright, always.</p>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <img
            src="images/profile.jpg"
            alt="Profile Picture"
            className="rounded-full w-96 h-96 mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};
