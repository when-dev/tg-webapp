import React from 'react';
import styles from './styles.module.scss';
import { userPic } from '../../assets/';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks/redux';
import { barToLogoMap } from '../../constants';
import { BarName } from '../../types';

type Props = {
    type?: 'afisha' | 'reservations'
}
const Header = ({type = 'afisha'}: Props) => {
    // selectCurrentBar, для этого скорее всего надо будет сделать barSlice
    const currentBar: BarName = 'rovesnik' // useAppSelector(selectCurrentBar);

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.headerLogo}>
                    <Link to={type === 'afisha' ? "/": "/reservation"}>
                        <img src={barToLogoMap.get(currentBar)} alt='barLogo' />
                    </Link>
                </div>
                <div className={styles.headerNav}>
                    <Link to={type === 'afisha' ? "/my/events": "/my/reservations"}>
                        <img src={userPic} alt='userPic' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;