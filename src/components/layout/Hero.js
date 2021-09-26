import React from "react";
import { useHistory } from "react-router";

export default function Hero() {
  const history = useHistory();

  return (
    <div className="hero__img">
      <div className="hero__section">
        <h1 className="hero__title">Holidaze</h1>
        <h2 className="hero__subheading">
          Your great adventure starts with us
        </h2>{" "}
        <button onClick={() => history.push("/hotels")}>Enquire now</button>
      </div>
    </div>
  );
}
