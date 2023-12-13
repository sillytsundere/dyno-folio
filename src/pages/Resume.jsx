import "./Resume.css";

export default function Resume() {
  return (
    <div className="one">
      <h1 className="resume-title">
        Resume
      </h1>
      <div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title"><a href="https://docs.google.com/document/d/10jcyc6s6PcLadUw4XbPQO2zV3YXp79jzITxEisokdeU/edit?usp=sharing" className="card-link link">Technical Resume</a></h5>
            <p className="card-text">
              Skills Include: HTML, CSS, JavaScript, React, Node, Express, Git, MySQL, MongoDB, Apollo, GraphQL and more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
