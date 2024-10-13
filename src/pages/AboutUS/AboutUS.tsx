import './AboutUS.css'
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import about from "../../assets/WE-ARE-01-minsite-1-1-1246x800-1.png";
const AboutUS = () => {
    const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <div className="about">
        <div className="about_img">
          <img src={about} alt="" />
        </div>
        <div className="about_content">
          <h1>{translations.About}</h1>
          <p className="about_text">{translations.about_text_1}</p>
          <p className="about_text_2">{translations.about_text_2}</p>
          <ul className="about_ul">
            <li>{translations.PaidAds}</li>
            <li>{translations.ContentCreation}</li>
            <li>{translations.VideoProduction}</li>
            <li>{translations.webdevelopment}</li>
          </ul>
        </div>
      </div>
  )
}

export default AboutUS