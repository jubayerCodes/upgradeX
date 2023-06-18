import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/images/zet_new_logo.svg';
import playstore from '../../assets/images/downloadBtnDark.a0f01343.svg'
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaBars } from "react-icons/fa";

const Header = () => {

    const dropdown = {
        width: 'calc(100vw - 30px)'
    }

    return (
        <header>
            <div className="header-container">
                <div className="navbar bg-base-100 border-b border-b-[rgb(208, 215, 224)] py-3 px-4 lg:px-24">
                    <div className="flex-1 p-0">
                        <Link href={'/'}>
                            <Image src={logo} className='w-[80px] lg:w-[90px]' alt='logo' priority={true} />
                        </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
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
                    <div className='lg:hidden'>
                        <div className="dropdown dropdown-end">
                            <FaBars tabIndex={0} className='text-[25px]' />
                            <ul style={dropdown} tabIndex={0} className="mt-6 dropdown-content menu p-2 shadow bg-base-100">
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
                                <li>
                                    <ActiveLink className='menu-item' href={'/download'}>
                                        Download ZET
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink className='menu-item' href={'/playStore'}>
                                        <Image src={playstore} alt='play store' priority={true} />
                                    </ActiveLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;