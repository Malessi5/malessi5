import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className='contact-container'>
      <h2>Contact Me</h2>
      <form>
        <div className='form-fields'>
          <div className='form-field'>
            <label>Name</label>
            <input name='name' />
          </div>
          <div className='form-field'>
            <label>Email Address</label>
            <input name='email' />
          </div>
          <div className='form-field'>
            <label>Subject</label>
            <input name='subject' />
          </div>
          <div className='form-field'>
            <label>Message</label>
            <textarea name='comments' />
          </div>
        </div>
        <div className='form-buttons'>
          <button type='submit'>Submit</button>
          <button type='button'>Clear</button>
        </div>
      </form>
    </div>
  );
}
