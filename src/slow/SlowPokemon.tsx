import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokemonURL } from "../config";

export const SlowPokemon = () => {
  const params = useParams();
  const pokemonId = params["id"];

  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${pokemonURL}/${pokemonId}`);
        const resJson = await response.json();
        setPokemon(resJson);
      } catch (ex) {
        console.error(ex);
      }
      setIsLoading(false);
    };
    loadData();
  }, [pokemonId]);

  if (isLoading || !pokemon) return <div className="App">Loading...</div>;

  return (
    <div style={{ maxWidth: "250px" }}>
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
