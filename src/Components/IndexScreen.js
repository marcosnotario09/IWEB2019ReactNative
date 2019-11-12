import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Button from './Button';
import Navbar from "./Navbar";


export default class IndexScreen extends React.Component {

    render() {
        return(
            <View style={styles.inicio}>
               <Button key='botonIndexScreen' buttonName="Jugar" key= "ButtonPlay" buttonFunc={ () => {
                    this.props.navigation.navigate('Game')}}/>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    inicio:{
        flex:1,
        justifyContent: 'space-around', 
        alignItems: 'center'
    }
})

