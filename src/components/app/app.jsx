import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './app.module.css';
import './main.css';

import PeoplePage from "../people-page/people-page";
import Header from "../header/header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <section className="container container_items">
            <PeoplePage />
          </section>
        </main>

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      onItemSelected={this.onPersonSelected}*/}
        {/*      getData={this.swapiService.getAllPlanets} />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails personId={this.state.selectedPerson} />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      onItemSelected={this.onPersonSelected}*/}
        {/*      getData={this.swapiService.getAllStarships} />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails personId={this.state.selectedPerson} />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </BrowserRouter>
    </>
  );
}