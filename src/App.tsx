import Header from "./components/header";
import Hero from "./components/hero";
import Statistics from "./components/statistics";
import RealWorld from "./components/real-world";
import Video from "./components/video";
import Banner from "./components/banner";
import Feature from "./components/feature";
import Token from "./components/token";
import Roadmap from "./components/roadmap";
import RoadmapButton from "./components/roadmap-button";
import Partner from "./components/partner";
import PieChart from "./components/pie-chart";
import WalletHolder from "./components/wallet-holder";
import Faq from "./components/faq";
import Footer from "./components/footer";
import HeroImg from "./images/hero-bg-ipad.webp";
import HeroMobImg from "./images/hero-bg-mob.webp";
import HeroIpadImg from "./images/hero-bg-ipad.webp";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
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
		<Footer />
    </div>
  );
}

export default App;
