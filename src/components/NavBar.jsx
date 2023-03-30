import React, { useState } from 'react';


const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList}) => {


    function incrementPokemonIndex() {
      pokemonIndex >= pokemonList.length - 1 ? setPokemonIndex(pokemonIndex = 0) : setPokemonIndex(pokemonIndex+= 1)
    }
  
    function decrementPokemonIndex() {
      pokemonIndex === 0 ? setPokemonIndex(pokemonList.length - 1) : setPokemonIndex(pokemonIndex-= 1)
    }



    return (
        <div>
            <button onClick={decrementPokemonIndex}>Précédent</button>
            <button onClick={incrementPokemonIndex}>Suivant</button>
        </div>
    );
};

export default NavBar;