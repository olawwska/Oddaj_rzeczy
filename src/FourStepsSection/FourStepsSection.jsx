import React from 'react';
import styles from './FourStepsSection.module.css';
import Decoration from '../Decoration/Decoration';
import Button from '../Button/Button';

export default class FourStepsSection extends React.Component{
    render(){
        return(
            <div className={styles.wrapper}>
                <Decoration text={'Wystarczą cztery proste kroki'}/>
                <div className={styles.__stepsBox}></div>
                <Button text={'Załóż konto'} isSmall={false}/>
            </div>
        )
    }
}