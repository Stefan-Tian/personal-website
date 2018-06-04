import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  scrollToMiddle = () =>
    window.scrollTo({
      top: 720,
      behavior: "smooth"
    });

  scrollToBottom = () =>
    window.scrollTo({
      top: 1500,
      behavior: "smooth"
    });

  render() {
    return (
      <nav className="head-nav">
        <Link href="/">
          <button className="stefan">Stefan Tian</button>
        </Link>
        <Link href="/">
          <button className="home">Home</button>
        </Link>
        <Link>
          <button className="portfolio">Portfolio</button>
        </Link>
        {/* <Link> */}
        <button className="about" onClick={() => this.scrollToMiddle()}>
          About
        </button>
        {/* </Link> */}
        <Link href="/resume">
          <button className="resume">Résumé</button>
        </Link>
        <Link>
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
