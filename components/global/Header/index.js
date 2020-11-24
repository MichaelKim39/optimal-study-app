import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <Link href='/home'>
                <a> Home </a>
            </Link>
            <Link href='/subjects'>
                <a> Subjects </a>
            </Link>
        </>
    );
};

export default Header;
