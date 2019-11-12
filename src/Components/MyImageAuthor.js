import React from 'react';
import {View, Image} from 'react-native';

export default class MyImageAuthor extends React.Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                    <Image style={{width:10, height:10}} source= {{url: this.props.url}} />
            </View>
        );
    }
}