import React, {ButtonHTMLAttributes} from 'react';
import s from './Button.module.scss'


type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {

}

const Button: React.FC<PropsType> = ({className, children, ...props}) => {

    return (
        <button className={`${s.Button} ${className}`} {...props}>{children}</button>
    );
};

export default Button;