import React from "react";

const About = () => (
  <section className="about-page">
    <h1 className="about-page__title">I'm...</h1>
    <div className="about-page-grid">
      <div className="about-page-grid__card">
        <div className="about-page-grid__card__side about-page-grid__card__side--front about-page-grid__card--1">
          <div className="about-page-grid__card--1--pic">
            <p className="about-page-grid__card--1--title">
              A western TV series enthusiast
            </p>
          </div>
        </div>
        <div className="about-page-grid__card__side about-page-grid__card__side--back about-page-grid__card__side--back--1">
          I watch all kinds of TV series. When I was is middle school, I
          stumbled upon this series called charmed, it's about 3 witch sisters
          fighting demons. I know the plot sound cheesy but I love that show
          anymay. Recently I discovered this show called Killing Eve, it's so
          great that BBC America even renewed it for season 2 before the show's
          scheduled premiere
        </div>
      </div>
      <div className="about-page-grid__card">
        <div className="about-page-grid__card__side about-page-grid__card__side--front about-page-grid__card--2">
          <div className="about-page-grid__card--2--pic">
            <p className="about-page-grid__card--2--title">
              A self-taught developer
            </p>
          </div>
        </div>
        <div className="about-page-grid__card__side about-page-grid__card__side--back about-page-grid__card__side--back--2">
          Before college, I've always thought that programming is only for math
          geniuses, and since I suck at math, I'd probably suck at programming
          too. But in my sophomore year of college, I thought to myself, why not
          give it shot and see how it goes. At first, I subscribed to datacamp
          in an attempt to learn more about data science. It's a great resource,
          but It wasn't what I expected. I learned a lot about how to analyze
          data and build predictive models, but deep down what I really want is
          to build apps that people can actually see in app stores or online. My
          friend suggested that I should check out web development if I want to
          get my hands dirty on actually building stuff, so I looked around the
          internet and purchased The Complete Web Development Bootcamp taught by
          Colt Steele. After that course, I just can't stop digging deeper into
          the web field.
        </div>
      </div>
      <div className="about-page-grid__card">
        <div className="about-page-grid__card__side about-page-grid__card__side--front about-page-grid__card--3">
          <div className="about-page-grid__card--3--pic">
            <p className="about-page-grid__card--3--title">
              An introverted person
            </p>
          </div>
        </div>
        <div className="about-page-grid__card__side about-page-grid__card__side--back about-page-grid__card__side--back--3">
          People always confuse being introverted with being shy. Well, that's
          not the case, at least not for me. Being an introvert basically means
          that I gain energy from being alone, and when I'm alone, I mostly
          spend time watching online courses to improve myself, or watch TV
          series to relax a bit. Being an introvert also does not mean that I
          don't like to talk to people. I only dislike small talks since I
          consider it to be meaningless. I love to talk about cool technologies
          and new software development trend with other people who share the
          same passion. I love to learn from people with different backgrounds
          to gain a brand new perspective or people with more experience to
          solve problems more elegantly
        </div>
      </div>
    </div>
    <div className="hover-me">
      <h3 className="size3 hover-me__notice">
        hover over the cards to see more{"   "}
        <span className="hover-me__hearts"> &hearts;</span>
      </h3>
    </div>
  </section>
);

export default About;
