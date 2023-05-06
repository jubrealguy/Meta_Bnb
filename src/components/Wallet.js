import mbtoken from '../img/mbtoken.png';
import metatask from '../img/metamask.png';
import opensea from '../img/opensea.png';

function Wallet() {
    return (
        <div className="wallet">
            <div className="wallet__name">
                <img src={mbtoken} alt="" className="wallet__img" />
                <a href="##" className="wallet__link">MBToken</a>
            </div>
            <div className="wallet__name">
                <img src={metatask} alt="" className="wallet__img" />
                <a href="##" className="wallet__link">METATASK</a>
            </div>
            <div className="wallet__name">
                <img src={opensea} alt="" className="wallet__img" />
                <a href="##" className="wallet__link">OpenSea</a>
            </div>
        </div>
    )
}

export default Wallet;