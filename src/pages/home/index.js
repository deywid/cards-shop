import React from "react";
import { Link } from "react-router-dom";
import { Container, CategoryItems }  from './styles.js'

const TYPES = [
  "Aqua",
  "Beast-Warrior",
  "Cyberse",
  "Dinosaur",
  "Dragon",
  "Fairy",
  "Fish",
  "Insect",
  "Machine",
  "Plant",
  "Rock",
  "Warrior",
  "Spellcaster"
];

function Home() {
  return (
    <>
      <Container>
        {
          TYPES.map((type) => 
          <CategoryItems
          key={type}>
            <Link to={`/cards/${type}`}>{type}</Link>
          </CategoryItems>)
        }
      </Container>
    </>
  )
}

export default Home;