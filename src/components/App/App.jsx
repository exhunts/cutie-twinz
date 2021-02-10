import frameImage from '../../assets/images/frame.png'
import cardbackImage from '../../assets/images/cardback-cropped.png'
import mouseImage from '../../assets/images/mouse.png'
import './App.css'
import Card from '../Card'

function App() {
  return (
    <div className="game">
      <div className="inner">
        <div className="field">
          <img className="frame" src={frameImage} alt="frame" />
          <div className="frame-inner">
            {/* <div className="flip-card">
              <div className="flip-card-inner ">
                <div className="flip-card-front">
                  <img
                    className="cardback"
                    src={cardbackImage}
                    alt="cardback"
                  />
                </div>
                <div className="flip-card-back">
                  <img className="cardback" src={mouseImage} alt="cardback" />
                </div>
              </div>
            </div> */}
            <Card />

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
