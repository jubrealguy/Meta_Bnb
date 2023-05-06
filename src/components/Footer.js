import logoImg from '../img/logo-img-invert.png';
import logoTxt from '../img/logo-txt-invert.png';
import fb from '../img/fb.png';
import ig from '../img/ig.png';
import tw from '../img/tw.png';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__images">
                <div className="footer__logo">
                    <img src={logoImg} alt="" className="footer__img" />
                    <img src={logoTxt} alt="" className="footer__txt" />
                </div>
                <ul className="footer__icons">
                    <img src={fb} alt="" className="footer_icon" />
                    <img src={ig} alt="" className="footer_icon img-ig"/>
                    <img src={tw} alt="" className="footer_icon" />
                </ul>
                <p className="footer__copy">&copy; 2022 Metabnb</p>
            </div>
            <ul className="footer__list">
                <li className="footer__head">Community</li>
                <li className="footer__item">NFTs</li>
                <li className="footer__item">Token</li>
                <li className="footer__item">Landlord</li>
                <li className="footer__item">Discord</li>
            </ul>
            <ul className="footer__list">
                <li className="footer__head">Place</li>
                <li className="footer__item">Castle</li>
                <li className="footer__item">Frame</li>
                <li className="footer__item">Beach</li>
                <li className="footer__item">Learn More</li>
            </ul>
            <ul className="footer__list">
                <li className="footer__head">About us</li>
                <li className="footer__item">Road Mpas</li>
                <li className="footer__item">Creators</li>
                <li className="footer__item">Career</li>
                <li className="footer__item">Contact us</li>
            </ul>
        </section>
    )
}

export default Footer;