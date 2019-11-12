import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Navbar extends React.Component {
    render() {
        return (
        
            <View>
                <Text style={styles.answer}>Quiz Game</Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  answer: {
      fontSize:20,
      backgroundColor: '#282c34',
      color: 'white'
 }

})
