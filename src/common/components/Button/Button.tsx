import React, {AnchorHTMLAttributes} from 'react';
import s from './Button.module.scss'


type PropsType = AnchorHTMLAttributes<HTMLAnchorElement> & {

}

const Button: React.FC<PropsType> = ({className, children, ...props}) => {

    return (
        <a className={`${s.Button} ${className}`} {...props}>{children}</a>
    );
};

export default Button;