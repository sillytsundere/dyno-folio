import "./Resume.css";

export default function Resume() {
  return (
    <div className="one">
      <h1 className="resume-title shadows-into-light-regular">Resume</h1>
      <div>
        <div className="card text-center">
          <div className="card-body quicksand-font">
            <h5 className="card-title">
              <a
                href="https://docs.google.com/document/d/1PtlxedYoIhz1y00ahsI6c8QKtW9FpetFWf6TEZGKLHo/edit?usp=sharing"
                className="card-link link"
                target="_blank"
              >
                Technical Resume
              </a>
            </h5>
            <p className="card-text">
              Skills Include: HTML, CSS, JavaScript, React, Node, Express, Git,
              MySQL, MongoDB, Apollo, GraphQL and more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
