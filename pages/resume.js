import React from "react";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeEducation from "../components/resume/ResumeEducation";
import ResumeProject from "../components/resume/ResumeProject";
import ResumeLanguage from "../components/resume/ResumeLanguage";
import ResumeCoursework from "../components/resume/ResumeCoursework";
import "../styles/styles.scss";

const resume = () => (
  <div className="resume-box">
    <ResumeHeader />
    <ResumeEducation />
    <ResumeProject />
    <ResumeLanguage />
    <ResumeCoursework />
  </div>
);

export default resume;
