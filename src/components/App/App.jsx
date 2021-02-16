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
import buttonImage from '../../assets/images/button-start/button.png'
import buttonArrowImage from '../../assets/images/button-start/button-arrow.png'

import music from '../../assets/audio/music/main.mp3'

import { v4 as uuidv4 } from 'uuid'

import Card from '../Card/Card'
import './App.css'
import { shuffle, shuffle2 } from '../../utils/utils'
import { useEffect, useRef, useState } from 'react'
import useSound from 'use-sound'
// let audioEl = null
// const currentlyOpened = [12, 0]
// let isFirstOpened = false
// let isSecondOpened = false

let cardImagesArr = [
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

// const audio = new Audio('../../assets/audio/music/main.mp3')

function App() {
  // const refCardImages = useRef()
  // const currentlyOpened = []
  // const [, set] = useState(initialState)
  // const [cardImagesArr, setCardImagesArr] = useState([
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
  // ])
  // const refCardImagesArr = useRef([
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
  // ])
  const [currentlyOpened, setCurrentlyOpened] = useState([])
  // const [audio] = useState(new Audio('../../assets/audio/music/main.mp3'))
  // const [playing, setPlaying] = useState(true)
  const [isFieldClickable, setIsFieldClickable] = useState(false)
  // const [openable, setOpenable] = useState(initialState)
  const [amountOfUncovered, setAmountOfUncovered] = useState(0)
  const [isGamePlaying, setisGamePlaying] = useState(false)
  const [play, exposedData] = useSound(music, {
    loop: true,
  })

  const [cards, setCards] = useState([
    {
      id: 0,
      image: mouseImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 1,
      image: mouseImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 2,
      image: bunnyImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 3,
      image: bunnyImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 4,
      image: carImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 5,
      image: carImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 6,
      image: kittyImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 7,
      image: kittyImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 8,
      image: emeraldImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 9,
      image: emeraldImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 10,
      image: potatoHeadImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 11,
      image: potatoHeadImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 12,
      image: fishImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 13,
      image: fishImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 14,
      image: glassBallImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 15,
      image: glassBallImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 16,
      image: iceCreamImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 17,
      image: iceCreamImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 18,
      image: baloonImage,
      isOpen: false,
      isOpenable: true,
    },
    {
      id: 19,
      image: baloonImage,
      isOpen: false,
      isOpenable: true,
    },
  ])

  const playMusic = () => {
    // const audioEl = document.getElementsByClassName('audio-element')[0]
    // music.play()
    // console.log(audioEl)
  }

  const startGame = () => {
    setAmountOfUncovered(0)
    setCurrentlyOpened([])
    setIsFieldClickable(true)

    // Almost works ------------
    // const allCardsClosed = cards.map(card => ({ ...card, isOpen: false }))
    // const shuffled = shuffle2(allCardsClosed)
    // setCards(shuffled)-----------

    // Not works ----------------
    // closeAllCards(cards)
    // setCards(shuffle2(cards))
    // --------------------------
    const allCardsClosed = cards.map(card => ({ ...card, isOpen: false }))
    setCards(allCardsClosed)
    new Promise(() => {
      setTimeout(() => {
        setCards(shuffle2(allCardsClosed))
      }, 500)
    })

    if (!exposedData.isPlaying) play()
  }

  const closeAllCards = cards => {
    const allCardsClosed = cards.map(card => ({ ...card, isOpen: false }))
    setCards(allCardsClosed)
  }

  return (
    <div className="game">
      <div className="exlogo">
        <div className="exlogo__outer">
          <div className="exlogo__mid">
            <div className="exlogo__inner"></div>
          </div>
        </div>
      </div>

      <div onClick={startGame} className="button-start">
        <img
          className="button-base"
          src={buttonImage}
          alt="base for start button"
        />
        <img
          className="button-arrow"
          src={buttonArrowImage}
          alt="arrow for start button"
        />
      </div>

      <div
        className="inner"
        style={
          isFieldClickable
            ? { pointerEvents: 'auto' }
            : { pointerEvents: 'none' }
        }
      >
        <div className="field">
          <img className="frame" src={frameImage} alt="frame" />
          <div className="frame-inner">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                currentlyOpened={currentlyOpened}
                setCurrentlyOpened={setCurrentlyOpened}
                index={index}
                cards={cards}
                setCards={setCards}
                setAmountOfUncovered={setAmountOfUncovered}
                setIsFieldClickable={setIsFieldClickable}
                amountOfUncovered={amountOfUncovered}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
