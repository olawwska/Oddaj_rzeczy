import React from 'react';
import styles from './FourStepsSection.module.css';
import { Decoration } from '../Decoration/Decoration';
import { Button } from '../Button/Button';
import { StepBox } from '../FourStepsSection/StepBox';
import 'font-awesome/css/font-awesome.min.css';


export default class FourStepsSection extends React.Component{
    render(){
        return(
            <div className={styles._wrapper}>
                <Decoration text={'Wystarczą 4 proste kroki'}/>
                <div className={styles._stepsBox}>
                    <StepBox
                        sentence={'Wybierz rzeczy'}
                        text={'ubrania, zabawki, sprzęt i inne'}/>
                    <StepBox
                        sentence={'Spakuj je'}
                        text={'skorzystaj z worków na smieci'}/>
                    <StepBox
                        sentence={'Zdecyduj komu chcesz pomóc'}
                        text={'wybierz zaufane miejsce'}/>
                    <StepBox
                        sentence={'Zamów kuriera'}
                        text={'kurier przyjedzie w dogodnym terminie'}/>
                </div>
                <Button text={'Załóż konto'} isSmall={false}/>
            </div>
        )
    }
}
