import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  render() {
    return (
      <nav className="head-nav">
        <Link href="/">
          <button className="stefan">Stefan Tian</button>
        </Link>
        <Link href="/">
          <button className="home">Home</button>
        </Link>
        <Link href="/portfolio">
          <button className="portfolio">Portfolio</button>
        </Link>
        <Link href="#about">
          <button className="about">About</button>
        </Link>
        <Link href="/resume">
          <button className="resume">Résumé</button>
        </Link>
        <Link href="#footer">
          <button className="contact">Contact</button>
        </Link>
      </nav>
    );
  }
}

// const Navbar = () => (
//   <nav className="head-nav">
//     <Link href="/">
//       <button className="stefan">Stefan Tian</button>
//     </Link>
//     <Link href="/">
//       <button className="home">Home</button>
//     </Link>
//     <Link>
//       <button className="portfolio">Portfolio</button>
//     </Link>
//     <Link>
//       <button className="about">About</button>
//     </Link>
//     <Link href="/resume">
//       <button className="resume">Résumé</button>
//     </Link>
//     <Link>
//       <button className="contact">Contact</button>
//     </Link>
//   </nav>
// );

export default Navbar;
