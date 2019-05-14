import React from 'react';
import styles from './Button_small.module.css';

export default class Button_small extends React.Component{
    render(){
        return(
            <button className={styles.small}>{this.props.text}</button>
        )
    }
}