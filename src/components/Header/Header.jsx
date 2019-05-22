import React from 'react';

import { Button } from '../Button/Button.jsx';
import Decoration from '../Decoration/Decoration.jsx';
import styles from './Header.module.css';

export default class Header extends React.Component{
    render(){
        return (
            <header className={styles._header}>
                <div className={styles._background}></div>
                <nav className={styles._nav}>
                    <div className={styles["_nav-topButtons"]}>
                        <Button isSmall={true} text={'Zaloguj'}/>
                        <Button isSmall={true} text={'Załóż konto'}/>
                    </div>
                    <div className={styles["_nav-bottomButtons"]}>
                        <Button  isSmall={true} text={'Start'}/>
                        <Button  isSmall={true} text={'O co chodzi?'}/>
                        <Button  isSmall={true} text={'O nas'}/>
                        <Button  isSmall={true} text={'Fundacje i organizacje'}/>
                        <Button  isSmall={true} text={'Kontakt'}/>
                    </div>
                </nav>
                <div className={styles["_section-main"]}>
                    <Decoration text={'Zacznij pomagać!'} text2={'Oddaj niechciane rzeczy w zaufane ręce'}/>
                    <div className={styles["_button-wrapper"]}>
                        <Button  text={'Oddaj rzeczy'}/>
                        <Button  text={'Zorganizuj zbiórkę'}/>
                    </div>
                </div>
            </header>
        )
    }
}
