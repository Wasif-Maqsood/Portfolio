import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`Feedback by ${name}`}
          className='w-10 h-10 rounded-full object-cover'
          loading='lazy'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials - Wasif Maqsood</title>
        <meta
          name="description"
          content="Read what others have to say about Wasif Maqsood's work. Testimonials from clients and colleagues about his expertise in web and mobile app development."
        />
        <meta name="keywords" content="wasif, testimonials, feedback, client reviews, Wasif Maqsood, Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
        <meta property="og:title" content="Testimonials - Wasif Maqsood" />
        <meta property="og:description" content="Read what others have to say about Wasif Maqsood's work. Testimonials from clients and colleagues about his expertise in web and mobile app development." />
        <meta property="og:url" content="https://www.wasifmaqsood.com/testimonials" />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
