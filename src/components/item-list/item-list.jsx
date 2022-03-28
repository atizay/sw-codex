import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="item-list__item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}
        >
          <a href="character-page.html" className="item-list__link">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 alt="character" />
              <h4 className="item-list__name"><span className="bold">{name}</span></h4>
          </a>
        </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <p>loading...</p>
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list">
        {items}
      </ul>
    );
  }
}
