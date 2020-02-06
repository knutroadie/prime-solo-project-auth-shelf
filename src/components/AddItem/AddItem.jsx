import React, { Component } from 'react';

class AddItem extends Component {

  state = {
    newItem: {
      description: '',
      url: ''
    }
  }

  makeNewItem = (event, propertyValue) => {
    console.log(this.state.newItem);
    
    console.log('typing into a box');
    this.setState({
      newItem: {
        ...this.state.newItem,
        [propertyValue]: event.target.value
      }
    })

  }

  addNewItem = () => {
    console.log('clicking add item to shelf', this.state.newItem);
    this.props.dispatch({
      type: 'ADD_NEW_ITEM',
      payload: this.state.newItem
    });
    this.props.history.push('/info');
  }

  render() {
    return (
      <div>
        <p>
          <input type="text" placeholder="item description" value={this.state.newItem.description} onChange={(event) => this.makeNewItem(event, 'description')}></input>
          <input type="text" placeholder="item url" value={this.state.newItem.url} onChange={(event) => this.makeNewItem(event, 'url')}></input>
          <button onClick={this.addNewItem}>add to the shelf</button>
        </p>
      </div>

    )
  }
}
export default AddItem;