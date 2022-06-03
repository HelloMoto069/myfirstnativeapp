
import React, { Component } from 'react';

import { View, Text } from 'react-native';



class Red extends Component {



  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.textContainer}> R </Text>

      </View>

    );

  }

}



const styles = {

  container: {

    flex: 1,

    backgroundColor: 'red',
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,

  },

  textContainer: {

    fontSize: 36,

  }

}



export default Red;