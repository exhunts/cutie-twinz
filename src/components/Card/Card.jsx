import cardbackImage from '../../assets/images/cardback-cropped.png'
import './App/App.css'

export default function Card({ image }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner ">
        <div className="flip-card-front">
          <img className="cardback" src={cardbackImage} alt="cardback" />
        </div>
        <div className="flip-card-back">
          <img className="cardback" src={image} alt="cardback" />
        </div>
      </div>
    </div>
  )
}
