const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 rounded-2xl md:p-12 p-7 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I&apos;m Ashiq, a professional MERN stack developer and web
            designer dedicated to crafting visually captivating and highly
            functional websites. With expertise in MongoDB, Express.js,
            React.js, and Node.js, I specialize in transforming ideas into
            exceptional digital solutions that excel in both design and
            performance. Let’s bring your vision to life with precision and
            innovation.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/public/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
