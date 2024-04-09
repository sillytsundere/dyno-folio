import React, { useState, useEffect } from "react";
import validateEmail from "../utils/helper.js";
import axios from "axios";
import "./Contact.css";

//import for formspree email
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  // Input Change Handling
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    name: (val) => !!val,
    email: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: (val) => !!val,
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);
  /* End new validation ^^^^ */

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/mkndwrrp",
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(
          true,
          "Thanks! I look forward to hearing from you!"
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="shadows-into-light-regular contact-title">Contact Me</h1>
      <div className="row justify-content-center">
      <form
        className="row form quicksand-font col-12 col-sm-10 col-lg-9 justify-content-center"
        onSubmit={handleOnSubmit}
        noValidate
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          value={inputs.name}
          placeholder="Your Name"
          className={fieldErrors.name ? "error form-control" : "form-control"}
        />
        {renderFieldError("name")}
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleOnChange}
          value={inputs.email}
          placeholder="Your Email"
          className={fieldErrors.email ? "error form-control" : "form-control"}
        />
        {renderFieldError("email")}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          value={inputs.message}
          placeholder="Message"
          className={
            fieldErrors.message ? "error form-control" : "form-control"
          }
          rows="5"
        ></textarea>
        {renderFieldError("message")}
        <div className="text-center m-2">
          <button
            className="btn"
            style={{ backgroundColor: "#319D39" }}
            type="submit"
            disabled={serverState.submitting}
          >
            Submit
          </button>
        </div>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
      </div>
    </div>
  );
}

// export default function Contact() {
//   // Create state variables for the fields in the form
//   // Also set their initial values to an empty string
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     // Get the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Validate email as user types
//     if (inputType === "email") {
//       setErrorMessage(validateEmail(inputValue) ? "" : "Email is invalid");
//     }

//     // Based on the input type, we set the state of either name, email, and message
//     if (inputType === "name") {
//       setName(inputValue);
//     } else if (inputType === "email") {
//       setEmail(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleUnfocus = (e) => {
//     const { target } = e;
//     const inputType = target.name;

//     //check if the field is empty before setting error message
//     if (!target.value.trim()) {
//       setErrorMessage(`The field ${inputType} is required.`);
//     } else {
//       setErrorMessage("");
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     //first validate email and check if name is empty, if so set an error message to be displayed on the page
//     if (!validateEmail(email)) {
//       setErrorMessage("Email is invalid.");
//       return;
//     }
//     if (!name) {
//       setErrorMessage("Please provide a name.");
//     }

//     // If successful, we want to clear out the input after registration.
//     setName("");
//     setEmail("");
//     setMessage("");
//     setErrorMessage("");
//   };

//   return (
//     <div>
//       <h1
//         className="m-2 text-center"
//         style={{
//           color: "#D0F0C0",
//           fontStyle: "italic",
//           fontWeight: "bold",
//           fontFamily: "chalkduster, fantasy",
//         }}
//       >
//         Contact Me
//       </h1>
//       <div className="container">
//         {/* Display the error message if there is one */}
//         {errorMessage && (
//           <div className="alert alert-danger" role="alert">
//             {errorMessage}
//           </div>
//         )}
//         <div className="row d-flex justify-content-center">
//           <div className="col-10">
//             <form className="form" onSubmit={handleFormSubmit}>
//               <div>
//                 <label>Name:</label>
//                 <input
//                   name="name"
//                   value={name}
//                   type="text"
//                   id="name"
//                   onChange={handleInputChange}
//                   onBlur={handleUnfocus}
//                   placeholder="Your Name"
//                   required
//                   className="form-control"
//                 />
//               </div>
//               <div>
//                 <label>Email:</label>
//                 <input
//                   name="email"
//                   value={email}
//                   type="email"
//                   id="email"
//                   onChange={handleInputChange}
//                   onBlur={handleUnfocus}
//                   placeholder="Your Email"
//                   required
//                   className="form-control"
//                 />
//               </div>
//               <div>
//                 <label>Message:</label>
//                 <textarea
//                   name="message"
//                   value={message}
//                   type="text"
//                   id="message"
//                   onChange={handleInputChange}
//                   onBlur={handleUnfocus}
//                   placeholder="Message"
//                   required
//                   className="form-control"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <div className="text-center m-2">
//                 <button
//                   className="btn"
//                   style={{ backgroundColor: "#319D39" }}
//                   type="submit"
//                   onClick={handleFormSubmit}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <ContactForm />
//       </div>
//     </div>
//   );
// }
