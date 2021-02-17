import { useState } from 'react'
import cardbackImage from '../../assets/images/cardback-cropped.png'
// import './App/App.css'
import flipSound from '../../assets/audio/sounds/card-flip.mp3'
import wrongSound from '../../assets/audio/sounds/wrong.mp3'
import rightSound from '../../assets/audio/sounds/right.mp3'
import congratsSound from '../../assets/audio/sounds/congrats.mp3'
import useSound from 'use-sound'
import styles from './Card.module.css'

export default function Card({
  card,
  activePairCardsArray,
  setActivePairCardsArray,
  cards,
  setCards,
  setAmountOfUncovered,
  setIsFieldClickable,
  amountOfUncovered,
}) {
  const [play] = useSound(flipSound)
  const [playCongrats] = useSound(congratsSound)
  const [playWrongSound] = useSound(wrongSound)
  const [playRightSound] = useSound(rightSound)

  const onClickHandler = () => {
    if (card.isOpen) return
    if (card.isOpenable) {
      setActivePairCardsArray(prev => [...prev, card.id])
      setCards(prev => toggleCardByIndex(prev, card.id))
      const clonedCurrentlyOpened = [...activePairCardsArray, card.id]

      if (
        clonedCurrentlyOpened.length === 2 &&
        cards[clonedCurrentlyOpened[0]].image ===
          cards[clonedCurrentlyOpened[1]].image
      ) {
        playRightSound()
        setActivePairCardsArray([])
        setAmountOfUncovered(prev => prev + 2)
        if (amountOfUncovered + 2 === 20) playCongrats()
        return
      }

      if (
        clonedCurrentlyOpened.length === 2 &&
        cards[clonedCurrentlyOpened[0]].image !==
          cards[clonedCurrentlyOpened[1]].image
      ) {
        playWrongSound()
        setIsFieldClickable(false)
        new Promise(() => {
          setTimeout(() => {
            setCards(prev => toggleCardByIndex(prev, clonedCurrentlyOpened[0]))
            setCards(prev => toggleCardByIndex(prev, clonedCurrentlyOpened[1]))
            setActivePairCardsArray([])
            setIsFieldClickable(true)
          }, 1000)
        })
      }
    }
    play()
  }

  const toggleCardByIndex = (cards, index) => {
    const cardsCloned = [...cards]
    const beforeSlice = cardsCloned.slice(0, index)
    const cardToToggle = {
      ...cardsCloned[index],
      isOpen: !cardsCloned[index].isOpen,
    }
    const afterSlice = cardsCloned.slice(index + 1)
    return [...beforeSlice, cardToToggle, ...afterSlice]
  }

  return (
    <div onClick={onClickHandler} className={styles['flip-card']}>
      <div
        className={`${styles['flip-card-inner']} ${
          card.isOpen && styles['flip']
        }`}
      >
        <div className={styles['flip-card-front']}>
          <img
            className={styles['cardback']}
            src={cardbackImage}
            alt="cardback"
          />
        </div>
        <div className={styles['flip-card-back']}>
          <img className={styles['cardback']} src={card.image} alt="cardback" />
        </div>
      </div>
    </div>
  )
}
