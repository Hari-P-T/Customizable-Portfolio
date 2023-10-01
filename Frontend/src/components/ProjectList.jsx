import ProjectCard from "./ProjectCard";
import sampImg from "../assets/bike.png";
// import sampImg from "../assets/bike.png";
/**
 * Represents a list of project cards.
 *
 * This component maps over the projects data and generates
 * a ProjectCard component for each project.
 *
 * @component
 *
 */
// description: "This is sample image of my work";
// id: 20;
// imageName: "sample 1.jpg";
// location: "sample 1";
const ProjectList = ({ galleryData }) => {
  // console.log(item.imageName);
  return (
    <div className="grid grid-flow-row grid-cols-3 gap-20 px-4 mx-auto">
      {galleryData.map((item) => (
        <ProjectCard
          key={item.id}
          id={item.id}
          title={item.location}
          // image={`images/${item.imageName}`}
          image={sampImg}
          // color={project.bgcolor}
        />
      ))}
    </div>
  );
};
export default ProjectList;
