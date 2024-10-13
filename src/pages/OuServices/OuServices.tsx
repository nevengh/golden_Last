import { useLanguage } from "../../LanguageContext";
import './OurSercies.css';
import en from "../../locales/en";
import ar from "../../locales/ar";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { motion } from 'framer-motion'; // Import Framer Motion
import video from '../../assets/videography.png';
import media from '../../assets/social-media.png';
import content from '../../assets/writer.png';
import coding from '../../assets/coding.png';

const OurServices = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;

    // Define the animation variants
    const cardVariant = {
        hidden: { opacity: 0, y: 100 }, // Card is hidden and below its final position
        visible: (i: number) => ({
            opacity: 1,
            y: 0, // Moves to its final position
            transition: {
                delay: i * 0.2, // Stagger animation delay based on index
                duration: 0.5
            }
        })
    };

    return (
        <div className="services">
            <h1 className="services_title">{translations.OurServices}</h1>
            <div className="services_container">
                {[{
                    card_number: "01", 
                    title: translations.VideoProduction, 
                    description: translations.video_production_desc, 
                    icon: video
                }, {
                    card_number: "02", 
                    title: translations.mediabuying, 
                    description: translations.mediabuying_desc, 
                    icon: media
                }, {
                    card_number: "03", 
                    title: translations.ContentCreation, 
                    description: translations.ContentCreation_desc, 
                    icon: content
                }, {
                    card_number: "04", 
                    title: translations.webdevelopment, 
                    description: translations.webdevelopment_desc, 
                    icon: coding
                }].map((service, i) => (
                    <motion.div
                        key={service.card_number}
                        custom={i} // Pass index to the animation
                        initial="hidden"
                        whileInView="visible" // Trigger the animation when in view
                        variants={cardVariant}
                        viewport={{ once: true, amount: 0.5 }} // Animate only once, when 50% of the card is in view
                    >
                        <ServicesCard
                            card_number={service.card_number}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
