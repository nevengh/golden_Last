import './Form.css'
import { useLanguage } from '../../LanguageContext'
import en from '../../locales/en'
import ar from '../../locales/ar'
const Form = () => {
    const { language} = useLanguage()
    const translations = language === 'en' ? en : ar
  return (
    <div className='Form'>
        <form action="">
            <div className="form_sec_1">
            <div className="input_group">
                <label htmlFor="name">{translations.name}:</label>
                <input type="text" name="" id="name" placeholder={translations.name} />
            </div>
            <div className="input_group">
                <label htmlFor="name">{translations.email}:</label>
                <input type="text" name="" id="name" placeholder={translations.email} />
            </div>
            </div>
            <div className="form_sec_1">
            <div className="input_group">
                <label htmlFor="name">{translations.phone}:</label>
                <input type="text" name="" id="name" placeholder={translations.phone} />
            </div>
            <div className="input_group">
                <label htmlFor="name">{translations.whatsApp}:</label>
                <input type="text" name="" id="name" placeholder={translations.whatsApp} />
            </div>
            </div>
            <div className="input_group">
                <label htmlFor="message">{translations.Message}:</label>
                <textarea name="" id="message" placeholder={translations.Message}></textarea>
            </div>
            <div className="submit">
                <button>{translations.submit}</button>
            </div>
        </form>
    </div>
  )
}

export default Form