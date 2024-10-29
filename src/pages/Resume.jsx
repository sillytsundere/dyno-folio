import "./Resume.css";
import paigeHCarrollResume from "../assets/Paige-H-Carroll-Resume.pdf"
import novTwentyFourResume from "../assets/Paige_Carroll_Resume.pdf"

export default function Resume() {
  return (
      <div>
          <embed 
          src={novTwentyFourResume} 
          type="application/pdf" 
          style={{width: "100%", height: "100vh"}}
          >
          </embed>
      </div>
  );
}
