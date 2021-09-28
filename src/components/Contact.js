import React, {useState} from "react";
import * as emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onChangeHandle(e) {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  }

  function clearHandle() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  function handleSubmit(e) {
    // e.preventdefault();
    if (email.length > 2 && name.length > 2 && message.length > 2) {
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      emailjs.send(
        "service_biadotd",
        "template_40hnks7",
        templateParams,
        "user_gYO7NaeF6CkbUMl6oRFeZ"
      );

      clearHandle();
    } else {
      alert("Please make sure the form is filled about before submitting.");
    }
  }

  return (
    <div className='contact-container'>
      <h1>Contact Me</h1>
      <form>
        <div className='form-fields'>
          <div className='form-field'>
            <label>Name</label>
            <input
              name='name'
              id='name'
              value={name}
              onChange={(e) => {
                onChangeHandle(e);
              }}
            />
          </div>
          <div className='form-field'>
            <label>Email Address</label>
            <input
              name='email'
              id='email'
              value={email}
              onChange={(e) => {
                onChangeHandle(e);
              }}
            />
          </div>
          <div className='form-field'>
            <label>Subject</label>
            <input
              name='subject'
              id='subject'
              value={subject}
              onChange={(e) => {
                onChangeHandle(e);
              }}
            />
          </div>
          <div className='form-field'>
            <label>Message</label>
            <textarea
              name='message'
              id='message'
              value={message}
              onChange={(e) => {
                onChangeHandle(e);
              }}
            />
          </div>
        </div>
        <div className='form-buttons'>
          <button
            type='button'
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
          <button type='button' onClick={clearHandle}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
