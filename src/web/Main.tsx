import React, { FunctionComponent } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LyricScreen from "./screens/LyricScreen";

const Main: FunctionComponent = (props: any) => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lyric">Lyric</Link>
      </nav>
      <Switch>
        <Route
          path="/"
          component={HomeScreen}
          exact
        />
        <Route
          path="/lyric"
          component={LyricScreen}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
