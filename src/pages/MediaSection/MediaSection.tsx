import './MediaSection.css';
import { useState} from 'react';
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from '../../locales/ar';
import { motion } from 'framer-motion';
import behind1 from '../../assets/BehineTheSeen/FIN 3.mp4';
// import educate1 from '../../assets/educational/Salmon DNA Edit 01.mp4';
// import educate2 from '../../assets/educational/Dietitian Advice 01.mp4';
// import userG1 from '../../assets/UserGenerated/b1 reel.mp4';

const MediaSection: React.FC = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;

    // Define video sources for each category
    interface VideoCategories {
        behindTheScene: string[];
        userGenerated: string[];
        corporateVideos: string[];
        marketingVideos: string[];
        educationalVideos: string[];
    }

    const videoCategories: VideoCategories = {
        behindTheScene: [behind1],
        userGenerated: [],
        corporateVideos: [],
        marketingVideos: [],
        educationalVideos: []
    };

    // State to store the current category
    const [currentCategory, setCurrentCategory] = useState<keyof VideoCategories>('behindTheScene'); // Default category is 'behindTheScene'

    // Function to animate each video individually when in view
    const videoVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className='MediaSection'>
            <h1 className='MediaHead'>{translations.MediaHead}</h1>
            <div className="filter_btns">
                <button onClick={() => setCurrentCategory('behindTheScene')}>Behind The Scene</button>
                <button onClick={() => setCurrentCategory('corporateVideos')}>Corporate Videos</button>
                <button onClick={() => setCurrentCategory('marketingVideos')}>Marketing Videos</button>
                <button onClick={() => setCurrentCategory('educationalVideos')}>Educational Videos</button>
                <button onClick={() => setCurrentCategory('userGenerated')}>User Generated Content</button>
            </div>
            <div className="Content_view_con">
                {/* Render all videos for the selected category */}
                {videoCategories[currentCategory].length > 0 ? (
                    videoCategories[currentCategory].map((videoSrc, index) => (
                        <motion.div
                            key={index}
                            className="video-container"
                            variants={videoVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of video is in view
                        >
                            <video src={videoSrc} controls className="video-item" />
                        </motion.div>
                    ))
                ) : (
                    <p>{translations.NoVideoAvailable}</p> // Display message if no videos are available
                )}
            </div>
        </div>
    );
}

export default MediaSection;
