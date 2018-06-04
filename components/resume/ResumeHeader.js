import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const ResumeHeader = () => (
  <header className="resume__header">
    <Navbar />
    <div className="resume__container">
      <div className="head-circle">
        <img className="headshot" src="/static/headshot.jpg" alt="head shot" />
      </div>
      <h2 className="size2 intro">Hi, I'm Stefan Tian, a web developer !</h2>
    </div>
  </header>
);

export default ResumeHeader;
