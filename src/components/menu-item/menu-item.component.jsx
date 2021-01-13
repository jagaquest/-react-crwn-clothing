import React from 'react';
import { withRouter } from 'react-router-dom';
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history, match }) => (
    <div className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${title}`)}>

        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <div className='subtitle'>SHOP NOW</div>
        </div>
    </div>
);

export default withRouter(MenuItem);
