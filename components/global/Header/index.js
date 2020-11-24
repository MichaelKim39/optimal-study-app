import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <p className='blueColor'>Hello</p>
            <Link href='/home'>
                <a className={styles.navButton}> Home </a>
            </Link>
            <Link href='/subjects'>
                <a className={styles.navButton}> Subjects </a>
            </Link>
        </>
    );
};

export default Header;
