import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Question from '../src/components/Question';
import AnswerPanel from '../src/components/AnswersPanel';
import {data} from '../src/data/questions';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentQuestionId: 1,
            questionList: props.questionData.map(d => {
                return {
                    id: d.id,
                    answer: -1
                }
            })
        }
    }
    findCurrentQuestionContent(){
        const {questionData} = this.props;
        const {currentQuestionId} = this.state;
        return questionData.find(qd => qd.id === currentQuestionId).content;
    }

    getCurrentAnswers(){
        const {questionData} = this.props;
        const {currentQuestionId} = this.state;
        return questionData.find(qd => qd.id === currentQuestionId).answers;
    }

    render() {
        return (
        <div className="App">
            <Header/>
            <Question content={this.findCurrentQuestionContent()} />
            <AnswerPanel answers ={this.getCurrentAnswers()}/>
            </div>
        );
    }
}

export default App;
App.defaultProps = data;