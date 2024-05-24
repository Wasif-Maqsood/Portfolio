import { Html, useProgress } from "@react-three/drei";
import { Helmet } from "react-helmet";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <>
      <Helmet>
        <title>Loading - My Website</title>
        <meta name="description" content="Loading progress for My Website." />
        <meta name="keywords" content="wasif, Wasif Maqsood, web development, web developer, mobile app development, mobile app developer, React, React development, React developer, React Native, React Native development, React Native developer, JavaScript, Node.js, Node.js development, Node.js developer, Frontend development, Backend development, Full-stack development, Software development, UI/UX design, Cross-platform development, Progressive Web Apps (PWAs), Hybrid mobile apps, Responsive web design, API development, Web services, Web applications, Mobile applications, JavaScript frameworks, Frontend frameworks, Backend frameworks, Agile development, Software engineering, Code optimization, Performance tuning, Version control (e.g., Git), Continuous integration/Continuous deployment (CI/CD), DevOps practices, Cloud computing, AWS (Amazon Web Services), Azure, Google Cloud Platform (GCP), Database design, SQL, NoSQL, MongoDB, Firebase, Authentication and authorization, Security best practices, SEO best practices" />
      </Helmet>

      <Html
        as='div'
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span className='canvas-loader'></span>
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </Html>
    </>
  );
};

export default CanvasLoader;
