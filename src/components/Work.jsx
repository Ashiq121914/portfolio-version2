import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/resturent.png",
    title: "Restaurant app",
    tags: ["API", "Development"],
    projectLink: "https://resturent-template-ia.netlify.app/",
  },
  {
    imgSrc: "/images/portfolio.png",
    title: "Portfolio app",
    tags: ["API", "Development"],
    projectLink: "https://portfolio-template-ia.netlify.app/",
  },
  {
    imgSrc: "/images/blog.png",
    title: "Blog app",
    tags: ["API", "Development"],
    projectLink: "https://blog.darbesh.com/",
  },
  {
    imgSrc: "/images/resort.png",
    title: "Resort  app",
    tags: ["API", "Development"],
    projectLink: "https://royal-resort-site.netlify.app/",
  },
  {
    imgSrc: "/images/medical.png",
    title: "Medical app",
    tags: ["API", "Development"],
    projectLink: "https://medicale-template.vercel.app/",
  },
  {
    imgSrc: "/images/health.png",
    title: "Health app",
    tags: ["API", "Development"],
    projectLink: "https://gocorona-landing-page-figma-to-react.vercel.app/",
  },
  {
    imgSrc: "/images/services.png",
    title: "Services app",
    tags: ["API", "Development"],
    projectLink: "https://company-website-blue-nu.vercel.app/",
  },
  {
    imgSrc: "/images/link.png",
    title: "Link Share app",
    tags: ["API", "Development"],
    projectLink: "https://link-share-ia.netlify.app/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Carpentry Website",
    tags: ["API", "SPA"],
    projectLink: "https://carpenta-d40fa.web.app/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Education App",
    tags: ["Development", "API"],
    projectLink: "https://geeksedu-67d8c.web.app/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Bike  website",
    tags: ["API", "Development"],
    projectLink: "https://reride-262d2.web.app/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "Blog Website",
    tags: ["API", "Development"],
    projectLink: "https://blog-agency-project-tawny.vercel.app/",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "Personal portfolio",
    tags: ["API", "Development"],
    projectLink: "https://gazi-ashiq-reza.netlify.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
