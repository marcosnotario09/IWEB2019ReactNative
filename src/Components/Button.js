import React from 'react';
import {View,StyleSheet} from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
            <View>
                <Button buttonStyle={{
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                    }}    
                    title = {this.props.value || ''} onPress={()=>{
                    switch (this.props.value) {
                        case'Atras':
                            return this.props.onChangeQuestion(this.props.questionIndex - 1);
                        case'Terminar':
                            return this.props.onSubmit();
                        case'Siguiente':
                            return this.props.onChangeQuestion(this.props.questionIndex + 1);
                        case 'Volver a jugar':
                            return this.props.resetQuestions();
                        case 'Jugar':
                            return this.props.resetQuestions();
                        default:
                            return 0;
                    }
                }}  />
            </View>
        );
    }
}