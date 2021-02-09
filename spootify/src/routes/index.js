import React from 'react';
import { Switch, Route } from "react-router-dom";
import Discover from './Discover';
import Favourites from './Favourites';
import Search from './Search';
import Playlists from './Playlists';
import Charts from './Charts';

export default function Routes() {
  // Here you'd return an array of routes
  return (
    <>
      <Switch>
        <Route path="/" component={Discover} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/favourites" component={Favourites} exact />
        <Route path="/playlists" component={Playlists} exact />
        <Route path="/charts" component={Charts} exact />
      </Switch>
    </>
  );
}
