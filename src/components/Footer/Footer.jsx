import React from 'react';
import TextField from '@material-ui/core/TextField';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

import { Decoration } from '../Decoration/Decoration';
import { Button } from '../Button/Button';

import styles from './Footer.module.css';

export default class Footer extends React.Component{
    render(){
        return(
            <div className={styles._wrapper}>
                <Decoration text={'Skontaktuj się z nami'}/>
                <form className={styles._form}>FORMULARZ KONTAKTOWY
                    <div className={styles._inputWrapper}>
                        <TextField
                            className={styles["_input--short"]}
                            placeholder="Imię"
                        />
                        <TextField
                            className={styles["_input--short"]}
                            placeholder="Email"
                        />
                    </div>
                    <TextField
                        className={styles["_input"]}
                        placeholder="Wiadomość"
                    />
                    <Button
                            type={'submit'}
                            text={'Wyślij'}
                            isSmall={true}/>
                </form>
                <footer className={styles._footer}>
                    <div className={styles["_footer--left"]}> Copyright 2015 by Anna Dadej</div>
                    <div className={styles["_footer--right"]}>
                        {/*<div className={styles['_icon-wrapper']}><FontAwesomeIcon className={styles._icon} icon={faInstagram}/></div>*/}
                        {/*<FontAwesomeIcon className={styles._icon} icon={faFacebookF}/>*/}
                    </div>
                </footer>
            </div>
        )
    }
}
