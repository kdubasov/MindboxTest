import React from 'react';
import './Footer.css'

const Footer = ({lists}) => {

    let complArr = lists.filter(list => list.complete === true)

    return (
        <div className='footer-main'>
            <p>Всего задач: {lists.length}</p>
            <p>Выполненных задач: {complArr.length}</p>
        </div>
    );
};

export default Footer;