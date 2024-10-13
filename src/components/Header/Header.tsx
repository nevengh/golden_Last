import './Header.css'
import logo from '../../assets/logo-e1691577275677.png'
import { useLanguage } from '../../LanguageContext'
import en from '../../locales/en'
import ar from '../../locales/ar'
import { useState } from 'react'

const Header = () => {
    const { language, setLanguage } = useLanguage()
    const translations = language === 'en' ? en : ar
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as 'en' | 'ar');
    };

    return (
        <div className='Header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <a href="#home">{translations.Home}</a>
                </div>
                <div className="nav-links">
                    <a href="#about">{translations.About}</a>
                </div>
                <div className="nav-links">
                    <a href="#services">{translations.Services}</a>
                </div>
                <div className="nav-links">
                    <a href="#ourClients">{translations.ourClients}</a>
                </div>
                <div className="nav-links">
                    <a href="#contact">{translations.ContactUs}</a>
                </div>
            </div>
            <div className="language_btn">
                <select onChange={handleLanguageChange} value={language}>
                    <option value="en">{translations.English}</option>
                    <option value="ar">{translations.Arabic}</option>
                </select>
            </div>
            <div className="burger_menu" onClick={toggleMenu}>
                {isMenuOpen ? <span className="close_icon">&times;</span> : <span className="burger_icon">&#9776;</span>}
            </div>
        </div>
    )
}

export default Header
