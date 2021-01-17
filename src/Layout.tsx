import React from "react";
import { Link, Button } from "@material-ui/core";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import { PokemonList } from "./PokemonList";
import { Pokemon } from "./Pokemon";

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
        <Link component={RouterLink} to="/characters">
          <Button color="primary">Characters</Button>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/pokemon">
            <PokemonList />
          </Route>
          <Route exact path="/pokemon/:id">
            <Pokemon />
          </Route>
          <Route exact path="/characters">
            {/* <Characters /> */}
          </Route>
          <Route exact path="/characters/:characterId">
            {/* <Character /> */}
          </Route>
        </Switch>
      </main>
    </div>
  );
}
