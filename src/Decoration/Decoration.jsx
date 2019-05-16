import React from 'react';
import styles from '../Decoration/Decoration.module.css';

export default class Decoration extends React.Component{
    render(){
        return (
            <div className={styles._wrapper}>
                <p className={styles._paragraph}>{this.props.text}</p>
                <p className={styles._paragraph}>{this.props.text2}</p>
                <div className={styles._decoration}></div>
            </div>
        )
    }
}