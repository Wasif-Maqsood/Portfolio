import React from "react";
import { Helmet } from "react-helmet";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            loading='lazy'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Work Experience - Wasif Maqsood</title>
        <meta
          name="description"
          content="Explore the professional journey and work experience of Wasif Maqsood. Learn about the companies, roles, and key accomplishments throughout the career."
        />
        <meta name="keywords" content="wasif, work experience, professional journey, career, Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
        <meta property="og:title" content="Work Experience - Wasif Maqsood" />
        <meta property="og:description" content="Explore the professional journey and work experience of Wasif Maqsood. Learn about the companies, roles, and key accomplishments throughout the career." />
        <meta property="og:url" content="https://www.wasifmaqsood.com/experience" />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
