import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Question from '../src/components/Question';
import AnswersPanel from '../src/components/AnswersPanel';
import {data} from '../src/data/questions';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentQuestionId: 1,
            currentQuestion: props.questionData.filter(question=>{return question.id === 1})[0],
            point: []
        }
    }

    goBack(){
        const { currentQuestionId } = this.state;
        const {questionData} = this.props;

        if (currentQuestionId > 1) {
            this.setState({
                currentQuestionId: currentQuestionId - 1,
                currentQuestion: questionData.filter(question=>{return question.id === currentQuestionId-1})[0],
                point: this.state.point.slice(this.state.point.length-1, this.state.point.length)
            })
        }
    }

    handleSelectAnwser(pt){
        const { currentQuestionId } = this.state;
        const {questionData} = this.props;

        if (currentQuestionId < questionData.length+1) {
            this.setState({
                currentQuestionId: currentQuestionId + 1,
                currentQuestion: questionData.filter(question=>{return question.id === currentQuestionId+1})[0],
                point: this.state.point.concat([pt])
            })
        }
    }

    render() {
        
        return (
        <div className="App">
            <Header handleGoBack={this.goBack.bind(this)}/>
            <Question title={this.state.currentQuestion.title} content={this.state.currentQuestion.content}/>
            <AnswersPanel answers={this.state.currentQuestion.answers} handleSelectAnwser={this.handleSelectAnwser.bind(this)}/>
        </div>
        );
    }
}

export default App;
App.defaultProps = data;