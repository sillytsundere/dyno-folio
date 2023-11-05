import { useState } from "react";

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

    // Based on the input type, we set the state of either name, email, and message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
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
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <div className="container">
        <div className="row">
          <div>
            <form className="form" onSubmit={handleFormSubmit}>
              <div>
                <label>Name:</label>
                <input
                  value={name}
                  type="text"
                  id="name"
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-control"
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  value={email}
                  type="email"
                  id="email"
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="form-control"
                />
              </div>
              <div>
                <label>Message:</label>
                <input
                  value={message}
                  type="text"
                  id="message"
                  onChange={handleInputChange}
                  placeholder="Message"
                  required
                  className="form-control"
                />
              </div>
              <div className="text-center m-2">
                <button
                  className="btn btn-primary"
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
