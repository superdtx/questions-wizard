/**
 * Created by TAbdullah on 8/8/2017.
 */
// eslint-disable-next-line
import React, {Component} from 'react';

    const Question = (props) => {
        return (
            <div>
                {props.title}-{props.content}
            </div>
        )
    };

export default Question;
