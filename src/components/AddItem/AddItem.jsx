import React, { Component } from 'react';

class AddItem extends Component {

  state = {
    newItem: {
      description: '',
      url: ''
    }
  }
  
  render() {
    return (
      <div>
        <p>
          <input type="text" placeholder="item description"></input>
          <input type="text" placeholder="item url"></input>
          <button>add to the shelf</button>
        </p>
      </div>

    )
  }
}
export default AddItem;