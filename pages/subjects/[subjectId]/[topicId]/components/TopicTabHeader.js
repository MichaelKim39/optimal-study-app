import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import styles from '../Topic.module.scss';

const TopicTabHeader = ({ currentTab, changeTabs }) => {
    const isTabOpen = (tabNumber) => {
        return currentTab === tabNumber;
    };

    return (
        <Nav tabs fill pills className={styles.tabHeader}>
            <NavItem>
                <NavLink
                    className={`${
                        isTabOpen(1) ? styles.tabActive : styles.tabInactive
                    }`}
                    onClick={() => {
                        changeTabs(1);
                    }}
                >
                    Notes
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={`${
                        isTabOpen(2) ? styles.tabActive : styles.tabInactive
                    }`}
                    onClick={() => {
                        changeTabs(2);
                    }}
                >
                    Cards
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default TopicTabHeader;
