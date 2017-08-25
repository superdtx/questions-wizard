import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {data} from '../src/data/questions';
import Navigation from '../src/components/Navigation';
import Dashboard from '../src/components/Dashboard';

const questionData = data.questionData;

class App extends Component {

    constructor(){
        super();
        this.state = {
            currentQuestionId: 1,
            currentQuestion: questionData.filter(question=>{return question.id === 1})[0],
            points: [],
            showResult: false
        };
    }

    handleGoBack(){
        const { currentQuestionId, points } = this.state;

        if(currentQuestionId > 1){
            this.setState({
                currentQuestionId: currentQuestionId - 1,
                currentQuestion: questionData.filter(question=>{return question.id === currentQuestionId - 1})[0],
                points: points.slice(0, points.length-1),
                showResult: currentQuestionId - 1 > questionData.length
            });
        }
    }

    handleClickedAnwser(pt){
        const { currentQuestionId, points } = this.state;

        if(currentQuestionId < questionData.length + 2){
            this.setState({
                currentQuestionId: currentQuestionId + 1,
                currentQuestion: questionData.filter(question=>{return question.id === currentQuestionId + 1})[0],
                points: points.concat([pt]),
                showResult: currentQuestionId + 1 > questionData.length
            });
        }
    }

    render() {
        
        return (
            <div className="App">
                <Navigation handleGoBack={this.handleGoBack.bind(this)}></Navigation>
                <Dashboard question={this.state.currentQuestion} score={this.state.points} showResult={this.state.showResult} clickedAnwser={this.handleClickedAnwser.bind(this)}></Dashboard>
            </div>
        );
    }
}

export default App;
