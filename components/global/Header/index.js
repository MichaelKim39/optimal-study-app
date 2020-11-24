import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <p className='blueColor'>Hello</p>
            <Link href='/home'>
                <a className='navButton'> Home </a>
            </Link>
            <Link href='/subjects'>
                <a className='navButton'> Subjects </a>
            </Link>
            <style jsx>{`
                .navButton {
                    color: red;
                }
            `}</style>
        </>
    );
};

export default Header;
