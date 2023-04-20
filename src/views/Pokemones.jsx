import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {

    const [pokemones, setPokemones] = useState([])
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState("")

    const getPokemonesData = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=3&offset=6"
        const res = await fetch(url)
        const data = await res.json()
        setPokemones(data.results)
    }

    useEffect(() => {
        getPokemonesData()
    }, [])

    const navigate = useNavigate();
    const irAPokemon = () => {
        navigate(`/pokemon/${pokemonSeleccionado}`);
    };

    const handleChange = (e) => {
        setPokemonSeleccionado(e.target.value)
    };

    return (
        <div className="mt-5">
            <div className="home-style">
                <h1><img src="../imgs/Pokeball.png" className="icon-style" /> Selecciona un Pokémon <img src="../imgs/Pokeball.png" className="icon-style" /></h1>
            </div>
            {/* <select value={pokemonSeleccionado} onChange={({ target }) => setPokemonSeleccionado(target.value)}> */}
            <select value={pokemonSeleccionado} onChange={handleChange} className="select-style">
                <option value="" disabled>
                    --- Lista ---
                </option>
                {pokemones.map((pokemon, i) => (
                    <option key={i} value={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
            {"   "}
            <button
                className="btn-style"
                disabled={!pokemonSeleccionado}
                onClick={irAPokemon}>
                Ver detalles
            </button>
        </div>

    );
}