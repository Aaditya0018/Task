import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Profiles from "./components/Profiles";
import Footer from "./components/Footer";
import LastSection from "./components/LastSection";
function App() {
  return (
    <>
      <Navbar title="HoneyBadgersCo" />
      <Section
        heading="HONEYBADGERSCO"
        subheading="PASSION. POSSIBILITIES. INNOVATIONS!"
        buttonText="Learn More"
      />

      <div className="container">
        <Card
          heading="PROJECTS"
          text="Our company is constantly aiming on acquiring good projects and provide value to the customers, we have a brilliant team to assist in making it happen."
        />

        <Card
          heading="QUALITY"
          text="Our company is constantly aiming on acquiring good projects and provide value to the customers, we have a brilliant team to assist in making it happen."
        />

        <Card
          heading="NETWORK"
          text="Our company is constantly aiming on acquiring good projects and provide value to the customers, we have a brilliant team to assist in making it happen."
        />
      </div>

      <Profiles />
      <LastSection/>
      <div>
        {/* Your page content here */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
