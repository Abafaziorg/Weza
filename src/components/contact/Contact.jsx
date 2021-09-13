import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/wezabutton.jpeg" alt="" />
      </div>
      <div className="right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Phone Number" />
          <input type ="text" placeholder ="Email Adress"/>
          <input type ="password" placeholder ="Password"/>
          <input type ="password" placeholder ="Confirm Password"/>

          <textarea placeholder="Need Help?"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
