import React from "react";
import insta from "../../images/insta.png";
import facebook from "../../images/facebook.png";

function Footer() {
  return (
    <footer>
      <h3>&#169; 2021 Holidaze</h3>
      <div className="icons">
        <a href="https://www.instagram.com/">
          <img src={insta} alt="white Instagram logo that looks like a polaroid camera"></img>
        </a>
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="White Facebook logo that has a round shape with an F inside"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
