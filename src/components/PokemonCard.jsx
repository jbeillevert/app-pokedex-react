
import React from "react";


function PokemonCard({name, img}) {
    return (
        <figure className="PokemonCard">
            {img ? <img src={img}/> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    ) 
}



export default PokemonCard;