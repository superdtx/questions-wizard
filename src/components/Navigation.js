import React from 'react';

export default class Navigation extends React.Component{

	render(){
		return <button onClick={this.props.handleGoBack}>Prev</button>;
	}

}

