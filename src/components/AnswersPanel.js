/**
 * Created by TAbdullah on 8/8/2017.
 */

import React, {Component} from 'react';

    const AnswerPanel = (props) => {

        return (
            <div>
                {
                props.answers.map(a => {
                    return (
                        <button>{a.answer}</button>
                    )
                })
                }
            </div>
        )
        };

export default AnswerPanel;
