import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips'
import MyImage from './MyImage';
import MyImageAuthor from './MyImageAuthor';
import Author from './Author'
import {View} from 'react-native';

export default class Content extends React.Component {
    render() {
        return (
            <View>
                <Question question = {this.props.question.question}/>
                <Answer question = {this.props.question} onQuestionAnswer = {this.props.onQuestionAnswer}/>
                <Tips tips={this.props.question.tips}/>
                <MyImage url = {this.props.question.attachment.url}/>
                <MyImageAuthor url = {this.props.question.author.photo.url}/>
                <Author username = {this.props.question.author.username}/>
            </View>
        );
    }
}