import React from 'react';
import s from './SocialNetworkIcon.module.scss'

type PropsType = {
    imgUrl: string
}

export const SocialNetworkIcon: React.FC<PropsType> = ({imgUrl}) => {
    return (
        <a className={s.iconLink}>
            <img className={s.logoImg} src={imgUrl} alt="social network"/>
        </a>
    )
}