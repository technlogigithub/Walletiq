// Button.js
import React from 'react';

interface ButtonProps {
    text: string;
    icon?: string;
    className?: string;
    onClick?: () => void; // Add this line
}

const Button: React.FC<ButtonProps> = ({ text, icon, className, onClick }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {icon && <img src={icon} alt="" />}
            {text}
        </button>
    );
};

export default Button;
