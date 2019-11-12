import React from 'react';
import {View, Image} from 'react-native';

export default class MyImage extends React.Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                    <Image style={{width:35, height:35}} source= {{url: this.props.url}} />
            </View>
        );
    }
}