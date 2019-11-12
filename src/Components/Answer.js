import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class Answer extends React.Component {
    render() {
        return (
            <View style={styles.answer}>
              <TextInput style={styles.textInput} placeholder = "Introduce la respuesta" value={this.props.question.userAnswer || ''}
                       onChangeText={(userAnswer)=>{
                           this.props.onQuestionAnswer(userAnswer);
                       }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  answer: {
      alignItems:'center',
      height:100
 },
 textInput: {
      backgroundColor:'antiquewhite'
 }
})