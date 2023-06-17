'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveLink = ({ children, href }) => {

    const pathname = usePathname()

    return (
        <Link className={`menu-item ${pathname === href ? 'active-link' : ''}`} href={href}>
            {children}
        </Link>
    );
};

export default ActiveLink;