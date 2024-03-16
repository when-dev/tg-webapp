import classNames from 'classnames';
import React, { FormEvent } from 'react';
import styles from './styles.module.scss';

type Props = {
    className?: string,
    text: React.ReactNode,
    type?: 'blue' | 'white' | 'textRed' | 'widthBtn' | 'toBook' | 'whiteBtnToBuy' | 'checkAfisha' | 'whiteChangeReserve' | 'submitBtn' | 'submitReserve' | 'reserveTable' | 'changeReserve',
    onClick: (e?: any) => void,
}
const Button = ({className, text, type, onClick}: Props) => {
    const buttonClasses = classNames(className, styles.root, {
        [styles.blue]: type === 'blue',
        [styles.white]: type === 'white',
        [styles.textRed]: type === 'textRed',
        [styles.widthBtn]: type === 'widthBtn',
        [styles.toBook]: type === 'toBook',
        [styles.whiteBtnToBuy]: type === 'whiteBtnToBuy',
        [styles.checkAfisha]: type === 'checkAfisha',
        [styles.whiteChangeReserve]: type === 'whiteChangeReserve',
        [styles.submitBtn]: type === 'submitBtn',
        [styles.submitReserve]: type === 'submitReserve',
        [styles.reserveTable]: type === 'reserveTable',
        [styles.changeReserve]: type === 'changeReserve',
    });

    return (
        <div
            className={buttonClasses}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default Button;