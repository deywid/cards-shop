import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Cards/cards';

import { useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/cart';

function Cards() {

  const params = useParams();

  const { addItem } = useContext(CartContext)

  const [cards, setCards] = useState([]);

  useEffect(() => {

    async function handleGetCard() {
      const response = await fetch(`http://localhost:3333/cards?race=${params.category}`)
      const data = await response.json()
      setCards(data)
    }

    handleGetCard();

  }, [])

  return (
    <>
      <h1>Total de cards: {cards.length}</h1>
      <div className='container'>
        {
          cards.map((card) => (
            <div key={card.id}>
              <Card
                name={card.name}
                image={card.card_images[0].image_url_small}
                type={card.type}
                key={card.id}
              />
              <button
                onClick={() =>
                  addItem(card)}>Adcionar</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cards;
