import React, { useState } from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import styles from './header.module.scss';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const handlePressTab = () => setActive(!isActive);

    const SigninButton = () => (
        <NavItem>
            <span className={`showPointer ${styles.headerNavButton}`}>
                Signin
            </span>
        </NavItem>
    );

    const SignoutButton = () => (
        <NavItem>
            <span className={`showPointer ${styles.headerNavButton}`}>
                Signout
            </span>
        </NavItem>
    );

    const PageLink = ({ path = '/', label }) => (
        <NavItem>
            <Link href={path}>
                <a className={`${styles.headerNavButton}`}>{label}</a>
            </Link>
        </NavItem>
    );

    return (
        <div>
            <Navbar className={styles.header} color='light' light expand='md'>
                <Link href='/'>
                    <a className={`${styles.headerBrand}`}>Learn 2 Learn</a>
                </Link>
                <NavbarToggler onClick={handlePressTab} />
                <Collapse isOpen={isActive} navbar>
                    <Nav className='mr-auto' navbar>
                        <PageLink label='Landing' />
                        <PageLink path='/home' label='Home' />
                        <PageLink path='/subjects' label='Subjects' />
                    </Nav>
                    <Nav navbar>
                        <SigninButton />
                        <SignoutButton />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
