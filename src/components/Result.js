import React from 'react';

export default class Result extends React.Component{

	render(){
		return (
			<div>The Total Score are {
					this.props.score.reduce((t, p)=>{
						return t+Number(p);
					}, 0)
				}
			</div>
		)
	}
	
}