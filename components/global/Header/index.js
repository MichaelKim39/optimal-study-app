import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import styles from './header.module.scss';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const handlePressTab = () => setActive(!isActive);

    const PageLink = ({ path = '/', label }) => (
        <NavItem>
            <Link href={path}>
                <a className='nav-link'> {label} </a>
            </Link>
        </NavItem>
    );

    return (
        <div>
            <Navbar className={styles.header} color='light' light expand='md'>
                <Link href='/'>
                    <a className={styles.headerBrand}>Learn 2 Learn</a>
                </Link>
                <NavbarToggler onClick={handlePressTab} />
                <Collapse isOpen={isActive} navbar>
                    <Nav className='mr-auto' navbar>
                        <PageLink label='Landing' />
                        <PageLink path='/home' label='Home' />
                        <PageLink path='/subjects' label='Subjects' />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
