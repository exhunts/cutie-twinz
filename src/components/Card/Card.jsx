import { useState } from 'react'
import cardbackImage from '../../assets/images/cardback-cropped.png'
// import './App/App.css'
import styles from './Card.module.css'

export default function Card({ card, state, index }) {
  // const [opened, setOpened] = useState(false)
  console.log(index)

  const onClickHandler = () => {
    // setOpened(prev => !prev)
    card.isOpen = true
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
