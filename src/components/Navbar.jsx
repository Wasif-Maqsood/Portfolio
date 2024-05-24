import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Wasif Maqsood - Mobile & Web App Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Wasif Maqsood, a mobile and web app developer. Explore his projects and experience."
        />
        <meta name="keywords" content="wasif, Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
      </Helmet>

      <nav
        className={`${
          scrolled ? "bg-primary" : "bg-transparent"
        } top-0 left-0 right-0 z-20`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-lg font-bold cursor-pointer">
              Wasif Maqsood
            </p>
          </Link>

          <ul className="hidden sm:flex gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-lg font-medium cursor-pointer ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-8 h-8 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </nav>

      {toggle && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-lg font-medium cursor-pointer ${
                    active === nav.title ? "text-primary" : "text-black"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
