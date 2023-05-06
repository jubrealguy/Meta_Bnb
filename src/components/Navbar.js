import imgLogo from '../img/logo-img.png';
import imgTxt from '../img/logo-txt.png';
import {Link} from 'react-router-dom';
import bar from '../img/fa-bar.png';

import metataskred from '../img/metamask-red.png';
import WalletConnect from '../img/walletconnect.png';
import direction from '../img/direction.png'
import x from '../img/x.png';

import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Navbar() {
    const [clickedConnect, setclickedConnect] = useState(false);
    const [clickedNav, setclickedNav] = useState(false);
    // const navigate = useNavigate();

    const connectWallet = async (e) => {
        e.preventDefault();
        setclickedConnect(true);
    }

    const cancel = () => {
        setclickedConnect(false);
    }

    const nav = (e) => {
        e.preventDefault();
        setclickedNav(!clickedNav);
    }

    return (
        <header className="header">
            <div className="header__logo">
                <img src={imgLogo} alt="" className="logo-1" />
                <img src={imgTxt} alt="" className="logo-2" />
            </div>
            <div>
                <div href="##" class="icon">
                    <img src={bar} alt='' className='fa-bar' onClick={nav}/>
                </div>
            </div>
            <nav className="header__nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/place" className="nav-link">Place to stay</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">NFTs</Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">Community</Link></li>
                    <li className="header__btn">
                        <button className="header__btn-link" onClick={connectWallet}>Connect wallet</button>
                    </li>
                </ul>
            </nav>

            {clickedConnect ? <div className = "connectWallet">
            <div>
                <h4 className = "connectWallet__head">Connect Wallet</h4>
                <img src={x} alt="" className = "connectWallet-imgdir" onClick={cancel} />
            </div>
            <p className = "connectWallet__paragraph">Choose your preferred wallet</p>
            <ul>
                <li>
                    <img src={metataskred} alt="" className = "connectWallet-img" />
                    <p className = "connectWallet-name">Metamask</p>
                    <img src={direction} alt="" className = "connectWallet-imgdir" />
                </li>
                <li>
                    <img src={WalletConnect} alt="" className = "connectWallet-img" />
                    <p className = "connectWallet-name">WalletConnect</p>
                    <img src={direction} alt="" className = "connectWallet-imgdir" />
                </li>
            </ul>
            </div> : " "}

            {clickedNav ?  <nav className="header__nav-mobile">
                <ul className="nav-list-mobile">
                    <li className="nav-item-mobile"><Link to='/' className="nav-link-mobile">Home</Link></li>
                    <li className="nav-item-mobile"><Link to='/place' className="nav-link-mobile">Place to stay</Link></li>
                    <li className="nav-item-mobile"><a href="##" className="nav-link-mobile">NFTs</a></li>
                    <li className="nav-item-mobile"><a href="##" className="nav-link-mobile">Community</a></li>
                    <li className="header__btn-mobile">
                        <button className="header__btn-link-mobile" onClick={connectWallet}>Connect wallet</button>
                    </li>
                </ul>
            </nav> : ""}
        </header>
    )
}

export default Navbar;