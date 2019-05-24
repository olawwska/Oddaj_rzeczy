import React from 'react';
import styles from './FoundationsListSection.module.css';

import {Decoration} from '../Decoration/Decoration';
import {Button} from '../Button/Button';
import {FoundationBox} from './FoundationBox';


export default class FoundationsListSection extends React.Component{
    render(){

        return(
            <div className={styles._wrapper}>
                <div className={styles["_wrapper--top"]}>
                    <Decoration text={'Komu pomagamy?'}/>
                    <div className={styles["_wrapper--buttons"]}>
                        <Button isModerate={true} text={'Fundacjom'}/>
                        <Button isModerate={true} text={'Organizacjom pozarządowym'}/>
                        <Button isModerate={true} text={'Lokalnym zbiórkom'}/>
                    </div>
                    <p className={styles._paragraph}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi                              współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego                        potrzebują.</p>
                </div>
                <div className={styles._wrapper}>
                    <div className={styles["_wrapper--bottom"]}>
                        <div className={styles["_wrapper--left"]}>
                            <FoundationBox
                                isItalic={true}
                                header={'Fundacja "Dbam o Zdrowie"'}
                                text={'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji                                 życiowej. '}

                            />
                            <FoundationBox
                                isItalic={true}
                                header={'Fundacja "Dla dzieci"'}
                                text={'Cel i misja: Pomoc dzieciom z ubogich rodzin. '}
                            />
                            <FoundationBox
                                isItalic={true}
                                header={'Fundacja "Bez domu"'}
                                text={'Cel i misja: Pomoc dla osób nie posiadających miejsca                                        zamieszkania '}
                            />
                        </div>
                        <div className={styles["_wrapper--right"]}>
                            <FoundationBox
                                isNormal={true}
                                text={'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}

                            />
                            <FoundationBox
                                isNormal={true}
                                text={'ubrania, meble, zabawki'}
                            />
                            <FoundationBox
                                isNormal={true}
                                text={'ubrania, jedzenie, ciepłe koce'}
                            />
                        </div>
                        <div className={styles._carousel}>
                            <div className={styles["--border"]}>1</div>
                            <div className={styles._number}>2</div>
                            <div className={styles._number}>3</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}