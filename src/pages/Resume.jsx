import "./Resume.css";

export default function Resume() {
  return (
      <div>
          <embed 
          src="src/assets/Paige-H-Carroll-Resume.pdf" 
          type="application/pdf" 
          style={{width: "100%", height: "100vh"}}
          >
          </embed>
      </div>
  );
}
