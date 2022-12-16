import React, {Profiler, useState} from 'react'
import Image from 'next/image'
import Link from 'next/Link'
//img
import Logo from '../app/img/LOGO.svg'
import Search from '../app/img/search-icon.svg'
import Delivery from '../app/img/delivery-icon.svg'
import Phone from '../app/img/phone.svg'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <Image src={Logo} alt="logo"/>
                </div>
                {/* ========== */}
                <ul className="list">
                    <li className="listItems"><Link href={'/'}>Главная</Link></li>
                    <li className="listItems"><Link href={'/about'}>О нас</Link></li>
                    <li className="listItems"><Link href={'/contacts'}>Контакты</Link></li>
                </ul>
                {/* ========== */}
                <div className="search">
                    <Image className="searchImg" src={Search} alt="search"/>
                    <input className="searchInput" type="text" placeholder='поиск'/>
                </div>
                {/* ========== */}
                <div className="other">
                    <a className="otherLink" href="tel:89648999119">
                        <Image className="otherImg" src={Phone} alt="phone"/>8 (964) 89 99 119
                    </a>
                    <Link className="otherDelivery" href={'/delivery'}>
                        <Image className="otherDeliveryImg" src={Delivery} alt="delivery"/>
                        <p className="otherDeliveryText">Доставка</p>
                    </Link>
                </div>
                <div className="icon">
                    <ul className="iconList">
                        <li className="iconListItems">
                            <Link className="iconLink" href={"/"}>
                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z" stroke="black" stroke-linejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="iconListItems">
                            <Link className="iconLink" href={"/bag"}>
                                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.70653 5.5V4.85714C4.70653 2.7269 6.43343 1 8.56367 1C10.6939 1 12.4208 2.7269 12.4208 4.85714V5.5M2.00802 8.5723L1.00802 17.5723C0.923392 18.3339 1.51957 19 2.28587 19H14.8415C15.6078 19 16.2039 18.3339 16.1193 17.5723L15.1193 8.5723C15.047 7.92117 14.4966 7.42857 13.8415 7.42857H3.28587C2.63073 7.42857 2.08036 7.92117 2.00802 8.5723Z" stroke="black"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="iconListItems">
                            <Link className="iconLink" href={"/profile"}>
                                <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2924 4.85714C11.2924 6.98757 9.56458 8.71428 7.43276 8.71428C5.30094 8.71428 3.5731 6.98757 3.5731 4.85714C3.5731 2.72671 5.30094 1 7.43276 1C9.56458 1 11.2924 2.72671 11.2924 4.85714Z" stroke="black" stroke-linecap="square"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8655 19H1C1 18.0865 1 17.2174 1 16.4304C1 14.2988 2.72803 12.5714 4.85966 12.5714H10.0059C12.1375 12.5714 13.8655 14.2988 13.8655 16.4304C13.8655 17.2174 13.8655 18.0865 13.8655 19Z" stroke="black" stroke-linecap="square"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;