import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

export class Button extends React.Component {
    render() {
        // Warto wyodrębnić klasy przed JSX / DOM - zwiększy to czytelność kodu
        // Zauważ, że używamy stylów modułu jako kluczy obiektu - zostaną one poprawnie potem przetłumaczone na nazwy klas,
        // np. styles.Button zamieni się w "Button_LOSOWY-IDENTYFIKATOR", a drugi styl w "Button--small__LOSOWY-IDENTYFIKATOR"
        // Mamy najlepsze z 2 światów - BEM i CSS modules! :)
        const buttonClasses = classNames({
            [styles.Button]: true,
            [styles["Button--small"]]: this.props.isSmall
        });

        return (
            <button className={buttonClasses}>
                {this.props.text}</button>
        )
    }
}
