import bookquesters from "../assets/bookquesters.png";
import cosfolio from "../assets/cosfolio.png";
// import hangman from "../assets/hangman.png";
import techTalk from "../assets/comp-sci-blog.png";
import ajaxFolio from "../assets/ajax-folio.png";
import jsQuiz from "../assets/js-quiz.png";
import weather from "../assets/weather-api.png";

function Project({ image, title, description, githubLink, deployedLink }) {
  return (
    <div className="col-4">
      <div className="card m-2">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <a href={githubLink} className="card-link">
            GitHub Repository
          </a>
          <a href={deployedLink} className="card-link">
            Deployed Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      image: bookquesters,
      title: "Bookquesters",
      description:
        "This web application allows users to search for book titles sourced from the Google Books API and save them to a list that is saved in local storage.",
      githubLink: "https://github.com/sillytsundere/bookquesters",
      deployedLink: "https://sillytsundere.github.io/bookquesters/",
    },
    // {
    //   image: hangman,
    //   title: "Eva - Hangman",
    //   description:
    //     "A hangman game made using vanilla JavaScript and HTML styled with BootstrapCSS. Themed after a 90's anime.",
    //   githubLink: "https://github.com/sillytsundere/hangman-game",
    //   deployedLink: "N/A",
    // },
    {
      image: cosfolio,
      title: "Cosfolio",
      description:
        "A forum where users can save and share cosplay creations as well as view other users' creations.",
      githubLink: "https://github.com/sillytsundere/cosfolio",
      deployedLink: "https://cosfolio-cbc30e9a9851.herokuapp.com/",
    },
    {
      image: techTalk,
      title: "Tech Talk",
      description:
        "This web application is a CMS-style blog that allows users to create an account, log in, share posts and view and comment on other user's posts.",
      githubLink: "https://github.com/sillytsundere/comp-sci-blog",
      deployedLink: "https://comp-tech-talk-1c5888367981.herokuapp.com/",
    },
    {
      image: ajaxFolio,
      title: "Personal Portfolio",
      description:
        "This is my first developer portfolio, made during my Full Stack Coding Bootcamp. It is made with only HTML and CSS.",
      githubLink: "https://github.com/sillytsundere/personal-portfolio",
      deployedLink: "https://sillytsundere.github.io/personal-portfolio/",
    },
    {
      image: jsQuiz,
      title: "JavaScript Quiz",
      description:
        "This web application is a short, timed quiz to test vanilla JavaScript knowledge. Built with vanilla JavaScript and HTML.",
      githubLink: "https://github.com/sillytsundere/javascript-quiz",
      deployedLink: "https://sillytsundere.github.io/javascript-quiz/",
    },
    {
      image: weather,
      title: "Weather API",
      description:
        "This weather application displays the current forcast for a desired city as well as the future forcast over a 5 day period.",
      githubLink: "https://github.com/sillytsundere/my-weather-spot",
      deployedLink: "https://sillytsundere.github.io/my-weather-spot/",
    },
  ];

  return (
    <div>
      <h1 className="m-2">Portfolio</h1>
      <div className="d-flex flex-wrap">
      {projects.map((project) => (
        <Project
          key={project.title}
          project={project}
          image={project.image}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      ))}
      </div>
    </div>
  );
}
