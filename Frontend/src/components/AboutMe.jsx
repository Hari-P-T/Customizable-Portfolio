import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";
import RunningNumberCounter from "./Counters";
import RunningNumberCounter2 from "./Counter2";
import RunningNumberCounter3 from "./Counter3";
import RunningNumberCounter4 from "./Counter4";
import persons from "../images/person.jpg";
import mics from "../images/mic.png";
import clc from "../images/timer.png";
import awd from "../images/reward.jpg";
import { useRef } from "react";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const myStyle = {
  color: "white",
  //backgroundColor: 'pink'
};
const myStyle2 = {
  display: "block",
};
const iconos = {
  width: "60px",
  height: "55px",
};
const flexit = {
  display: "flex",
};

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const myRef = useRef();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            style={myStyle2}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
            <motion.div style={myStyle}>
              <motion.p>
                {" "}
                <b>Name: </b>Dr.Babu Rangarajan
              </motion.p>
              <motion.p>
                {" "}
                <b>Age: </b>40
              </motion.p>
              <motion.p>
                {" "}
                <b>City: </b>AP Hospitals,Salem,Tamilnadu,India
              </motion.p>{" "}
              <br />
              <motion.div style={flexit}>
                <img src={persons} alt="none" style={iconos} />
                <motion.div>
                  <motion.h1>
                    {" "}
                    <RunningNumberCounter />{" "}
                  </motion.h1>
                  <motion.p>
                    <motion.b>Happy Clients </motion.b>Stressless Life
                  </motion.p>
                </motion.div>
              </motion.div>{" "}
              <br />
              <motion.div style={flexit}>
                <img src={mics} alt="none" style={iconos} />
                <motion.div>
                  <motion.h1>
                    {" "}
                    <RunningNumberCounter2 />{" "}
                  </motion.h1>
                  <motion.p>
                    <motion.b>Speeches </motion.b>To Empower Youths
                  </motion.p>
                </motion.div>
              </motion.div>{" "}
              <br />
              <motion.div style={flexit}>
                <img src={clc} alt="none" style={iconos} />
                <motion.div>
                  <motion.h1>
                    {" "}
                    <RunningNumberCounter3 />{" "}
                  </motion.h1>
                  <motion.p>
                    <motion.b>Years Of Experience </motion.b>To Study The Mind
                  </motion.p>
                </motion.div>
              </motion.div>{" "}
              <br />
              <motion.div style={flexit}>
                <img src={awd} alt="none" style={iconos} />
                <motion.div>
                  <motion.h1>
                    {" "}
                    <RunningNumberCounter4 />{" "}
                  </motion.h1>
                  <motion.p>
                    <motion.b>Awards </motion.b>For My Work
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                Nice to meet you! 👋🏻
              </motion.h4>
              <motion.h5 variants={paragraphVariants}>
                I'm a Clinical Psychologist.
              </motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Babu Rangarajan is a licensed clinical psychologist from Tamil
                  Nadu, India. He has more than 15 years of experience in the
                  field of mental health and has worked with a wide range of
                  clients, including individuals, couples, families, and
                  organizations.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Babu Rangarajan is also an international trainer and has
                  conducted workshops and training programs on various topics
                  related to mental health and personal development in India and
                  other countries like Dubai, Kuwait, Bahrain, Bangladesh,
                  Malaysia, Sri Lanka, Australia and USA. He has worked with
                  various Educational Institutions and leading corporates to
                  provide mental health training and support to individuals and
                  communities to empower Mental Health.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  In addition to his work as a psychologist and trainer, Babu
                  Rangarajan is also a TEDx speaker and has given talks on
                  various mental health topics, such as stress management,
                  resilience, and emotional well-being. Babu Rangarajan has also
                  achieved several notable accomplishments in his career. He
                  holds a world record for conducting the largest online stress
                  management session. He has trained over 400,000 people. He has
                  also been recognized with numerous awards for his
                  contributions to the field of mental health, including Best
                  Performance Award from InSPA – Indian School Psychology
                  Association. Indian Icon Award from Oasis World Record and the
                  Best Motivational Speaker from the Tamil Nadu Government.
                </motion.p>{" "}
                <br />
                <motion.p variants={paragraphVariants}>
                  Overall, Babu Rangarajan is a highly respected and
                  accomplished clinical psychologist who is dedicated to
                  improving the mental health and well-being of individuals and
                  communities through his work as a therapist, trainer, and
                  speaker.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/WhyUs">
                <Button name="Why Us ?" />
              </NavLink>
              <NavLink to="/gallery">
                <Button name="View Gallery" />
              </NavLink>
            </motion.div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />.<br />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
