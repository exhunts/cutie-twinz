import { useState } from 'react'
import cardbackImage from '../../assets/images/cardback-cropped.png'
// import './App/App.css'
import styles from './Card.module.css'

export default function Card({
  card,
  index,
  currentlyOpened,
  setCurrentlyOpened,
  cards,
  setCards,
}) {
  const onClickHandler = () => {
    setCurrentlyOpened(prev => [...prev, card.id])
    setCards(prev => toggleCardByIndex(prev, card.id))
    console.log(currentlyOpened.length)
    if (currentlyOpened.length === 2) {
      setCurrentlyOpened(prev => [])
    }
    // if (
    //   currentlyOpened.length === 2 &&
    //   currentlyOpened[0] === currentlyOpened[1]
    // ) {
    //   setCards(prev => toggleCardByIndex(prev, currentlyOpened[0]))
    //   setCards(prev => toggleCardByIndex(prev, currentlyOpened[1]))
    //   return
    // }
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
