import React from 'react';
import styles from './MainInfoBox.module.css';

export default class MainInfoBox extends React.Component{
    render(){
        return(
            <div className={styles.__infoBox}>
                <span className={styles.number}>{this.props.number}</span>
                <span className={styles.span}>{this.props.sentence}</span>
                <p className={styles.text}>{this.props.text}</p>
            </div>
        )
    }
}