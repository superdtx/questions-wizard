/**
 * Created by TAbdullah on 8/8/2017.
 */

import React, {Component} from 'react';

    const Question = (props) => {
        return (
            <div>
                {props.question.title}-{props.question.content}
            </div>
        )
        };

    export default Question;
