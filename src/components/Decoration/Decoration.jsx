import React from 'react';
import styles from './Decoration.module.css';

export class Decoration extends React.Component{
    render(){
        let texts;
        if (Array.isArray(this.props.text)) {
            texts = this.props.text;
        } else {
            texts = [this.props.text];
        }

        return (
            <div className={styles._wrapper}>
                {
                    texts.map((text) => <p className={styles._paragraph}>{text}</p>)
                }
                <div className={styles._decoration}/>
            </div>
        )
    }
}
