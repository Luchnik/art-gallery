import React from 'react';

import Item from '../item/item.component';
import { firestore } from '../../firebase/firestore';
import './grid.styles.scss';

class Grid extends React.PureComponent {
  state = {
    items: [],
    loading: true
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    const userId = this.props.userId;

    this.unsubscribeFromFirestore = firestore.collection(`Users/${userId}/Gallery`).onSnapshot(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      this.setState({ items, loading: false });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { loading, items } = this.state;

    if ( loading ) {
      return <div>Loading...</div>
    }

    return (
      <div className="grid-container">
        {
          items.map(({ id, ...restProps }) => (
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
