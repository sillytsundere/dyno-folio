// function Project({ title, description, githubLink, deployedLink }) {
//     return (
//         <div className="container">
//         <div class="card">
//           <img class="card-img-top" alt="" />
//           <div class="card-body">
//             <h5 class="card-title">{title}</h5>
//             <p class="card-text">
//               {description}
//             </p>
//           </div>
//           <div class="card-body">
//             <a href={`${githubLink}`}class="card-link">
//               GitHub Repository
//             </a>
//             <a href={`${deployedLink}`} class="card-link">
//               Deployed Site
//             </a>
//           </div>
//         </div>
//       </div>
//     )
// }

export default function Portfolio() {
  const projects = [
    {
      title: "bookquesters",
      description:
        "This web application allows users to search for book titles sourced from the Google Books API and save them to a list that is saved in local storage.",
      githubLink: "https://github.com/sillytsundere/bookquesters",
      deployedLink: "https://sillytsundere.github.io/bookquesters/",
    },
    {
      title: "eva - hangman",
      description:
        "A hangman game made using vanilla JavaScript and HTML styled with BootstrapCSS. Themed after a 90's anime.",
      githubLink: "https://github.com/sillytsundere/hangman-game",
      deployedLink: "N/A",
    },
    {
      title: "cosfolio",
      description:
        "A forum where users can save and share cosplay creations as well as view other users' creations.",
      githubLink: "https://github.com/sillytsundere/cosfolio",
      deployedLink: "https://cosfolio-cbc30e9a9851.herokuapp.com/",
    },
    {
      title: "comp - sci - blog",
      description:
        "This web application is a CMS-style blog that allows users to create an account, log in, share posts and view and comment on other user's posts.",
      githubLink: "https://github.com/sillytsundere/comp-sci-blog",
      deployedLink: "https://comp-tech-talk-1c5888367981.herokuapp.com/",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      {/* {projects.map((project) => {
        <div className="container">
          <section class="card">
            <img class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">{project.description}</p>
            </div>
            <div class="card-body">
              <a href={`${project.githubLink}`} class="card-link">
                GitHub Repository
              </a>
              <a href={`${project.deployedLink}`} class="card-link">
                Deployed Site
              </a>
            </div>
          </section>
        </div>
      })} */}
      <div className="container">
          <section class="card">
            <img class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{projects[0].title}</h5>
              <p class="card-text">{projects[0].description}</p>
            </div>
            <div class="card-body">
              <a href={`${projects[0].githubLink}`} class="card-link">
                GitHub Repository
              </a>
              <a href={`${projects[0].deployedLink}`} class="card-link">
                Deployed Site
              </a>
            </div>
          </section>
        </div>
    </div>
  );
}
