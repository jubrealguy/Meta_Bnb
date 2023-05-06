import img from '../img/intro_image.png';

function Intro() {
    return (
        <section className="intro">
            <div className="intro__content">
                <p className="intro__content-head">Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></p>
                <p className="intro__content-body">We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="intro__content-search">
                    <input type="text" placeholder='Search for location' className="search-input" />
                    <a href="##" className="search-btn">Search</a>
                </div>
            </div>
            <div className="intro__image">
                <img src={img} alt="" className="intro_img" />
            </div>
        </section>
    )
}

export default Intro;