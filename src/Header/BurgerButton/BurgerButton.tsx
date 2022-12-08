import React from 'react';
import s from './BurgerButton.module.scss'

type PropsType = {
    isOpen?: boolean
    callback?: () => void
}

export const BurgerButton: React.FC<PropsType> = ({isOpen = false, callback}) => {

    const openClass = isOpen ? s.open : ''

    return (
        <div className={`${s.burgerBlock} ${openClass}`} onClick={callback}>
            <div className={s.burgerBtn}></div>
        </div>
    )
}