import React from 'react';

import Spinner from '../spinner/spinner.component';
import Item from '../item/item.component';
import collections from '../../firebase/collections';
import './grid.styles.scss';

class Grid extends React.PureComponent {
  state = {
    items: [],
    loading: true
  };

  unsubscribeFromCollection = null;

  componentDidMount = () => {
    const userId = this.props.userId;
    const collectionPath = `Users/${userId}/Gallery`;

    this.unsubscribeFromCollection = collections.subscribeToCollection(collectionPath, snapshot => {
      const items = collections.mapCollectionToArray(snapshot);
      this.setState({ items, loading: false });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromCollection();
  };

  render() {
    const { loading, items } = this.state;

    if ( loading ) {
      return <Spinner />
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
