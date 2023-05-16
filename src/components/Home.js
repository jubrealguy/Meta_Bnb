import Intro from './Intro';
import Wallet from './Wallet';
import SectionNft from './SectionNft';
import Adventures from './Adventures';

function Home() {
    return (
        <section className="home">
            <Intro />
            <Wallet />
            <Adventures />
            <SectionNft />
        </section>
    )
}

export default Home;