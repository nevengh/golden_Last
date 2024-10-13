import Header from "./components/Header/Header";
import "./App.css";
import { LanguageProvider } from "./LanguageContext";
import Hero from "./components/Hero/Hero";
import AboutUS from "./pages/AboutUS/AboutUS";
import OuServices from "./pages/OuServices/OuServices";
import MediaSection from "./pages/MediaSection/MediaSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <LanguageProvider>
        <Header />
        <div id="home">
          <Hero/>
        </div>
        <div id="about">
          <AboutUS/>
        </div>
        <div id="services">
          <OuServices/>
        </div>
        <div id="Media">
          <MediaSection/>
        </div>
        <Footer/>
      </LanguageProvider>
    </div>
  );
};

export default App;
