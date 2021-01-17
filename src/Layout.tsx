import React from "react";
import { Link, Button } from "@material-ui/core";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import { SlowPokemonList } from "./slow/SlowPokemonList";
import { SlowPokemon } from "./slow/SlowPokemon";
import { FastPokemonList } from "./fast/FastPokemonList";
import { FastPokemon } from "./fast/FastPokemon";

export default function Layout() {
  return (
    <div className="App">
      <nav>
        <Link component={RouterLink} to="/">
          <Button color="primary">Home</Button>
        </Link>
        <Link component={RouterLink} to="/pokemon">
          <Button color="primary">Pokemon</Button>
        </Link>
      </nav>
      <main>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <Switch>
              <Route exact path="/pokemon">
                <SlowPokemonList />
              </Route>
              <Route exact path="/pokemon/:id">
                <SlowPokemon />
              </Route>
            </Switch>
          </div>
          <div>
            <Switch>
              <Route exact path="/pokemon">
                <FastPokemonList />
              </Route>
              <Route exact path="/pokemon/:id">
                <FastPokemon />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </div>
  );
}
