import React from "react";
import Tilt from "react-parallax-tilt"; // Use an alternative if react-tilt is causing issues
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={`${title} icon`}
          className='w-16 h-16 object-contain'
          loading="lazy" // Lazy loading for performance
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Web & Mobile App Development | Wasif Maqsood</title>
        <meta
          name="description"
          content="Discover Wasif Maqsood's expertise in web and mobile app development. We create responsive, efficient, and scalable applications using modern technologies."
        />
        <meta name="keywords" content="wasif,Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
        <meta property="og:title" content="About Us - Web & Mobile App Development | Wasif Maqsood" />
        <meta property="og:description" content="Discover Wasif Maqsood's expertise in web and mobile app development. We create responsive, efficient, and scalable applications using modern technologies." />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="https://www.wasifmaqsood.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section id="about" aria-labelledby="about-heading">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 id="about-heading" className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled web and mobile app developer with experience in various frameworks and technologies.
          I specialize in creating responsive, efficient, and scalable web and mobile applications.
          My expertise includes JavaScript, React, React Native, Node.js, and modern development tools.
          I'm a quick learner and collaborate closely with clients to bring their ideas to life.
          Let's build something amazing together!
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
