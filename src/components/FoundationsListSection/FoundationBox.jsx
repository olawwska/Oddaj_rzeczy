import React from 'react';
import classNames from 'classnames';

import styles from './FoundationBox.module.css';


export class FoundationBox extends React.Component{
    render(){

        const foundationBoxClasses = classNames({
            [styles["_paragraph--italic"]]: this.props.isItalic,
            [styles["_paragraph--normal"]]: this.props.isNormal
        });

        return(
            <div className={styles._wrapper}>
                <div className={styles._header}>{this.props.header}</div>
                <div className={foundationBoxClasses}>{this.props.text}</div>
                <div className={styles._after}></div>
            </div>
        )
    }
}


