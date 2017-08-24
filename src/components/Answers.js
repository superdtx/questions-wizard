/**
 * Created by TAbdullah on 8/8/2017.
 */
// eslint-disable-next-line
import React, {Component} from 'react';

const Answers = (props) => {
    function handleAnswerClick(e){
        props.handleSelectAnwser(e.target.value);
    }

    return (
        <div>
            {
                props.answers.map(a => {
                    return (
                        <button value={a.points} onClick={handleAnswerClick}>{a.answer}</button>
                    )
                })
            }
        </div>
    )
};

export default Answers;
