/**
 * Created by TAbdullah on 8/8/2017.
 */

import React, {Component} from 'react';

    const AnswerPanel = (props) => {
        function handleAnswerClick(e){
            console.log('answerpanel', e.target.value);
            props.handleAnswerClick(e.target.value);
        }

        return (
            <div>
                {
                props.answers.map(a => {
                    return (
                        <button value={a.id} onClick={handleAnswerClick}>{a.answer}</button>
                    )
                })
                }
            </div>
        )
        };

export default AnswerPanel;
