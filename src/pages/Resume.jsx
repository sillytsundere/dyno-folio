import "./Resume.css";
import paigeHCarrollResume from "../assets/Paige-H-Carroll-Resume.pdf"

export default function Resume() {
  return (
      <div>
          <embed 
          src={paigeHCarrollResume} 
          type="application/pdf" 
          style={{width: "100%", height: "100vh"}}
          >
          </embed>
      </div>
  );
}
