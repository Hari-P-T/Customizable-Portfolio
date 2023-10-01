//import React from "react";
import { motion } from "framer-motion";

export default function WhyUs(){
    const top={
        textAlign: 'center'
    }
    const tot={
        color: "white",
        padding: "3rem"
    }
    const le={
        textAlign: 'left'
    }
    return(
        <motion.div style={tot}>
            <motion.div>
                <motion.h1 style={top}>Why Us Clinical Psychologists ?</motion.h1> <br /><br />
            </motion.div>
            <motion.div style={top}>
                <motion.div style={le}>
                Clinical psychologist are mental health professional who are trained to assess, diagnose, and treat a wide range of emotional, behavioral, and mental health problems. They use a variety of evidence-based therapies and techniques to help their clients address these problems and improve their overall well-being. Clinical psychologist typically works with individuals, couples, families, or groups, depending on their area of specialization. They may work in a variety of settings, including private practice, hospitals, community health centers, schools, and government agencies. Some of the tasks that clinical psychologist may perform include: <br /> <br />
                    <li>Conducting psychogical assessments to diagnose mental health conditions and develop treatment plans.</li>
                    <li>Providing psychotherapy to individuals, couples, families, or groups to help them overcome emotional or behavioral problems.</li>
                    <li>Developing and implementing treatment plans, which may include therapy, medication, or other interventions.</li>
                    <li>Research to better understand the causes and treatments of mental health problems.</li>
                    <li>Consulting with other healthcare professionals, such as psychiatrists or primary care physicians, to coordinate care for their clients.</li>
                    <li>Providing education and training to individuals, organizations, or communities to promote mental health and prevent mental illness.</li>
                    <li>Providing psychotherapy to individuals, couples, families, or groups to help them overcome emotional or behavioral problems.</li>
                <br />Clinical psychologist work with clients of all ages and backgrounds, and they may specialize in treating specific populations or mental health conditions. They play a vital role in helping individuals and communities to improve their mental health and well-being.
                </motion.div>
            </motion.div>
        </motion.div>
    )
}