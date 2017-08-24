import React from 'react';

const Result = (props) => {

	const totalPoint = props.point.reduce((total, p)=>{return total + Number(p)}, 0)

    return (
    	<div>The Total Points are: {totalPoint}</div>
    );
};

export default Result;
