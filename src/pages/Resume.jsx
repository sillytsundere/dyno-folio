export default function Resume() {
  return (
    <div>
      <h1 className="m-2">Resume</h1>
      <div className="d-flex justify-content-center">
        <div className="card col-10">
          <div class="card-body">
            <h5 class="card-title">Google Docs Resume</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Links to my Resume can be found below
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://docs.google.com/document/d/10jcyc6s6PcLadUw4XbPQO2zV3YXp79jzITxEisokdeU/edit?usp=sharing"
              class="card-link"
            >
              Google Docs Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
