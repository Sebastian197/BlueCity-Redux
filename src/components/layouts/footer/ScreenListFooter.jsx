import React from 'react';

const ScreenListFooter = ({ title, children }) => {


    const linksArray = children ? [...children] : null;

    const links = linksArray && linksArray.map((link, index) => (
        <li
            key={index}
        >
            <a href={link.href} rel={link.rel} target={link.target}>{link.content}</a>
        </li>
    ))

    const ul = links && (
        <ul className='list-unstyled'>
            {links}
        </ul>
    )

    return (
        <>
            <h5 className='mt-4'>{title}</h5>
            {ul}
        </>
    )
}

export default ScreenListFooter;
