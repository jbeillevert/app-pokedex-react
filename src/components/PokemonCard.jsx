import PropTypes from "prop-types"


function PokemonCard(props) {

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        }).isRequired,
    }

    return (
        <figure>
            {props.pokemon.hasOwnProperty('imgSrc') ? <img src={props.pokemon.imgSrc}/> : <p>???</p> }
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
    ) 
}



export default PokemonCard;