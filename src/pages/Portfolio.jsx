import bookquesters from '../assets/bookquesters.png';
import cosfolio from '../assets/cosfolio.png';
import hangman from '../assets/hangman.png';
import techTalk from '../assets/comp-sci-blog.png';

function Project({ image, title, description, githubLink, deployedLink }) {
    return (
        <div className="container">
        <div class="card">
          <img src={image} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              {description}
            </p>
          </div>
          <div class="card-body">
            <a href={githubLink}class="card-link">
              GitHub Repository
            </a>
            <a href={deployedLink} class="card-link">
              Deployed Site
            </a>
          </div>
        </div>
      </div>
    )
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
    {
      image: hangman,
      title: "Eva - Hangman",
      description:
        "A hangman game made using vanilla JavaScript and HTML styled with BootstrapCSS. Themed after a 90's anime.",
      githubLink: "https://github.com/sillytsundere/hangman-game",
      deployedLink: "N/A",
    },
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
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <Project project={project} image={project.image} title={project.title} description={project.description} githubLink={project.githubLink} deployedLink={project.deployedLink}/>
      ))}
    </div>
  );
}
