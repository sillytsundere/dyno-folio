import { useState } from "react";
import validateEmail from "../utils/helper.js";

export default function Contact() {
  // Create state variables for the fields in the form
  // Also set their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Get the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Validate email as user types
    if (inputType === "email") {
      setErrorMessage(validateEmail(inputValue) ? "" : "Email is invalid");
    }

    // Based on the input type, we set the state of either name, email, and message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleUnfocus = (e) => {
    const { target } = e;
    const inputType = target.name;

    //check if the field is empty before setting error message
    if (!target.value.trim()) {
      setErrorMessage(`The field ${inputType} is required.`);
    } else {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    //first validate email and check if name is empty, if so set an error message to be displayed on the page
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      return;
    }
    if (!name) {
      setErrorMessage("Please provide a name.");
    }

    // If successful, we want to clear out the input after registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <h1 className="m-2 text-center" style={{color: "#D0F0C0", fontStyle: "italic", fontWeight: "bold", fontFamily: "chalkduster, fantasy"}}>Contact Me</h1>
      <div className="container">
        {/* Display the error message if there is one */}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <form className="form" onSubmit={handleFormSubmit}>
              <div>
                <label>Name:</label>
                <input
                  name="name"
                  value={name}
                  type="text"
                  id="name"
                  onChange={handleInputChange}
                  onBlur={handleUnfocus}
                  placeholder="Your Name"
                  required
                  className="form-control"
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  name="email"
                  value={email}
                  type="email"
                  id="email"
                  onChange={handleInputChange}
                  onBlur={handleUnfocus}
                  placeholder="Your Email"
                  required
                  className="form-control"
                />
              </div>
              <div>
                <label>Message:</label>
                <textarea
                  name="message"
                  value={message}
                  type="text"
                  id="message"
                  onChange={handleInputChange}
                  onBlur={handleUnfocus}
                  placeholder="Message"
                  required
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center m-2">
                <button
                  className="btn"
                  style={{backgroundColor: "#319D39"}}
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
