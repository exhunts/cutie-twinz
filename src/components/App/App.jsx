import frameImage from '../../assets/images/frame.png'

import mouseImage from '../../assets/images/mouse.png'
import bunnyImage from '../../assets/images/bunny.png'
import carImage from '../../assets/images/car.png'
import kittyImage from '../../assets/images/kitty.png'
import emeraldImage from '../../assets/images/emerald.png'
import potatoHeadImage from '../../assets/images/botato-head.png'
import fishImage from '../../assets/images/fish.png'
import glassBallImage from '../../assets/images/glass-ball.png'
import iceCreamImage from '../../assets/images/ice-cream.png'
import baloonImage from '../../assets/images/baloon.png'

import Card from '../Card/Card'
import './App.css'

// const card = {
//   image: '',
//   isOpened: false,
// }

const cardImagesArr = [
  mouseImage,
  bunnyImage,
  carImage,
  kittyImage,
  emeraldImage,
  potatoHeadImage,
  fishImage,
  glassBallImage,
  iceCreamImage,
  baloonImage,
]

const cardsField = [
  [
    {
      image: cardImagesArr[0],
      isOpened: false,
    },
    {
      image: cardImagesArr[1],
      isOpened: false,
    },
    {
      image: cardImagesArr[2],
      isOpened: false,
    },
    {
      image: cardImagesArr[3],
      isOpened: false,
    },
  ],
  [
    {
      image: cardImagesArr[4],
      isOpened: false,
    },
    {
      image: cardImagesArr[5],
      isOpened: false,
    },
    {
      image: cardImagesArr[6],
      isOpened: false,
    },
    {
      image: cardImagesArr[7],
      isOpened: false,
    },
  ],
]

const currentlyOpened = [12, 0]

function App() {
  return (
    <div className="game">
      <div className="inner">
        <div className="field">
          <img className="frame" src={frameImage} alt="frame" />
          <div className="frame-inner">
            <Card image={mouseImage} isOpened={false} />
            <Card image={bunnyImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />
            <Card image={mouseImage} />

            {/* <img className="cardback" src={cardbackImage} alt="cardback" />
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
            <img className="cardback" src={cardbackImage} alt="cardback" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
