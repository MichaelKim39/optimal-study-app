import React, { useState } from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { log } from '@/utils/logger';

import styles from './header.module.scss';

import NavLink from '../NavLink';

const Header = ({ userInfo, userLoading, isTransparent = false }) => {
    const [isActive, setActive] = useState(false);
    const handlePressTab = () => setActive(!isActive);
    const textColor = isTransparent ? 'lightText' : 'darkText';

    const PageLink = ({ path = '/', label }) => (
        <NavItem>
            <NavLink
                label={label}
                href={path}
                className={`showPointer ${styles.headerNavButton} ${textColor}`}
            />
        </NavItem>
    );

    return (
        <div>
            <Navbar
                className={styles.header}
                color={isTransparent ? 'transparent' : 'light'}
                expand='md'
            >
                <Link href='/'>
                    <a className={`${styles.headerBrand} ${textColor}`}>
                        Learn 2 Learn
                    </a>
                </Link>
                <NavbarToggler onClick={handlePressTab} />
                <Collapse isOpen={isActive} navbar>
                    <Nav className='mr-auto' navbar>
                        <PageLink path='/about' label='About' />
                        <PageLink path='/home' label='Home' />
                        <PageLink path='/subjects' label='Subjects' />
                    </Nav>
                    <Nav navbar>
                        {!!userInfo ? (
                            <PageLink path='/api/v1/signout' label='Signout' />
                        ) : (
                            <PageLink path='/api/v1/signin' label='Signin' />
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
