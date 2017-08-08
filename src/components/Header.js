/**
 * Created by TAbdullah on 8/8/2017.
 */

import React, {Component} from 'react';

    const Header = (props) => {
        return (
            <div>
                <button onClick={props.handleGoBack}>prev</button>
            </div>
        )
        };

export default Header;
