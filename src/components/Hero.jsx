import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const rotateXRange = [-15, 15];
  const rotateYRange = [-15, 15];

  const rotateXTransform = useTransform(rotateY, rotateYRange, [15, -15]);
  const rotateYTransform = useTransform(rotateX, rotateXRange, [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
      setMouseY(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    rotateX.set(mouseX * 30); // Adjust the factor for desired sensitivity
    rotateY.set(mouseY * 30); // Adjust the factor for desired sensitivity
  }, [mouseX, mouseY, rotateX, rotateY]);

  return (
    <>
      <Helmet>
        <title>Wasif Maqsood - Web & Mobile App Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio website of Wasif Maqsood. Explore his expertise in web and mobile app development."
        />
        <meta name="keywords" content="wasif, Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
        <meta property="og:title" content="Wasif Maqsood - Web & Mobile App Developer" />
        <meta property="og:description" content="Welcome to the portfolio website of Wasif Maqsood. Explore his expertise in web and mobile app development." />
        <meta property="og:url" content="https://www.wasifmaqsood.com/" />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <header className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Wasif Maqsood</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop websites and mobile applications <br className='sm:block hidden' />
            </p>
          </div>
        </div>

        <motion.div
          style={{
            rotateX: rotateXTransform,
            rotateY: rotateYTransform,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <ComputersCanvas />
        </motion.div>

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Hero;
