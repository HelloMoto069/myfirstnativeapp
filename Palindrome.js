import React, { useState } from 'react';
import { Text, View, Button, Alert, TextInput, StyleSheet } from 'react-native';

export default function Palindrome() {

    const [text, setText] = useState("");

    const handleButton = () => {

        const result = text.toLowerCase();
        const a = result.split('');
        const b = a.reverse();
        const ans = b.join('');

        alert(ans === text.toLowerCase() ? "Palindrome Hai..!!!" : "Palindrome Nahi Hai..!!!");
    }

    return (
        <View >

            <Text>Check It's Palindrome or Not</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setText(e)}
                placeholder="Enter Your Text Here"
            />
            <Button color="#f194ff"
                title="Check Karo"
                onPress={handleButton}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});