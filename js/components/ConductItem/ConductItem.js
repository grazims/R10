import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import globalStyles from '../../screens/globalStyles';
import styles from '../../screens/About/styles';

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
          <Text style={styles.fontList}>
            {this.state.expanded ? '-' : '+'} {item.title}
          </Text>
        </TouchableOpacity>

        {this.state.expanded && (
          <Text style={globalStyles.h2}>{item.description}</Text>
        )}
      </View>
    );
  }
}

export default ConductItem;
