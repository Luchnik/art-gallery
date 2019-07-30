import React from 'react';

import { firestore } from '../../firebase/firestore';
import Item from '../item/item.component';
import './grid.styles.scss';

class Grid extends React.PureComponent {
  state = {
    items: []
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    const userId = this.props.userId;

    this.unsubscribeFromFirestore = firestore.collection(`Users/${userId}/Gallery`).onSnapshot(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      this.setState({ items });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    return (
      <div className="grid-container">
        {
          this.state.items.map(({ id, ...restProps }) => (
            <Item
              key={id}
              itemId={id}
              {...restProps} />
          ))
        }
      </div>
    );
  }
}

export default Grid;
