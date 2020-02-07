import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    console.log('trying to get items!');
    this.props.dispatch({
      type: 'GET_ITEMS'
    })
  }

  deleteItem = (event, id) => {
    console.log('trying to delete item:', id);
    this.props.dispatch({
      type: 'DELETE_ITEM',
      // THE NEXT LINE NEEDS TO BE CORRECTED
      url: `/api/shelf/id`
    });
    this.getItems();
  }

  render() {
    return (
      <div>
        {/* import redux store */}
        {/* map over redux state array */}
        {/* append list of items */}
        {/* conditional render a delete button based on the user's id */}
        {this.props.reduxStore.itemsReducer.map((item, id) =>
          <div key={item.id}>
            <img alt={item.id} src={item.url} />
            <p>{item.description}</p>
            <button onClick={(event) => this.deleteItem(event, item.id)}>Delete?</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(InfoPage);