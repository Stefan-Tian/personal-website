import React from "react";

const ResumeProject = () => (
  <div className="resume__project">
    <h2 className="size2 projects">Projects</h2>
    <h4 className="size4 projects__title">
      Donezo<span className="brief-intro"> - a slightly advanced todo app</span>
    </h4>
    <p className="projects__description">
      Developped with{" "}
      <span className="expertise">
        Node.js + Express.js + React.js + Redux + MondoDB + SCSS
      </span>
    </p>
    <p className="projects__description">Support Google and Facebook oauth</p>
    <p className="projects__description">
      Have basic CRUD function and it shows completion rate
    </p>
    <p className="projects__description">Support keyword searching</p>
    <h4 className="size4 projects__title">
      Emaily<span className="brief-intro"> - a feedback gathering app</span>
    </h4>
    <p className="projects__description">
      Gained more in depth knowledge of{" "}
      <span className="expertise">Node.js and React.js</span>
    </p>
    <p className="projects__description">
      Used SendGrid to send out massive emails and record user responses
    </p>
    <p className="projects__description">
      Used Stripe to facilitate credit card transaction
    </p>
    <h4 className="size4 projects__title">
      CrowdCoin{" "}
      <span className="brief-intro"> - a safer alternative to Kickstarter</span>
    </h4>
    <p className="projects__description">
      Used <span className="expertise">Solidity</span> to write smart contracts
      so that every expense needs to be approved by at least 50% of the project
      investors
    </p>
    <p className="projects__description">
      Used <span className="expertise">Next.js</span> to build the front-end
      interface for users to communicate with the smart contracts I built more
      easily
    </p>
  </div>
);

export default ResumeProject;
