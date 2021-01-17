import * as React from "react";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { pokemonURL } from "../config";
import { useQuery } from "react-query";

const fetchPokemon = async () => {
  const data = await fetch(pokemonURL);
  return await data.json();
};

export const FastPokemonList = () => {
  const { data: pokemon, isLoading } = useQuery(`pokemon`, fetchPokemon);

  if (isLoading || !pokemon) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: "250px" }}>
      {pokemon["results"].map((pokemon: any, index: number) => {
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
