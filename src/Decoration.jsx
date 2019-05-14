import React from 'react';
import styles from './Decoration.module.css';

export default class Decoration extends React.Component{
    render(){
        return (
            <div className={styles.wrapper}>
                <p className={styles.paragraph}>{this.props.text}</p>
                <div className={styles.decoration}></div>
            </div>
        )
    }
}
