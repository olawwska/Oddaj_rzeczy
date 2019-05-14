import React from 'react';
import styles from './Header.module.css';
import Button from './Button.jsx';
import Decoration from './Decoration';
import Button_small from './Button_small';

export default class Header extends React.Component{
    render(){
        return (
            <header className={styles.header}>
                <div className={styles.background}></div>
                <nav className={styles.nav}>
                    <div className={styles["nav-topButtons"]}>
                        <Button_small text={'Zaloguj'}/>
                        <Button_small text={'Załóż konto'}/>
                    </div>
                    <div className={styles["nav-bottomButtons"]}>
                        <Button_small text={'Start'}/>
                        <Button_small text={'O co chodzi?'}/>
                        <Button_small text={'O nas'}/>
                        <Button_small text={'Fundacje i organizacje'}/>
                        <Button_small text={'Kontakt'}/>
                    </div>
                </nav>
                <div className={styles["section-main"]}>
                    <Decoration text={'Zacznij pomagać!'} text2={'Oddaj niechciane rzeczy w zaufane ręce'}/>
                    <div className={styles["button-wrapper"]}>
                        <Button text={'Oddaj rzeczy'}/>
                        <Button text={'Zorganizuj zbiórkę'}/>
                    </div>
                </div>
            </header>
        )
    }
}