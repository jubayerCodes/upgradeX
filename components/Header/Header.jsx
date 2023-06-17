import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/images/zet_new_logo.svg';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="navbar bg-base-100 border-b border-b-[rgb(208, 215, 224)] py-3 px-24">
                    <div className="flex-1 p-0">
                        <Link href={'/'}>
                            <Image src={logo} width={90} alt='logo' />
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-lg">
                            <li>
                                <ActiveLink className='menu-item' href={'/'}>
                                    Home
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink className='menu-item' href={'/about'}>
                                    About Us
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink className='menu-item' href={'/partners'}>
                                    Partner With Us
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink className='menu-item' href={'/blog'}>
                                    Blog
                                </ActiveLink>
                            </li>
                        </ul>
                        <button className="bg-[#2075f0] text-white hover:bg-[#2075f0] font-normal py-1 px-2 rounded-md">Download ZET</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;