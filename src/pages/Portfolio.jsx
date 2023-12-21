import bookquesters from "../assets/bookquesters.png";
import cosfolio from "../assets/cosfolio.png";
// import hangman from "../assets/hangman.png";
import techTalk from "../assets/comp-sci-blog.png";
import ajaxFolio from "../assets/ajax-folio.png";
import jsQuiz from "../assets/js-quiz.png";
import weather from "../assets/weather-api.png";
import collectConnect from "../assets/collect-connect.jpeg";

function Project({ image, alt, title, description, tech, githubLink, deployedLink }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card m-2 h-100 d-flex flex-column">
        <a href={deployedLink}>
          <img src={image} 
            className="card-img-top" 
            style={{
              height: "300px", 
              width: "100%",
              overflow: "hidden",
              objectFit: "cover", 
              objectPosition: "top left"}} alt={alt} />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{tech}</p>
          <a 
            href={githubLink} 
            className="btn btn-primary"
            style={{backgroundColor: "#319D39", borderColor: "#319D39", transition: "background-color 0.3s, border-color 0.3s"}} 
            onMouseOver={(e) => {
            e.target.style.backgroundColor = "#287e2e"; // Change to the desired darker color
            e.target.style.borderColor = "#287e2e";
            }}
            onMouseOut={(e) => {
            e.target.style.backgroundColor = "#319D39"; // Restore the original color
            e.target.style.borderColor = "#319D39";
            }}
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      image: collectConnect,
      alt: "homepage of site when logged in displaying feed of collections",
      title: "CollectConnect",
      description: "Collector’s connect is a website where collectors can share their various collections and view collections shared by other users.",
      tech: "React, JavaScript, Bootstrap, NodeJS, ExpressJS, MongoDB, Apollo with GraphQL, AWS S3, Heroku",
      githubLink: "https://github.com/DanielTBonn/collectors-connect",
      deployedLink: "https://boiling-anchorage-11027-d19406c04dfb.herokuapp.com/",
    },
    // {
    //   image: hangman,
    //   alt: "",
    //   title: "Eva - Hangman",
    //   description:
    //     "A hangman game made using vanilla JavaScript and HTML styled with BootstrapCSS. Themed after a 90's anime.",
    //   tech: "",
    //   githubLink: "https://github.com/sillytsundere/hangman-game",
    //   deployedLink: "N/A",
    // },
    {
      image: cosfolio,
      alt: "Logged in view of homepage with feed of user's cosplay creations",
      title: "Cosfolio",
      description:
        "A forum where users can save and share cosplay creations as well as view other users' creations.",
      tech: "HandlebarsJS, Bootstrap, CSS, JavaScript, NodeJS, ExpressJS, MySQL, Sequelize, Heroku",
      githubLink: "https://github.com/sillytsundere/cosfolio",
      deployedLink: "https://cosfolio-cbc30e9a9851.herokuapp.com/",
    },
    {
      image: techTalk,
      alt: "View of homepage with feed of blog posts",
      title: "Tech Talk",
      description:
        "This web application is a CMS-style blog that allows users to create an account, log in, share posts and view and comment on other user's posts.",
      tech: "HandlebarsJS, Bootstrap, CSS, JavaScript, NodeJS, ExpressJS, MySQL, Sequelize, Heroku",
      githubLink: "https://github.com/sillytsundere/comp-sci-blog",
      deployedLink: "https://comp-tech-talk-1c5888367981.herokuapp.com/",
    },
    {
      image: bookquesters,
      alt: "website homepage with intro and buttons to explore site",
      title: "Bookquesters",
      description: "Bookquesters is an application where users can search for book titles and save searched titles to a personalized list.",
      tech: "HTML, CSS, JavaScript, Bootstrap, TailwindCSS, Google Books API, Open Library API",
      githubLink: "https://github.com/sillytsundere/bookquesters",
      deployedLink: "https://sillytsundere.github.io/bookquesters/",
    },
    {
      image: jsQuiz,
      alt: "Homepage displaying description of quiz, and buttons to start quiz and view high scores",
      title: "JavaScript Quiz",
      description:
      "This web application is a short, timed quiz to test vanilla JavaScript knowledge.",
      tech: "HTML, Bootstrap, JavaScript",
      githubLink: "https://github.com/sillytsundere/javascript-quiz",
      deployedLink: "https://sillytsundere.github.io/javascript-quiz/",
    },
    {
      image: weather,
      alt: "",
      title: "Weather API",
      description:
      "This weather application displays the current forcast for a desired city as well as the future forcast over a 5 day period.",
      tech: "HTML, Bootstrap, JavaScript, jQuery, Open Weather API",
      githubLink: "https://github.com/sillytsundere/my-weather-spot",
      deployedLink: "https://sillytsundere.github.io/my-weather-spot/",
    },
    {
      image: ajaxFolio,
      alt: "Screenshot of porfolio with short description and tiles for projects",
      title: "Personal Portfolio",
      description:
        "This is my first developer portfolio, made during my Full Stack Coding Bootcamp.",
      tech: "HTML, CSS",
      githubLink: "https://github.com/sillytsundere/personal-portfolio",
      deployedLink: "https://sillytsundere.github.io/personal-portfolio/",
    },
  ];

  return (
    <div>
      <h1 className="m-2" style={{ color: "#D0F0C0", fontFamily: "chalkduster, fantasy", fontStyle: "italic", fontWeight: "bold", }}>Portfolio</h1>
      <div className="d-flex flex-wrap">
      {projects.map((project) => (
        <Project
          key={project.title}
          project={project}
          image={project.image}
          alt={project.alt}
          title={project.title}
          description={project.description}
          tech={project.tech}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      ))}
      </div>
    </div>
  );
}
