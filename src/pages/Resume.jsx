import "./Resume.css";

export default function Resume() {

  return (
    <div>
      <h1 className="m-2" style={{color: "#D0F0C0"}}>Resume</h1>
      <div className="d-flex justify-content-center">
        <div className="card col-9 text-center">
          <div className="card-body">
            <h5 className="card-title">My Technical Resume</h5>
            <p className="card-text">
              Skills Include: HTML, CSS, JavaScript, React, Node, Express, Git, MySQL, MongoDB, Apollo, GraphQL and more!
            </p>
            <a
              href="https://docs.google.com/document/d/10jcyc6s6PcLadUw4XbPQO2zV3YXp79jzITxEisokdeU/edit?usp=sharing"
              className="card-link link"
            >
              Google Docs Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
