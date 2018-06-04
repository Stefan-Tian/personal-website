import React from "react";

const ResumeEducation = () => (
  <div className="resume__education">
    <h2 className="size2 education">Education & Experiences</h2>
    <h4 className="size4 education__school">
      NCCU - psychology major, currently in my junior year
    </h4>
    <h4 className="size4 consulting">NCCU - consulting group</h4>
    <p className="consulting__description">
      Participated in lectures taught by professional consultants every week to
      strengthen analytical skills
    </p>
    <p className="consulting__description">
      Learned how to work as a team, and improve problem solving skills
    </p>
    <h4 className="size4 quantlab">
      NCCU - Psychometries & Quantitative Methods Lab
    </h4>
    <p className="quantlab__description">
      Work as a research assistant to help automate repetitive tasks such as
      using Google apps script to build out complex forms with{" "}
      <span className="expertise">Javascript</span>
    </p>
    <p className="quantlab__description">
      Run statistics and analyze data from experiments using{" "}
      <span className="expertise">R</span>
    </p>
    <p className="quantlab__description">
      Created a brand new website for the lab with{" "}
      <span className="expertise">Next.js</span>
    </p>
  </div>
);

export default ResumeEducation;
