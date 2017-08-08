/**
 * Created by TAbdullah on 8/8/2017.
 */

import React, {Component} from 'react';
import Header from '../components/Header';
import Question from '../components/Question';
import AnswerPanel from '../components/AnswersPanel';

    class Main extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return (
                <div>
                    <Header/>
                    <Question/>
                    <AnswerPanel/>
                </div>
            );
        }
    }

export default Main;
