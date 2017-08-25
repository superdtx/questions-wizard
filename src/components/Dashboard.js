import React from 'react';
import QandA from './QandA';
import Result from './Result';

export default class Dashboard extends React.Component{



	render(){
		if(this.props.showResult){
			console.log(this.props.points)
			return <Result score={this.props.score}></Result>
		}

		return (
			<QandA question={this.props.question} handleClick={this.props.clickedAnwser}></QandA>
		)
	}

}