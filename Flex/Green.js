import React, { Component } from 'react';

import { View, Text } from 'react-native';



class Green extends Component {



  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.textContainer}> G </Text>

      </View>

    );

  }

}



const styles = {

  container: {

    flex: 1,

    backgroundColor: 'green',
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,

  },

  textContainer: {

    fontSize: 47,

  }

}



export default Green;