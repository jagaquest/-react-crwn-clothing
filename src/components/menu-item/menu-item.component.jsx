import React from 'react';
import "./menu-item.style.scss";

const MenuItem = ({ title, imgUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{ backgroundImage: `url(${imgUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <div className='subtitle'>SHOP NOW</div>
        </div>
    </div>
);

export default MenuItem;
