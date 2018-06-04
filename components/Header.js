import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => (
  <header className="head-header">
    <Navbar />
    <div className="center">
      <h1 className="center__title">I'm a web developer</h1>
      <Link>
        <button className="center__portfolio">Portfolio</button>
      </Link>
      <Link href="/resume">
        <button className="center__resume">Résumé</button>
      </Link>
    </div>
  </header>
);

export default Header;
