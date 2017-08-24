import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Dashboard from '../src/components/Dashboard';
import {data} from '../src/data/questions';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentQuestionId: 1,
            currentQuestion: props.questionData.filter(question=>{return question.id === 1})[0],
            point: [],
            readyForResult: false
        }
    }

    goBack(){
        const { currentQuestionId } = this.state;
        const {questionData} = this.props;

        if (currentQuestionId > 1) {
            this.setState({
                currentQuestionId: currentQuestionId - 1,
                currentQuestion: questionData.filter(question=>{return question.id === currentQuestionId-1})[0],
                point: this.state.point.slice(0, this.state.point.length-1),
                readyForResult: (currentQuestionId - 1 === 4)
            })
        }
    }

    handleSelectAnwser(pt){
        const { currentQuestionId } = this.state;
        const {questionData} = this.props;

        if (currentQuestionId < questionData.length + 1) {
            this.setState({
                currentQuestionId: currentQuestionId + 1,
                currentQuestion: questionData.filter(question=>{return question.id === currentQuestionId+1})[0],
                point: this.state.point.concat([pt]),
                readyForResult: (currentQuestionId + 1 === 4)
            })
        }
    }

    render() {
        
        return (
            <div className="App">
                <Header handleGoBack={this.goBack.bind(this)}/>
                <Dashboard state={this.state} handleSelectAnwser={this.handleSelectAnwser.bind(this)}/>
            </div>
        );
    }
}

export default App;
App.defaultProps = data;