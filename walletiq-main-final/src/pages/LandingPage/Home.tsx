import Banner from '../../components/banner/index';
import Faq from '../../components/faq/index';
import Feature from '../../components/feature/index';
// import Footer from '../../components/footer/index';
// import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import Hero from '../../components/hero/index';
import Partner from '../../components/partner/index';
import PieChart from '../../components/pie-chart/index';
import RealWorld from '../../components/real-world/index';
import Roadmap from '../../components/roadmap/index';
import RoadmapButton from '../../components/roadmap-button/index';
import Statistics from '../../components/statistics/index';
import Token from '../../components/token/index';
import Video from '../../components/video/index';
import WalletHolder from '../../components/wallet-holder/index';
import useMediaQuery from '../../hooks/useMediaQuery';
import HeroImg from "../../images/hero-bg-ipad.webp";
import HeroMobImg from "../../images/hero-bg-mob.webp";
import HeroIpadImg from "../../images/hero-bg-ipad.webp";

import React from 'react'

const Home = () => {
    const isSmallScreens = useMediaQuery("(max-width: 743px)");
    const isIpadScreens = useMediaQuery(
      "(min-width: 744px) and (max-width: 1044px)"
    );
    return (
        <div className="flex overflow-hidden relative flex-col justify-between w-full max-md:max-w-full bg-black">
            <Header />
            {isSmallScreens ? (
                <img
                    src={HeroMobImg}
                    srcSet={HeroMobImg}
                    className="hero-bg-img object-contain absolute top-[-8px] z-0 aspect-[.7] right-[-20px]"
                    alt=""
                />
            ) : isIpadScreens ? (
                <img
                    src={HeroIpadImg}
                    srcSet={HeroIpadImg}
                    className="hero-ipad-bg-img object-contain relative top-[-90px] z-0 aspect-[1.93] h-[615px] w-[1956px]"
                    alt=""
                />
            ) : (
                <img
                    src={HeroImg}
                    srcSet={HeroImg}
                    className="hero-bg-img object-contain absolute top-0 z-0 aspect-[1.93] h-[850px] right-[-460px] w-[1956px]"
                    alt=""
                />
            )}

            <Hero />
            <Statistics />
            <RealWorld />
            <Video />
            <Banner />
            <Feature />
            <Token />
            <Roadmap />
            <RoadmapButton />
            <Partner />
            <PieChart />
            <WalletHolder />
            <Faq />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
