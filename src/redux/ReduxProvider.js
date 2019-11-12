import React from 'react';
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from "redux";
import { View } from 'react-native';
import GameScreen from '../Components/GameScreen';
import IndexScreen from '../Components/IndexScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { questions } from "../assets/mock-data";



const AppNavigator = createStackNavigator({
    IndexScreen: {
        screen: IndexScreen
    },
    GameScreen: {
        screen: GameScreen
    }
},{
    initialRouteName: "IndexScreen",
    headerMode: 'none'

})

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            questions: [],
            fetching: true,
            timer:120
        };
        this.store = this.configureStore();
    }
    render() {
        return (
            <Provider style={{flex:1, backgroundColor:'#00FFF3'}} key='provider' store={this.store}>  
                    <AppContainer/>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}