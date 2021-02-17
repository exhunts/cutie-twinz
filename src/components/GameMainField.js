import React from 'react'

export default function GameMainField() {
  return (
    <div
      className="inner"
      style={
        isFieldClickable ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }
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
  )
}
