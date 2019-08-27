import React from 'react';
import styles from './MainInfoBox.module.css';

export default class MainInfoBox extends React.Component{
    render(){
        return(
            <div className={styles._infoBox}>
                <span className={styles._number}>{this.props.number}</span>
                <span className={styles._span}>{this.props.sentence}</span>
                <p className={styles._text}>{this.props.text}</p>
            </div>
        )
    }
}