import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { pokemonURL } from "./config";

export const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(pokemonURL);
        const resJson = await response.json();
        setPokemon(resJson["results"]);
      } catch (ex) {
        console.error(ex);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) return <div className="App">Loading...</div>;

  return (
    <div>
      {pokemon.map((pokemon, index) => {
        return (
          <div key={index}>
            <Link to={`/pokemon/${index + 1}`} component={RouterLink}>
              {pokemon["name"]}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
