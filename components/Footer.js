import React from "react";

const Footer = () => (
  <section className="footer">
    <h1 className="size1 footer__title">Contact</h1>
    <div className="footer__info">
      <svg className="footer__info--icon">
        <use xlinkHref="/static/symbols.svg#icon-envelope" />
      </svg>
      <p className="footer__info--word">stefanwork@gmail.com</p>
    </div>
    <div className="footer__info">
      <svg className="footer__info--icon">
        <use xlinkHref="/static/symbols.svg#icon-mobile" />
      </svg>
      <p className="footer__info--word">+886 916 097 962</p>
    </div>
    <p className="footer--copyright">&copy;Copyright 2018 by Stefan Tian</p>
  </section>
);

export default Footer;
