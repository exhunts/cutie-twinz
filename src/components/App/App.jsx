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

import { v4 as uuidv4 } from 'uuid'

import Card from '../Card/Card'
import './App.css'
import { shuffle } from '../../utils/utils'
import { useEffect, useRef, useState } from 'react'

// const currentlyOpened = [12, 0]
// let isFirstOpened = false
// let isSecondOpened = false

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

shuffle(cardImagesArr)
function App() {
  // const refCardImages = useRef()
  // const currentlyOpened = []
  // const [, set] = useState(initialState)
  const [currentlyOpened, setCurrentlyOpened] = useState([])
  const [isFieldClickable, setIsFieldClickable] = useState(true)
  // const [openable, setOpenable] = useState(initialState)
  const [amountOfUncovered, setAmountOfUncovered] = useState(0)
  const [cards, setCards] = useState([
    {
      id: 0,
      image: cardImagesArr[0],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 1,
      image: cardImagesArr[1],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 2,
      image: cardImagesArr[2],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 3,
      image: cardImagesArr[3],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 4,
      image: cardImagesArr[4],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 5,
      image: cardImagesArr[5],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 6,
      image: cardImagesArr[6],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 7,
      image: cardImagesArr[7],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 8,
      image: cardImagesArr[8],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 9,
      image: cardImagesArr[9],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 10,
      image: cardImagesArr[10],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 11,
      image: cardImagesArr[11],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 12,
      image: cardImagesArr[12],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 13,
      image: cardImagesArr[13],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 14,
      image: cardImagesArr[14],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 15,
      image: cardImagesArr[15],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 16,
      image: cardImagesArr[16],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 17,
      image: cardImagesArr[17],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 18,
      image: cardImagesArr[18],
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 19,
      image: cardImagesArr[19],
      isOpen: false,
      isOpenable: true,
    },
  ])

  // useEffect(() => {
  //   console.log('1', refCardImages.current)
  //   refCardImages.current = [
  //     mouseImage,
  //     bunnyImage,
  //     carImage,
  //     kittyImage,
  //     emeraldImage,
  //     potatoHeadImage,
  //     fishImage,
  //     glassBallImage,
  //     iceCreamImage,
  //     baloonImage,
  //     mouseImage,
  //     bunnyImage,
  //     carImage,
  //     kittyImage,
  //     emeraldImage,
  //     potatoHeadImage,
  //     fishImage,
  //     glassBallImage,
  //     iceCreamImage,
  //     baloonImage,
  //   ]
  //   refCardImages.current = shuffle(refCardImages.current)
  //   console.log('2', refCardImages.current)
  // }, [])

  return (
    <div
      className="game"
      style={
        isFieldClickable ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }
      }
    >
      {amountOfUncovered === 20 && <div>All right</div>}
      <div className="inner">
        <div className="field">
          <img className="frame" src={frameImage} alt="frame" />
          <div className="frame-inner">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                // state={refCardImages.current}
                currentlyOpened={currentlyOpened}
                setCurrentlyOpened={setCurrentlyOpened}
                index={index}
                cards={cards}
                setCards={setCards}
                setAmountOfUncovered={setAmountOfUncovered}
                setIsFieldClickable={setIsFieldClickable}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
