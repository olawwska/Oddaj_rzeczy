import React from 'react';
import styles from './AboutUsSection.module.css';
import { Decoration } from '../Decoration/Decoration';

export default class AboutUsSection extends React.Component{
    render(){
        return(
            <div className={styles._wrapper}>
                <div className={styles._sidebar}>
                    <div><Decoration text={'O nas'}/>
                        <p className={styles._paragraph}> Nori grape silver beet broccoli kombu beet greens fava bean potato quadong celery. Bunya nuts black-eyes pea prairie turnip leek lentil turnip greens parsnip.</p></div>
                </div>
                <div className={styles._img}></div>
            </div>
        )
    }
}