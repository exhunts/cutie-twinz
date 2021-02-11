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

// import
import Card from '../Card/Card'
import './App.css'
import { shuffle } from '../../utils/utils'

// const card = {
//   image: '',
//   isOpen: false,
// }

// const cardImagesArr = [
//   mouseImage,
//   bunnyImage,
//   carImage,
//   kittyImage,
//   emeraldImage,
//   potatoHeadImage,
//   fishImage,
//   glassBallImage,
//   iceCreamImage,
//   baloonImage,
//   mouseImage,
//   bunnyImage,
//   carImage,
//   kittyImage,
//   emeraldImage,
//   potatoHeadImage,
//   fishImage,
//   glassBallImage,
//   iceCreamImage,
//   baloonImage,
// ]

// const cards = [
//   [
//     {
//       image: cardImagesArr[0],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[1],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[2],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[3],
//       isOpen: false,
//     },
//   ],
//   [
//     {
//       image: cardImagesArr[4],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[5],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[6],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[7],
//       isOpen: false,
//     },
//   ],
//   [
//     {
//       image: cardImagesArr[8],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[9],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[10],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[11],
//       isOpen: false,
//     },
//   ],
//   [
//     {
//       image: cardImagesArr[12],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[13],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[14],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[15],
//       isOpen: false,
//     },
//   ],
//   [
//     {
//       image: cardImagesArr[16],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[17],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[18],
//       isOpen: false,
//     },
//     {
//       image: cardImagesArr[19],
//       isOpen: false,
//     },
//   ],
// ]

const currentlyOpened = [12, 0]
let isFirstOpened = false
let isSecondOpened = false

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

function App() {
  shuffle(cardImagesArr)

  const cards = [
    [
      {
        image: cardImagesArr[0],
        isOpen: false,
      },
      {
        image: cardImagesArr[1],
        isOpen: false,
      },
      {
        image: cardImagesArr[2],
        isOpen: false,
      },
      {
        image: cardImagesArr[3],
        isOpen: false,
      },
    ],
    [
      {
        image: cardImagesArr[4],
        isOpen: false,
      },
      {
        image: cardImagesArr[5],
        isOpen: false,
      },
      {
        image: cardImagesArr[6],
        isOpen: false,
      },
      {
        image: cardImagesArr[7],
        isOpen: false,
      },
    ],
    [
      {
        image: cardImagesArr[8],
        isOpen: false,
      },
      {
        image: cardImagesArr[9],
        isOpen: false,
      },
      {
        image: cardImagesArr[10],
        isOpen: false,
      },
      {
        image: cardImagesArr[11],
        isOpen: false,
      },
    ],
    [
      {
        image: cardImagesArr[12],
        isOpen: false,
      },
      {
        image: cardImagesArr[13],
        isOpen: false,
      },
      {
        image: cardImagesArr[14],
        isOpen: false,
      },
      {
        image: cardImagesArr[15],
        isOpen: false,
      },
    ],
    [
      {
        image: cardImagesArr[16],
        isOpen: false,
      },
      {
        image: cardImagesArr[17],
        isOpen: false,
      },
      {
        image: cardImagesArr[18],
        isOpen: false,
      },
      {
        image: cardImagesArr[19],
        isOpen: false,
      },
    ],
  ]

  return (
    <div className="game">
      <div className="inner">
        <div className="field">
          <img className="frame" src={frameImage} alt="frame" />
          <div className="frame-inner">
            {cards.flat().map(({ image, isOpen }) => (
              <Card image={image} isOpen={isOpen} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
