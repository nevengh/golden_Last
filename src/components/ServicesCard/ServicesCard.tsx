import React from 'react'
import './ServicesCard.css'
interface ServicesCardProps{
    title:string;
    icon:string;
    description:string;
    card_number:string;
}
const ServicesCard:React.FC<ServicesCardProps>= ({title,description,icon,card_number}) => {
  return (
    <div className='ServicesCard'>
        <div className="card">
      <div className="circle">
        <p className="circle-number">{card_number}</p>
      </div>
      <div className="icon">
        
        <img src={icon} alt="" />
      </div>
      <h1 className="title">{title}</h1>
      <p className="description">
        {description}
      </p>
    </div>
    </div>
  )
}

export default ServicesCard