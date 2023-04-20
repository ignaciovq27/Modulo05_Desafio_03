import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/Pokemon.css"

export default function Pokemon() {

    const [pokemon, setPokemon] = useState({})
    const ParamsPokemon = useParams()
    const getPokemonData = async (pokemonName) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        const res = await fetch(url)
        const data = await res.json()
        setPokemon(data)
    }

    useEffect(() => {
        getPokemonData(ParamsPokemon.pokemonName)
    }, [])

    return (
        <div className="container card-style">
            <div className="name-style">
                · {pokemon.name} ·
            </div>
            <div className="div-hr-style">
            </div>
            <div className="div-style circle">
                <img className="poke-img-style" src={pokemon.sprites?.front_default} alt="poke_img" />
            </div>
            <div className="div-hr-style">
            </div>
            <div className="stats-style">
                <div>
                    <ul>
                        <li>Hp:</li>
                        <li>Attack:</li>
                        <li>Defense:</li>
                        <li>Special-Attack:</li>
                        <li>Special-Defense:</li>
                        <li>Speed:</li>
                    </ul>
                </div>
                <div>
                    {pokemon.stats && (
                        <ul>
                            <li>{pokemon.stats[0].base_stat}</li>
                            <li>{pokemon.stats[1].base_stat}</li>
                            <li>{pokemon.stats[2].base_stat}</li>
                            <li>{pokemon.stats[3].base_stat}</li>
                            <li>{pokemon.stats[4].base_stat}</li>
                            <li>{pokemon.stats[5].base_stat}</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="div-hr-style">
            </div>
            <div className="div-style">
                {pokemon.types && (
                    <ul>
                        <li>Type: {pokemon.types[0].type.name}</li>
                    </ul>
                )}
            </div>
            <div className="div-hr-style">
            </div>
            <img src="../imgs/Pokeball_white.png" className="card-icon-style" />
        </div>
    );
}