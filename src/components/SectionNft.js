import tilt from '../img/tilt.png';

const SectionNft = () => {
    return (
        <div className="sectionNft">
            <div className="sectionNft__content">
                <h3 className="sectionNft__head">Metabnb NFTs</h3>
                <p className="sectionNft__body">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <a href="##" className="sectionNft__link">Learn more</a>
            </div>
            <div className="sectionNft__images">
                <img src={tilt} alt="" className="sectionNft__img img1" />
            </div>
        </div>
    )
}

export default SectionNft;