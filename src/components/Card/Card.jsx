import cardbackImage from '../../assets/images/cardback-cropped.png'
// import './App/App.css'
import styles from './Card.module.css'

export default function Card({ image }) {
  return (
    <div className={styles['flip-card']}>
      <div className={styles['flip-card-inner']}>
        <div className={styles['flip-card-front']}>
          <img
            className={styles['cardback']}
            src={cardbackImage}
            alt="cardback"
          />
        </div>
        <div className={styles['flip-card-back']}>
          <img className={styles['cardback']} src={image} alt="cardback" />
        </div>
      </div>
    </div>
  )
}
