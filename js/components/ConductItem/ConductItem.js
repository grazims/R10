// About page listing

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleConduct = this.toggleConduct.bind(this);
  }

  toggleConduct() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const {item} = this.props;

    return (
      <View>
        <TouchableOpacity onPress={this.toggleConduct}>
          <Text>{item.title}</Text>
        </TouchableOpacity>

        {this.state.expanded && <Text>{item.description}</Text>}
      </View>
    );
  }
}

export default ConductItem;
