import MainConteiner from "../components/MainConteiner";
import phone from '../app/img/phone.svg';
import mail from '../app/img/about/mail.png'
import Link from 'next/Link';
import inst from '../app/img/about/inst.png';
import Image from "next/Image";

const Contacts = () => {
    return(
        <MainConteiner>
            <div className="container">
                <section className="form">
                    <div className="form__left">
                        <h3>Свяжитесь с нами</h3>
                        <form action>
                            <div className="form__content">
                                <div className="form__inputs">
                                    <label htmlFor>Ваше имя</label>
                                    <input type="text" />
                                </div>
                                <div className="form__inputs">
                                    <label htmlFor>Ваш e-mail</label>
                                    <input type="email" />
                                </div>
                            </div>
                            <div className="form__text">
                                <label htmlFor>Сообщение</label>
                                <textarea name id defaultValue={""} />
                            </div>
                            <div className="form__btn">
                                <button className="file">Прикрепить файл</button>
                                <button className="send">Отправить</button>
                            </div>
                        </form>
                    </div>
                    <div className="form__right">
                        <Link className="tel" href={"tel:89648999119"}><Image className="aboutIcon" src={phone}/>8(964)8999119</Link><br/> <br/>
                        <Link href={"/"} className="mail"><Image className="aboutIcon" src={mail} /> mebel_loft_anapa@mail.ru</Link>
                        <div className="inst">
                            <Link href={"/"} className="int"><Image className="aboutIcon" src={inst}/>INSTAGRAM</Link>
                        </div>
                        <p>Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море</p>
                    </div>
                </section>
            </div>


        </MainConteiner>
    )
}

export default Contacts