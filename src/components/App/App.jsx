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
import reactLogoImage from '../../assets/images/react-logo.svg'
import jsLogoImage from '../../assets/images/js-logo.svg'

import music from '../../assets/audio/music/main.mp3'

import congratsSound from '../../assets/audio/sounds/congrats.mp3'

import Card from '../Card/Card'
import './App.css'
import { shuffle2 } from '../../utils/utils'
import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import Logo from '../Logo'
import ButtonStartAgain from '../ButtonStartAgain'
import ConfettiGenerator from 'confetti-js'
import LogoScreen from '../LogoScreen/LogoScreen'

function App() {
  // For cheat only
  const [playCongrats] = useSound(congratsSound)
  const [activePairCardsArray, setActivePairCardsArray] = useState([])
  const [isFieldClickable, setIsFieldClickable] = useState(false)
  const [amountOfUncovered, setAmountOfUncovered] = useState(0)
  const [play, exposedData] = useSound(music, {
    loop: true,
    volume: 0.6,
  })
  const [isLogoScreenVisible, setIsLogoScreenVisible] = useState(true)

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

  const startGame = () => {
    setAmountOfUncovered(0)
    setActivePairCardsArray([])
    setIsFieldClickable(true)
    const allCardsClosed = cards.map(card => ({ ...card, isOpen: false }))
    setCards(allCardsClosed)
    new Promise(() => {
      setTimeout(() => {
        setCards(shuffle2(allCardsClosed))
      }, 500)
    })

    if (!exposedData.isPlaying) play()
  }

  // Cheat
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code == 'KeyH') {
        playCongrats()
        setAmountOfUncovered(20)
        const allCardsClosed = cards.map(card => ({ ...card, isOpen: true }))
        setCards(allCardsClosed)
      }
    })
    return () => {}
  }, [playCongrats])

  useEffect(() => {
    const confettiSettings = {
      target: 'my-canvas',
      max: '80',
      size: '3',
      animate: true,
      props: [
        'circle',
        'square',
        'triangle',
        'line',
        { type: 'svg', src: 'site/hat.svg', size: 25, weight: 0.2 },
      ],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
      ],
      clock: '25',
      rotate: true,
      width: '1920',
      height: '981',
      start_from_edge: true,
      respawn: true,
    }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLogoScreenVisible(false)
    }, 5000)
  }, [])

  return (
    <>
      {isLogoScreenVisible && <LogoScreen />}
      <div className="game">
        <canvas
          id="my-canvas"
          style={{
            position: 'absolute',
            zIndex: 0,
            width: '100%',
            height: '100%',
            display: amountOfUncovered === 20 ? 'block' : 'none',
          }}
        ></canvas>
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'sans-serif',
            userSelect: 'text',
            color: '#fff',
          }}
        >
          📫 mail me: gregory.k@filancy.com 🐈
        </div>

        <ButtonStartAgain startGame={startGame} />
        <Logo />
        <img
          style={{
            width: '150px',
            height: '150px',
            position: 'absolute',
            left: '20px',
            bottom: '20px',
          }}
          src={reactLogoImage}
          alt=""
        />
        <img
          style={{
            width: '150px',
            height: '150px',
            position: 'absolute',
            right: '20px',
            top: '20px',
          }}
          src={jsLogoImage}
          alt=""
        />

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
                  activePairCardsArray={activePairCardsArray}
                  setActivePairCardsArray={setActivePairCardsArray}
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

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'sans-serif',
        }}
      >
        Code and Design by Gregory Kafanov 2021
      </div>
    </>
  )
}

export default App
