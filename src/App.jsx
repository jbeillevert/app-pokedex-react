import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';




function App() {
  let[pokemonIndex, setIndex] = useState(0)

  function incrementPokemonIndex() {
    pokemonIndex >= pokemonList.length - 1 ? setIndex(pokemonIndex = 0) : setIndex(pokemonIndex+= 1)
  }

  function decrementPokemonIndex() {
    pokemonIndex === 0 ? setIndex(pokemonList.length - 1) : setIndex(pokemonIndex-= 1)
  }



  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      },
    ];


  return (
    <div>
      <PokemonCard name={pokemonList[pokemonIndex].name} img={pokemonList[pokemonIndex].imgSrc}/>
      <button onClick={decrementPokemonIndex}>Précédent</button>
      <button onClick={incrementPokemonIndex}>Suivant</button>
    </div>
  );
}


export default App
