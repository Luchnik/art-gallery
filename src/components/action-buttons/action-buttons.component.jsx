import React from 'react';

import Button from '../button/button.component';

const ActionButtons = props => {

  const { isMineItem, isEditing, alreadyLiked, currentUser, editItem, deleteItem, toggleLike } = props;

  if ( isMineItem ) {
    return (
      <React.Fragment>
        <Button
          type="submit"
          onClick={() => editItem()}
          small
          styleType="secondary">
          {isEditing ? 'Done' : 'Edit'}
        </Button>
        <Button
          type="submit"
          onClick={() => deleteItem()}
          small
          styleType="primary">
          Delete
        </Button>
      </React.Fragment>
    );
  }

  if ( !isMineItem && currentUser ) {
    return (
      <Button
        type="submit"
        onClick={() => toggleLike()}
        small
        alreadyLiked={alreadyLiked}
        styleType="like">
        {alreadyLiked ? 'Dislike It' : 'Like It'}
      </Button>
    );
  }
}

export default ActionButtons;
