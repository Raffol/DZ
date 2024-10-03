import React from 'react';
import './TextBlock.css';

const TextBlock = ({ text }) => {
    return (
        <div className="text-block">
            <p>{text}</p>
        </div>
    );
};

export default TextBlock;
