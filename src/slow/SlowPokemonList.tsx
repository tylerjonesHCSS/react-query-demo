import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { pokemonURL } from "../config";

export const SlowPokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {pokemon.map((pokemon, index) => {
        return (
          <div key={index} style={{ marginBottom: "8px" }}>
            <Link to={`/pokemon/${index + 1}`} component={RouterLink}>
              {index + 1}. {pokemon["name"].toUpperCase()}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
