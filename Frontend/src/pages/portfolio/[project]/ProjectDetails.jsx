import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import projects from "../../../_data/projects.json";
import { useState } from "react";

/**
 * Represents the ProjectDetails page component.
 * Displays details of a specific project.
 *
 * @component
 */

const BASE_URL = "http://localhost:3000/details";
const ProjectDetails = () => {
  // Get the current location using React Router's useLocation hook
  let [project, setProject] = useState();
  // Scroll to the top of the page when the location changes
  const { id } = useParams();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      console.log(data);
      setProject(data);
    }
    fetchData();
  }, []);
  // Get the project title from the route parameters

  // Find the project in the data using the title
  // const project1 = false;

  // // If the project is not found, display the PageNotFound component
  if (!project) {
    return <PageNotFound />;
  }

  return (
    // <main className="container portfolio">
    //   {/* Display the page header with project title and description */}
    //   <PageHeader title={project.location} description={project.description} />
    //   <div className="projectDetails">
    //     <div className="row">
    //       <div className="col-12 col-xl-4 projectImage">
    //         {/* Display the project image */}
    //         {/* <Image src={project.image2} alt={project.name} opacity="0.5" /> */}
    //       </div>
    //       <div className="col-12 col-xl-8 projectBodyContainer">
    //         <div className="tech">
    //           {/* Display project technologies with animation */}
    //           {project.technologies.map((technology, i) => (
    //             <motion.span
    //               key={i}
    //               className="technology"
    //               initial={{ opacity: 0, x: 20 }}
    //               animate={{ opacity: 1, x: 0 }}
    //               transition={{
    //                 duration: 0.5,
    //                 delay: i * 0.1,
    //                 ease: "easeInOut",
    //               }}
    //             >
    //               {technology + " "}
    //             </motion.span>
    //           ))}
    //         </div>

    //         <div className="projectBody">
    //           {/* Display project body paragraphs with animation */}
    //           {project.body.split("\n").map((paragraph, i) => (
    //             <motion.p
    //               className="paragraph"
    //               key={i}
    //               initial={{ opacity: 0, y: 20 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{
    //                 duration: 0.5,
    //                 delay: i * 0.3,
    //                 ease: "easeInOut",
    //               }}
    //             >
    //               {paragraph}
    //             </motion.p>
    //           ))}
    //         </div>

    //         {/* Display buttons with animation */}
    //         <motion.div
    //           style={{ display: "flex", gap: "10px" }}
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{
    //             duration: 0.5,
    //             delay: project.body.split("\n").length * 0.3,
    //           }}
    //         >
    //           {/* <a href={project.github}>
    //             <Button name="View Code" />
    //           </a>
    //           <a href={project.deployed}>
    //             <Button name="View Site" />
    //           </a> */}
    //           <Link to="/portfolio">
    //             <Button name="Go Back" color="var(--hl2-color)" />
    //           </Link>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <div className="box flex flex-col md:flex-row gap-10 bg-red-300 max-w-6xl mx-auto mt-20 px-4 py-8 rounded-xl">
      <img
        src={`/images/${project.imageName}`}
        alt="none"
        className="md:h-52 max-w-xl rounded-md"
      />
      <div className="flex flex-col">
        <p className="text-xl mb-4">Image Name : {project.location}</p>
        <p className="text-xl max-w-xl">Description : {project.description}</p>
        {/* <button
          className="max-w-xs mt-10 py-2 outline-none rounded-md px-2 text-xl bg-[#48a3c6]"
          onClick={(e) => {
            var base = url + project.id;
            fetch(base, { method: "DELETE" })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Something went wrong");
                }
                // You need to define the 'navigate' function properly for navigation
                // Example usage with React Router: history.push('/details')
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default ProjectDetails;
