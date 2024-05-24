import React from "react";
import { Helmet } from "react-helmet";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Technologies - Wasif Maqsood</title>
        <meta
          name="description"
          content="Explore the technologies used by Wasif Maqsood in web and mobile app development."
        />
        <meta name="keywords" content="wasif, Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
      </Helmet>
      
      <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center">
        {technologies.map((technology) => (
          <div key={technology.name} className="flex justify-center items-center w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
