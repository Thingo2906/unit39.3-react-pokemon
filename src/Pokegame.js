import React from 'react';
import pokemon from './PokemonList';
import Pokedex from './Pokedex'
const Pokegame = (props) => {
    let hand1 = [];
    let hand2 = [...pokemon];
    //use while to loop and excute until hand1.length =hand2.length
    while (hand1.length < hand2.length){
        let idx = Math.floor(Math.random() * hand2.length);
        // splice will remove 1 element at idx 
        // we get the first element of this new array and insert it into hand 2
        let randPokemon = hand2.splice(idx, 1)[0];
        hand1.push(randPokemon);
    }
    // use reduce to calculate the total of base_experience.
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
}
export default Pokegame;