import React from 'react';
import styles from './MainInfoSection.module.css';
import MainInfoBox from '../MainInfoBox/MainInfoBox';

export default class MainInfoSection extends React.Component{
    render(){
        return(
            <div className={styles.wrapper}>
                <MainInfoBox
                    number={'10'}
                    sentence={'Oddanych worków'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus                       vestibulum nulla leo, non venenatis justo lobortis non. Donec egestas id sem                    ut congue. Etiam suscipit lacus sed lacinia volutpat.'}/>
                <MainInfoBox
                    number={'5'}
                    sentence={'Wspartych organizacji'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus                       vestibulum nulla leo, non venenatis justo lobortis non. Donec egestas id sem                    ut congue. Etiam suscipit lacus sed lacinia volutpat.'}/>
                <MainInfoBox
                    number={'7'}
                    sentence={'Zorganizowanych zbiórek'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus                       vestibulum nulla leo, non venenatis justo lobortis non. Donec egestas id sem                    ut congue. Etiam suscipit lacus sed lacinia volutpat.'}/>
            </div>
        )
    }
}