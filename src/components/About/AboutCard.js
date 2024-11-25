import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ismail AL Riyami </span>
            from <span className="purple"> Muscat, Oman.</span>
            <br />
            I am currently employed as a Software Architect at{" "} <span className="purple">LAAS-CNRS</span> in Toulouse, France.
            <br />
            Alogside, I am a Msc student at the <span className="purple">ENSEEIHT</span> majoring in Computer Science.
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">AlrIsmail</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
