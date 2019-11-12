import React from 'react';
import Button from './Button';
import {View} from 'react-native';

export default class Actionbar extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Button value={"Siguiente"} questionIndex = {this.props.questionIndex} 
                                onChangeQuestion={this.props.onChangeQuestion}/>
                </View>
                <View>
                    <Button value={"Terminar"} questions = {this.props.questions} 
                                onSubmit={this.props.onSubmit}/>
                </View>
                <View>
                    <Button value={"Atras"} questionIndex = {this.props.questionIndex} 
                                onChangeQuestion={this.props.onChangeQuestion}/>
                </View>
            </View>   
        );
    }
}