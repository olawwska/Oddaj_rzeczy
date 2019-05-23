import React from 'react';
import styles from './StepBox.module.css';
import 'font-awesome/css/font-awesome.min.css';

export class StepBox extends React.Component{
    render(){
        return(
            <div className={styles._wrapper}>
                <div className={styles._icon}><i className="fa fa-thumbs-up"></i></div>
                <div className={styles._sentence}>{this.props.sentence}</div>
                <div className={styles._after}></div>
                <div className={styles._paragraph}>{this.props.text}</div>
            </div>
        )
    }
}
