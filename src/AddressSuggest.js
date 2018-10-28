import React, { Component } from 'react';
import AddressItem from './AddressItem';


class AddressSuggest extends Component {
  render() {
    return (
        <AddressItem
          label="Address"
          value={this.props.query}
          onChange={this.props.onChange}
          placeholder="start typing" />
    );
  }
}

export default AddressSuggest;
