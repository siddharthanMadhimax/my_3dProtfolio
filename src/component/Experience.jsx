import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={education.date}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Education, 'education');
