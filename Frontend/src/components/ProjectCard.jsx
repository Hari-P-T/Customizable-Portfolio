import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "./Image";

/**
 * Represents a project card component.
 *
 * @component
 * @param {string} title - The title of the project.
 * @param {string} image - The image source for the project thumbnail.
 * @param {string} color - The background color of the project card.
 * @param {number} id - The unique identifier of the project.
 */

const ProjectCard = ({ title, image, id }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { y: "10vw", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    // <Link
    //   to={`/portfolio/${title.toLowerCase()}`}
    //   key={id}
    //   className="projectLink col-12 col-lg-6"
    // >
    //   {/* <motion.div
    //     ref={ref}
    //     className=""
    //     variants={variants}
    //     initial="hidden"
    //     animate={inView ? "visible" : "hidden"}
    //     transition={{ duration: 0.4, ease: "easeInOut" }}
    //   > */}
    //   <div
    //     // style={{ backgroundColor: color }}
    //     className="projectCard d-flex align-items-center justify-content-center p-5"
    //     onClick={() => {}}
    //   >
    //     <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
    //       <h3 className="projectTitle">{title}</h3>
    //       <span className="viewWork">
    //         View Work <FiArrowUpRight />
    //       </span>
    //     </div>
    //     <div className="">
    //       {/* <Image src={image} alt="Laptop displaying the application" /> */}
    //       <img src={image} alt="" className="" />
    //     </div>
    //   </div>
    //   {/* </motion.div> */}
    // </Link>
    <div
      className="bg-slate-500 px-2 py-10 rounded-xl relative group cursor-pointer"
      onClick={() => {
        navigate(`/portfolio/${id}`);
      }}
    >
      <img src={image} alt={title} className="rounded-xl p-4" />
      <p className="text-center opacity-0 group-hover:opacity-90 duration-700">
        <span className="text-xl">{title}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
