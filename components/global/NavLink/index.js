import React from 'react'
import Link from 'next/link';

function NavLink({ label, href, className }) {
    return (
        <div>
            <Link href={href}>
                <a className={className}>{label}</a>
            </Link>
        </div>
    )
}

export default NavLink
