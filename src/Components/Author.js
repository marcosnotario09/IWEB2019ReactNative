import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Author extends React.Component {
    render() {
        return (
        	<View style={styles.author}>
                <Text style={styles.text}>{this.props.username}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  author: {
      alignItems:'center'
 },
 text: {
      fontSize:10
 }
});