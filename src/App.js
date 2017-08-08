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
                    points: 0
                }
            })
        }
    }
    findCurrentQuestionContent(){
        const {questionData} = this.props;
        const {currentQuestionId, questionList} = this.state;
        const isEndOfTest = currentQuestionId > questionList.length ? true : false;
        let total = 0;
        questionList.forEach(q => {total += parseInt(q.points)});
        const question = !isEndOfTest ?
            questionData.find(qd => qd.id === currentQuestionId) :
            {title: "Test Summary", content: "Your Total Score is: " + total}

        return {title: question.title, content: question.content};
    }

    getCurrentAnswers(){
        const {questionData} = this.props;
        const {currentQuestionId, questionList} = this.state;
        const isEndOfTest = currentQuestionId > questionList.length ? true : false;
        return !isEndOfTest ?
            questionData.find(qd => qd.id === currentQuestionId).answers : [];
    }

    handleAnswerClick(pt){
        console.log('pt', pt);
        const {currentQuestionId, questionList} = this.state;
        this.setState({
            currentQuestionId: currentQuestionId + 1,
            questionList: questionList.reduce((acc, q) => {
            if(q.id === currentQuestionId){
                q.points = pt;
            }
            acc = acc.concat([q]);
            return acc;
            }, [])
        })
    }

    goBack(){
        const {currentQuestionId} = this.state;
            if(currentQuestionId > 1){
                this.setState({
                    currentQuestionId: currentQuestionId - 1
                })
            }
    }

    render() {
        console.log('this.state', this.state);
        const {currentQuestionId, questionList} = this.state;
        const isEndOfTest = currentQuestionId > questionList.length ? true : false;
        return (
        <div className="App">
            <Header handleGoBack={() => this.goBack()}/>
            <Question question={this.findCurrentQuestionContent()} isEndOfTest={isEndOfTest} />
            <AnswerPanel answers ={this.getCurrentAnswers()} handleAnswerClick={(id) => this.handleAnswerClick(id)}/>
        </div>
        );
    }
}

export default App;
App.defaultProps = data;