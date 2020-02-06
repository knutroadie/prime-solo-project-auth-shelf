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

  deleteItem = () => {
    console.log('trying to delete item:', this.props.reduxStore.itemsReducer.item.id);
    this.props.dispatch({
      type: 'DELETE_ITEM',
      url: `/api/shelf/{this.props.reduxStore.itemsReducer.item.id}`
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
            <button onClick={this.deleteItem}>Delete?</button>
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