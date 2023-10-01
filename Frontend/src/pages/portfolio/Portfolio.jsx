import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";
import { useState } from "react";
import Message from "../../components/Message";

/**
 * Represents the Portfolio page component.
 * Displays a list of projects and allows users to view the creator's work.
 *
 * @component
 */

const Portfolio = () => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();
  const [gallery, setGallery] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3000/details");
      const res = await data.json();
      setGallery(res);
    }
    fetchData();
  }, []);
  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  if (gallery.length < 1) return <Message title="No Image Found" />;
  return (
    <>
      {/* Main Portfolio Page */}
      <main className="portfolio container">
        {/* Display the page header */}
        <PageHeader title="Gallery" description="View my work" />

        <div className="row">
          {/* Display the list of projects */}
          <ProjectList galleryData={gallery} />
        </div>
      </main>
    </>
  );
};

export default Portfolio;
