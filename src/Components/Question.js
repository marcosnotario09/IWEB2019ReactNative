
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Question extends React.Component {
    render() {
        return (
            <View style={styles.question}>
                <Text style={styles.text}>{this.props.question}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  question: {
      alignItems:'center'
 },
 text: {
      fontSize:10
 }
});