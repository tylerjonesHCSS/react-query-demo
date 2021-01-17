import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { pokemonURL } from "../config";

const fetchPokemon = async (pokemonId: string) => {
  const data = await fetch(`${pokemonURL}/${pokemonId}`);
  return await data.json();
};

export const FastPokemon = () => {
  const params = useParams();
  const pokemonId = params["id"];

  const { data: pokemon, isLoading } = useQuery<Pokemon>(
    `pokemon-${pokemonId}`,
    async () => {
      return await fetchPokemon(pokemonId);
    }
  );

  if (isLoading || !pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <h1>
        <img
          src={pokemon.sprites.front_default}
          width={"250px"}
          height={"250px"}
        />
      </h1>

      <div>Type: {pokemon.types.map((type) => type.type.name + " ")}</div>
    </div>
  );
};

interface Pokemon {
  id: string;
  name: string;
  sprites: Sprites;
  types: TypeParent[];
}

interface Sprites {
  front_default: string;
  back_default: string;
}

interface TypeParent {
  slot: number;
  type: Type;
}

interface Type {
  name: string;
  url: string;
}
