import Intro from './Intro';
import Wallet from './Wallet';
import SectionNft from './SectionNft';
import Adventures from './Adventures';

function Home() {
    return (
        <section>
            <Intro />
            <Wallet />
            <Adventures />
            <SectionNft />
        </section>
    )
}

export default Home;