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
    render() {
        const {questionData} = this.props;
        console.log(this.props);
        console.log(this.state);
        const {currentQuestionId} = this.state;
        console.log(currentQuestionId);
        const currentQuestion = questionData.find(qd => qd.id = currentQuestionId);
        console.log(currentQuestion);
        return (
            <div className="App">
                <Header/>
                <Question content={currentQuestion.content}/>
                <AnswerPanel/>
            </div>
        );
    }
}

export default App;
App.defaultProps = data;