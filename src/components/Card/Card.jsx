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
  setAmountOfUncovered,
  setIsFieldClickable,
}) {
  const onClickHandler = () => {
    if (card.isOpenable) {
      setCurrentlyOpened(prev => [...prev, card.id])
      setCards(prev => toggleCardByIndex(prev, card.id))
      console.log(currentlyOpened.length)
      const clonedCurrentlyOpened = [...currentlyOpened, card.id]

      // if (clonedCurrentlyOpened.length === 1)
      //   console.log(
      //     'clonedCurrentlyOpened',
      //     cards[clonedCurrentlyOpened[0]].image
      //   )
      // if (clonedCurrentlyOpened.length === 2)
      //   console.log(
      //     'clonedCurrentlyOpened',
      //     cards[clonedCurrentlyOpened[1]].image
      //   )

      if (
        clonedCurrentlyOpened.length === 2 &&
        cards[clonedCurrentlyOpened[0]].image ===
          cards[clonedCurrentlyOpened[1]].image
      ) {
        setCurrentlyOpened(prev => [])
        setAmountOfUncovered(prev => prev + 2)
        return
      }

      if (
        clonedCurrentlyOpened.length === 2 &&
        cards[clonedCurrentlyOpened[0]].image !==
          cards[clonedCurrentlyOpened[1]].image
      ) {
        setIsFieldClickable(false)
        new Promise(() => {
          setTimeout(() => {
            setCards(prev => toggleCardByIndex(prev, clonedCurrentlyOpened[0]))
            setCards(prev => toggleCardByIndex(prev, clonedCurrentlyOpened[1]))
            setCurrentlyOpened(prev => [])
            setIsFieldClickable(true)
          }, 1000)
        })
        // setCards(prev => toggleCardByIndex(prev, clonedCurrentlyOpened[0]))
        // setCards(prev => toggleCardByIndex(prev, clonedCurrentlyOpened[1]))
        // setCurrentlyOpened(prev => [])
      }
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
