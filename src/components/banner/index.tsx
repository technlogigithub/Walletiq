import BannerDesktop from "../../images/banner/banner-desktop.webp";
import BannerMobile from "../../images/banner/banner-mobile.webp";
import useMediaQuery from "../../hooks/useMediaQuery";

const Banner = () => {
    const isSmallScreens = useMediaQuery("(max-width: 450px)");
    return(
        <div>
            {isSmallScreens ? (
            <img src={BannerMobile} alt="banner" className="main-banner-img" />
            ): (
                <img src={BannerDesktop} alt="banner" className="main-banner-img" />
            )}
        </div>
    );
};

export default Banner;
