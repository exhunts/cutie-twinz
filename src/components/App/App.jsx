import frameImage from '../../assets/images/frame.png'
import cardbackImage from '../../assets/images/cardback-cropped.png'
import mouseImage from '../../assets/images/mouse.png'
import './App.css'
import Card from '../Card/Card'

function App() {
  return (
    <div className="game">
      <div className="inner">
        <div className="field">
          <img className="frame" src={frameImage} alt="frame" />
          <div className="frame-inner">
            <Card image={mouseImage} />

            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
            <img className="cardback" src={cardbackImage} alt="cardback" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
