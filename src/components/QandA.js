import React from 'react';

export default class Dashboard extends React.Component{

	handleClick(e){
		e.preventDefault();
		let point = e.target.value;
		this.props.handleClick(point);
	}

	render(){
		return (
			<div>
				<div>{this.props.question.title} - {this.props.question.content}</div>
				<div>
					{this.props.question.answers.map(q=>{
						return (<button key={q.id} value={q.points} onClick={this.handleClick.bind(this)}>{q.answer}</button>)
					})}
				</div>
			</div>
		)
	}

}