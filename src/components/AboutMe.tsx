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
            Hey! I'm Jatin Sharma, I've been close to a computer since an early
            age, and been passionate about it ever since.
          </p>
          <p className="text-lg mb-4">
            I really liked to build stuff using no-code tools back in 2010, and
            from that, I explored how to code myself, fast-forward to today, I
            do programming in various languages and technologies, and had the
            privilege to worked in a Recruitment Company and a SaaS Company I'm
            interested in building something awesome with code and automate
            tasks with code, currently focused on Web & Mobile Development, Open
            Source and Competitive Programming
          </p>
          <p className="text-lg mb-4">
          When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀
          </p>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <img
            src="https://images.playground.com/ec0811e2861641a497ee7e6f8e557c1c.jpeg"
            alt="Profile Picture"
            className="rounded-full w-96 h-96 mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};
