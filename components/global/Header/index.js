import React, { useState } from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { log } from '@/utils/logger'

import styles from './header.module.scss';

import NavLink from '../NavLink'

const Header = ({ userInfo, userLoading }) => {
    const [isActive, setActive] = useState(false);
    const handlePressTab = () => setActive(!isActive);

    const PageLink = ({ path = '/', label }) => (
        <NavItem>
            <NavLink label={label} href={path} className={`showPointer ${styles.headerNavButton}`}/>
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
                        <PageLink label='About' />
                        <PageLink path='/home' label='Home' />
                        <PageLink path='/subjects' label='Subjects' />
                    </Nav>
                    <Nav navbar>
                        {
                            !!userInfo ? (
                                <PageLink path='/api/v1/signout' label='Signout' />
                                ) : (
                                <PageLink path='/api/v1/signin' label='Signin' />
                            )
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
