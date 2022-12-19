import {Head} from "next/document";
import Header from "./Header";
import Sort from "./sort";
import Link from "next/link";
import Image from "next/image";
import Phone from "../app/img/phone.svg";


const MainConteiner = ({children, title}) => {
    return(
        <>
            <div className='wrapper'>
                <Header />
                <Sort />
                {children}
            </div>
            <footer className="footer">
                <div className="wrapper">
                    <div className="footerItems">
                        <div className="footerBlockNav">
                            <h1 className="footerTitle">НАВИГАЦИЯ</h1>
                            <div className="footerNav">
                                <div className="footerNavItems">
                                    <Link className="footerLink" href={'/'}>Кухни</Link>
                                    <Link className="footerLink" href={'/'}>Спальни</Link>
                                    <Link className="footerLink" href={'/'}>Гостинные</Link>
                                </div>
                                <div className="footerNavItems">
                                    <Link className="footerLink" href={'/'}>Прихожие</Link>
                                    <Link className="footerLink" href={'/'}>Офисная мебель</Link>
                                    <Link className="footerLink" href={'/'}>Детская</Link>
                                </div>
                                <div className="footerNavItems">
                                    <Link className="footerLink" href={'/'}>Шкафы</Link>
                                    <Link className="footerLink" href={'/'}>Матрасы</Link>
                                    <Link className="footerLink" href={'/'}>Мягкая мебель</Link>
                                </div>
                            </div>
                            <div className="footerBottom">
                                <Link href={'/'} className="footerBottom red">Акция</Link>
                                <Link href={'/'} className="footerBottom">Новинки</Link>
                            </div>
                        </div>
                        <div className="footerBlockAbout">
                            <div className="footer__right-top">
                                <Link href={'/'} className={'/'}>LG</Link>
                                <p>г. Анапа, Анапское шоссе,</p>
                                <p> 30 Ж/К Черное море</p>
                            </div>
                            <div className="footer__right-bot">
                                <Link className="tel" href="tel:89648999119">8 (964) 89 99 119</Link>
                                <Link href={'/'} className="int">INSTAGRAM</Link>
                                <Link href={'/'} className="mail">mebel_loft_anapa@mail.ru</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MainConteiner;