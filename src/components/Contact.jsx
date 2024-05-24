import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFieldClick = () => {
    setDisabled(true);
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "wasifmaqsood@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
    setDisabled(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Wasif Maqsood</title>
        <meta name="description" content="Get in touch with Wasif Maqsood for web and mobile app development services. Fill out the contact form or visit our Upwork profile to connect." />
        <meta name="keywords" content="contact,wasif, Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
        <meta property="og:title" content="Contact Us - Wasif Maqsood" />
        <meta property="og:description" content="Get in touch with Wasif Maqsood for web and mobile app development services. Fill out the contact form or visit our Upwork profile to connect." />
        <meta property="og:url" content="https://www.wasifmaqsood.com/contact" />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                onClick={handleFieldClick}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                disabled={disabled}
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                onClick={handleFieldClick}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                disabled={disabled}
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                onClick={handleFieldClick}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                disabled={disabled}
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </motion.div>

        {showPopup && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-black p-8 rounded-lg text-center'>
              <button
                onClick={closePopup}
                className='absolute top-2 right-2 text-white text-2xl font-bold'
              >
                &times;
              </button>
              <h6 className='text-xl font-bold text-white mb-4'>Please visit my Upwork profile</h6>
              <a
                href="https://www.upwork.com/freelancers/~011171a2267e99c9ec"
                target="_blank"
                rel="noopener noreferrer"
                className='bg-blue-500 text-white py-2 px-4 rounded inline-block mb-4'
              >
                Contact on Upwork
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
