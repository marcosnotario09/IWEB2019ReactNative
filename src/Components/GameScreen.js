import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import Button from "./Button"
import { questionAnswer } from '../redux/actions';
import { initQuestions } from '../redux/actions';
import { changeQuestion } from '../redux/actions';
import { submit } from '../redux/actions';
import { timer } from '../redux/actions';
import { reset } from '../redux/actions';
import { fetching } from '../redux/actions';
import {View, Text, FlatList} from 'react-native';

class GameScreen extends Component {
    componentDidMount(){
        this.props.dispatch(fetching(true));
        this.fetchQuestions();
        setInterval(()=>{
            this.props.dispatch(decrementTimer());
        },1000)
    }

    fetchQuestions(){
        fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=638220fae031a10e5868').then((resp)=>
                resp.json()).then(json=> {
            this.props.dispatch(initQuestions(json));
            this.props.dispatch(fetching(false));
        }).catch(error => console.log(error));

    }
    endTimer(){
        this.props.dispatch(submit(this.props.questions));
    }
    
  render() {
      if (!this.props.finished) {
          if (this.props.fetching){
              return(
              <View style={{flex:1, justifyContent:'space-around', alignItems:'center'}}>
                    <Text style={{fontSize:50}}>Cargando...</Text>
              </View>
              )
          }else{
              console.log(this.props.questions);        
              return (
                  <View style={{flex:1, flexDirection: 'column', justifyContent:'flex-start', backgroundColor:'azure'}}>
                      <View style={{flex:1, backgroundColor:'black'}}>
                        <Navbar score={this.props.score}/>
                      </View>
                      <View style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
                        <Text style={{fontSize:20, color:'red'}}>{this.props.timer === 0 ? this.endTimer() : this.props.timer}</Text>
                      </View>
                      <View style={{flex:8, backgroundColor:'white'}}>
                      <Game question={this.props.questions[this.props.currentQuestion]}
                            questionIndex={this.props.currentQuestion}
                            onQuestionAnswer={(answer) => {
                                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                            }}
                            onChangeQuestion={(index) => {
                                this.props.dispatch(changeQuestion(index))
                            }}
                            onSubmit={() => {
                                this.props.dispatch(submit(this.props.questions))
                            }}
                            onInitQuestions={(questions) => {
                                this.props.dispatch(initQuestions(questions))
                            }}
                      />
                      </View>
                  </View>
              );
          }
      }else{
          return(
                <View style={{flex:1, justifyContent:'space-around', alignItems:'center', backgroundColor:'#00FFF3'}}>

                <View style={{flex:3, justifyContent:'space-around', alignItems:'center'}}>
                 <Text style={{fontSize:30}}>Tu puntuación es de: {this.props.score} puntos</Text>
                 </View>
                <View style={{flex:2, justifyContent:'space-around', alignItems:'center'}}>

                  <Button value='Volver a jugar' resetQuestions={() => {
                      this.props.dispatch(reset());
                      this.props.dispatch(fetching(true));
                      this.fetchQuestions();
                  }}/>
                </View>

              </View>
          )
      }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(GameScreen);