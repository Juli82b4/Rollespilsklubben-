/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/kontakt.css"; // Import the CSS file for styling

const Kontakt = () => {
  return (
    <div className="kontakt-whole-container">
      <div className="kontakt-banner">
        <h1>KONTAKT</h1>
      </div>
      <div className="contact-container">
        <br />

        <div className="contact-info">
          <br />
          <h2>Kontaktinformation</h2>
          <br />
          <p>
            <b>
              Hvis du har spørgsmål eller har brug for yderligere information,
              er du altid velkommen til at kontakte os. Vi ser frem til at høre
              fra dig!
            </b>
          </p>
          <p>
            <strong>Adresse:</strong> Rollespilsklubben Excalibur, Kirkebækvej
            123, 8800 Viborg
          </p>
          <p>
            <strong>Telefon:</strong> +45 12 34 56 78
          </p>
          <p>
            <strong>Email:</strong> info@excalibur.dk
          </p>
        </div>

        <div className="contact-form">
          <br />
          <h2>Send os en besked</h2>
          <br />
          <form>
            <label>Navn:</label>
            <input type="text" id="name" name="name" required />

            <label>Email:</label>
            <input type="email" id="email" name="email" required />

            <label>Besked:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
