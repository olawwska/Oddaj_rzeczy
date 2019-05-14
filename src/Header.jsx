import React from 'react';
import styles from './Header.module.css';
import Button from './Button.jsx';
import Decoration from './Decoration';

export default class Header extends React.Component{
    render(){
        return (
            <header className={styles.header}>
                <div className={styles.background}></div>
                <nav className={styles.nav}>
                </nav>
                <div className={styles["section-main"]}>
                    <Decoration text={'Zacznij pomagać! ' +
                    'Oddaj niechciane rzeczy w zaufane ręce'}/>
                    <div className={styles["button-wrapper"]}>
                        <Button text={'Oddaj rzeczy'}/>
                        <Button text={'Zorganizuj zbiórkę'}/>
                    </div>
                </div>
            </header>
        )
    }
}