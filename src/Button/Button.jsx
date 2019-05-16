import React from 'react';
import '../Button/Button.css';
let classNames = require('classnames');
classNames('Button', '--small');



export default class Button extends React.Component{
    render(){
        return(
            <button className={classNames({Button: true, '--small': this.props.isSmall})}>
                {this.props.text}</button>
        )
    }
}