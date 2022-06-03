import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Red from './Flex/Red'
import Blue from './Flex/Blue'
import Green from './Flex/Green'



class FlexTest extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* <Text style={styles.headerStyle}>flex Test</Text> */}
                    <View style={[{position: 'absolute'}, styles.elementsContainer]}>
                        <Red />
                        <Blue />
                        <Green />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        marginTop: 47,
        flex: 1,
    },

    headerStyle: {
        textAlign: 'center',
    },

    elementsContainer: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
    }
}



export default FlexTest