import buttonImage from '../assets/images/button-start/button.png'
import buttonArrowImage from '../assets/images/button-start/button-arrow.png'

export default function ButtonStartAgain({ startGame }) {
  return (
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
  )
}
