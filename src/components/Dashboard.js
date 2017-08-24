import React from 'react';
import Question from './Question';
import Answers from './Answers';
import Result from './Result';

const Dashboard = (props) => {

	if(!props.state.readyForResult){
		return (
			<div>
				<Question title={props.state.currentQuestion.title} content={props.state.currentQuestion.content}/>
	            <Answers answers={props.state.currentQuestion.answers} handleSelectAnwser={props.handleSelectAnwser}/>
            </div>
		)
	}

    return <Result point={props.state.point}></Result>;
};

export default Dashboard;
