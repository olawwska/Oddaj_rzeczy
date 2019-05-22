import React from 'react';

import { Button } from '../Button/Button.jsx';
import Decoration from '../Decoration/Decoration.jsx';
import styles from './Header.module.css';

export default class Header extends React.Component{
    render(){
        return (
            <header className={styles.Header__header}>
                <div className={styles.Header__background}></div>
                <nav className={styles.Header__nav}>
                    <div className={styles.Header__nav__topButtons}>
                        <Button isSmall={true} text={'Zaloguj'}/>
                        <Button isSmall={true} text={'Załóż konto'}/>
                    </div>
                    <div className={styles.Header__nav__bottomButtons}>
                        <Button  isSmall={true} text={'Start'}/>
                        <Button  isSmall={true} text={'O co chodzi?'}/>
                        <Button  isSmall={true} text={'O nas'}/>
                        <Button  isSmall={true} text={'Fundacje i organizacje'}/>
                        <Button  isSmall={true} text={'Kontakt'}/>
                    </div>
                </nav>
                <div className={styles.Header__sectionMain}>
                    <Decoration text={'Zacznij pomagać!'} text2={'Oddaj niechciane rzeczy w zaufane ręce'}/>
                    <div className={styles.Header__buttonWrapper}>
                        <Button  text={'Oddaj rzeczy'}/>
                        <Button  text={'Zorganizuj zbiórkę'}/>
                    </div>
                </div>
            </header>
        )
    }
}
