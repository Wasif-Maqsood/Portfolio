import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// CSS for no-scroll class
const noScrollStyle = `
  .no-scroll {
    overflow: hidden;
  }
`;

// Add the CSS to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = noScrollStyle;
document.head.appendChild(styleSheet);

// Popup Component
// import React, { useState } from "react";

const ProjectPopup = ({ project, onClose }) => {
  const [hideHeader, setHideHeader] = useState(false);

  const handleScroll = (e) => {
    const scrolled = e.target.scrollTop;
    // If user scrolled down, show the header
    if (scrolled > 0) {
      setHideHeader(true);
    } else {
      // If user scrolled to the top, hide the header
      setHideHeader(false);
    }
  };

  return (
    <div className="fixed inset-0 p-5 flex justify-center items-center z-50 mt-0">
      <div className="bg-tertiary  p-5 rounded-2xl w-full max-w-8xl h-[95vh] overflow-hidden relative border border-white-700">
        <button
              onClick={onClose}
              className="absolute right-5 text-white text-5xl z-10 hover:text-red-500"
            >
              &times;
            </button>
        {!hideHeader && (
          <div className="flex flex-col md:flex-row">
            <h3 className="text-white font-bold text-[44px]">{project.name}</h3>
            <button
              onClick={onClose}
              className="absolute right-5 text-white text-5xl z-10 hover:text-red-500"
            >
              &times;
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row mt-10">
          <div className="md:w-1/2 md:pr-5">
            <p className="mt-2 text-secondary text-[15px]">
              {project.description}
            </p>
            <p className="mt-2 text-secondary text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              bibendum felis vel justo vulputate, non efficitur nunc
              ullamcorper. Curabitur vitae elementum nulla. Suspendisse potenti.
              Sed id scelerisque nisi. Nulla facilisi. Nullam euismod felis at
              urna porttitor, non sodales massa convallis. Integer imperdiet
              metus et ex viverra pharetra. Cras dictum, lacus nec tincidunt
              ullamcorper, lacus nunc venenatis eros, nec lacinia leo metus non
              sapien. Proin aliquam consectetur arcu, et dictum eros consequat
              nec. Morbi quis urna nec erat fermentum blandit.
            </p>
            <p className="mt-2 text-secondary text-[15px]">
              Suspendisse potenti. Sed id scelerisque nisi. Nulla facilisi.
              Nullam euismod felis at urna porttitor, non sodales massa
              convallis. Integer imperdiet metus et ex viverra pharetra. Cras
              dictum, lacus nec tincidunt ullamcorper, lacus nunc venenatis
              eros, nec lacinia leo metus non sapien. Proin aliquam consectetur
              arcu, et dictum eros consequat nec. Morbi quis urna nec erat
              fermentum blandit. Quisque dictum magna ac mauris suscipit
              vehicula.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.source_code_link, "_blank");
              }}
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
            >
              View Website
            </button>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <p
                  key={`${project.name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>

          <div
            className="md:w-1/2 overflow-auto md:mt-0"
            style={{ marginTop: "10px", height: "600px", width: "100%" }}
            onScroll={handleScroll}
          >
            <div className="w-full h-full flex flex-col items-center">
              <img
                src={project.image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl mb-5"
              />
              <img
                src={project.image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  onClick,
  source_code_link,
}) => {
  return (
    <motion.div
      onClick={onClick}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="hover:cursor-pointer"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="mt-4"></div>
      </Tilt>
    </motion.div>
  );
};

// Works Component
const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProject]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described. It
          reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
