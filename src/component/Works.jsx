import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

// Define the ProjectCard component
const ProjectCard = ({ name, description, index }) => {
  return (
    <Tilt options={{ max: 15, scale: 1, speed: 500 }}>
      <motion.div
        variants={fadeIn('', '', 0.6 * index, 1)}
        className="w-full p-5 bg-[#1d1836] rounded-lg shadow-md "
      >
        <h3 className="text-white text-2xl font-bold">{name}</h3>
        <p className="text-secondary text-sm mt-2">{description}</p>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl"
        />
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
