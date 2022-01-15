import { useEffect, useState } from 'react';
import Card from '../../components/Cards/cards';

import { useParams } from 'react-router-dom'

function Cards() {

  const params = useParams();
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function handleGetCard() {
      const response = await fetch(`http://localhost:3333/cards?race=${params.category}&_limit=${20}&_page=${currentPage}`)
      const data = await response.json()
      setCards([...cards, ...data])
    }
    handleGetCard();
  }, [params.category, currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1);
      }
    })
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <p>Total de cards: {cards.length}</p>
      <div className='container'>
        {
          cards.map((card) => (
            <Card
              key={card.id}
              data={card}
            />
          ))
        }
      </div>
      <div id='sentinela'></div>
    </>
  )
}

export default Cards;