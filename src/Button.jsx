import React from 'react';
import styles from './Button.module.css';



export default class Button extends React.Component{
    render(){
        return(
            <button className={styles.big} >{this.props.text}</button>
        )
    }
}