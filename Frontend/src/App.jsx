import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
//import Loader from "./pages/loader/loader";
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Footer from "./components/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";
import WhyUs from "./components/WhyUs";
import CardY from "./components/Card";
import Children from "./components/Children";
import Disorder from "./components/Disorder";
import Others from "./components/Others";
import ImageGallery from "./components/ImgDisp";
import ImageUpload from "./components/Conterr";

/**
 * Instructions for Customizing the Portfolio
 * ------------------------------------------
 * 1. Adding Your Own Projects:
 *    - Navigate to the "_data" folder and modify the "projects.json" file to include your projects.
 *
 * 2. Replacing Project Images:
 *    - Access the "public/projectImages" directory to replace the my project images with your own.
 *
 * 3. Handling Form Submissions:
 *    - To receive form submissions, obtain an API Key. Refer to the Form component for detailed instructions.
 *
 * For Assistance or Questions:
 * -----------------------------
 * If you require assistance or have questions, don't hesitate to reach out via LinkedIn or email.
 *
 * Support and Star:
 * ------------------
 * Enjoying this project? Please consider giving it a star (🌟).
 * I'm committed to ongoing updates and feature additions.
 * Your suggestions and feedback are invaluable and highly encouraged!
 */

function App() {
  // Personal details for the user
  const personalDetails = {
    name: "Dr.Babu Rangarajan",
    location: "India",
    email: "babu.psy@gmail.com",
    brand:
      "Babu Rangarajan is a licensed clinical psychologist based in Tamil Nadu, India. He has more than 15 years of experience in the field of mental health and has worked with a wide range of clients, including individuals, couples, families, and organizations. Babu Rangarajan is also an international trainer and has conducted workshops and training programs on various topics related to mental health and personal development in India and other countries like Dubai, Kuwait, Bahrain, Bangladesh, Malaysia, Sri Lanka, Australia and USA. He has worked with various Educational Institutions and leading corporates to provide mental health training and support to individuals and communities to empower Mental Health. In addition to his work as a psychologist and trainer, Babu Rangarajan is also a TEDx speaker and has given talks on various mental health topics, such as stress management, resilience, and emotional well-being. Babu Rangarajan has also achieved several notable accomplishments in his career. He holds a world record for conducting the largest online stress management session. He has trained over 400,000 people. He has also been recognized with numerous awards for his contributions to the field of mental health, including Best Performance Award from InSPA – Indian School Psychology Association. Indian Icon Award from Oasis World Record and the Best Motivational Speaker from the Tamil Nadu Government. Overall, Babu Rangarajan is a highly respected and accomplished clinical psychologist who is dedicated to improving the mental health and well-being of individuals and communities through his work as a therapist, trainer, and speaker",
    tagline: "LICENSED CLINICAL PSYCHOLOGIST",
  };

  const location = useLocation();

  // State to manage loader visibility
  //const [showLoader, setShowLoader] = useState(true);

  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    // Hide loader when initial route is loaded
    // if (location.pathname !== "/") {
    //   setShowLoader(false);
    // }

    // Store the original document title
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    // Handle document title change when tab visibility changes
    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "👋🏻 Comfort pulling you back in!";
      } else {
        document.title = originalTitle;
      }
    };

    // Listen for visibility change events
    window.addEventListener("visibilitychange", handleTabChange);
    return () =>
      window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      {/* {showLoader ? (
        // Show loader until initial route is loaded
        <Loader setShowLoader={setShowLoader} />
      ) : ( */}
      <>
        {/* Header */}
        <Header />
        {/* Define routes */}
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Landing
                name={personalDetails.name}
                tagline=/*{personalDetails.tagline}*/ "Licensed Clinical Psychartist"
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/resume"
            element={<Resume brand={personalDetails.brand} />}
          />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/Therapy" element={<CardY />} />
          <Route
            path="/contact"
            element={
              <Contact
                name={personalDetails.name}
                location={personalDetails.location}
                email={personalDetails.email}
              />
            }
          />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
          {/* Fallback route for unknown paths */}
          <Route path="*" element={<Navigate to="/page-not-found" />} />
          <Route path="/Children" element={<Children />} />
          <Route path="/Disorder" element={<Disorder />} />
          <Route path="/Others" element={<Others />} />
          <Route path="/gallery" element={<ImageGallery/>} />
          <Route path="/upload" element={<ImageUpload />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </>
    </>
  );
}

export default App;
