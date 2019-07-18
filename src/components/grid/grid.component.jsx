import React from 'react';

import Item from '../item/item.component';
import './grid.styles.scss';

class Grid extends React.Component {
  state = {
    items: [
      {
        id: 1,
        title: 'Lorem ipsum',
        price: 255,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      },
      {
        id: 2,
        title: 'dolor sit amet',
        price: 500,
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      },
      {
        id: 3,
        title: 'consectetur adipiscing elit',
        price: 325,
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      },
      {
        id: 4,
        title: 'sed do eiusmod',
        price: 740,
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      },
      {
        id: 5,
        title: 'tempor incididunt',
        price: 125,
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      }
    ]
  };

  render() {
    return (
      <div className="grid-container">
        {
          this.state.items.map(({ id, title, price, imageUrl }) => (
            <Item
              key={id}
              title={title}
              price={price}
              imageUrl={imageUrl} />
          ))
        }
      </div>
    );
  }
}

export default Grid;
