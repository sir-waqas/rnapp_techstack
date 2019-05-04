import React, { Component } from "react";
import { Text } from "react-native";
//Use connect to get the state data from the Redux Store
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return <Text>Some placeholder Text</Text>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
