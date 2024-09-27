import Logo from "../../images/logo.svg";
import Linkedin from "../../images/social-media/linkedin.png";
import Facebook from "../../images/social-media/fb.png";
import Youtube from "../../images/social-media/youtube.png";
import Instagram from "../../images/social-media/insta.png";

import Twitter from "../../images/social-media/twitter.png";
import Telegram from "../../images/social-media/telegram.png";
import Discord from "../../images/social-media/discord.png";
import Medium from "../../images/social-media/medium.png";
import Flag from "../../pages/Dashboard/assets/flag-2.png";

const Footer = () => {
    return(
        <div className="footer-section wallet-main-section pt-[150px] md:hidden">
            {/* <div className="footer-top-wrapper">
                <img src={Logo} alt="footer-logo" width="100" height="100" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500"/>
                <ul className="menu-list text-white">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#features">Feature</a>
                    </li>
                    <li>
                        <a href="#token">Token</a>
                    </li>
                    <li>
                        <a href="#roadmap">Roadmap</a>
                    </li>
                    <li>
                        <a href="#whitepaper">Whitepaper</a>
                    </li>
                    <li>
                        <a href="#tokenomics">Tokenomics</a>
                    </li>
                    <li>
                        <a href="#faq">FAQ</a>
                    </li>
                </ul>
            </div> */}
            <div className="footer-bottom-wrapper text-white">
                <h4>© 2024 WallitIQ. All Right Reserved</h4>
                <div className="footer-bottom-list flex justify-between gap-20">
                    <ul className="static-pages">
                        <li className="block md:hidden">
                            <div className="flex items-center space-x-1 language-select">
                                <div className="w-[24px] h-[16px] bg-gray-700">
                                    <img src={Flag} />
                                </div>
                                <select className="bg-transparent letter-spacing-1px text-sm text-gray-400 border-none outline-none">
                                    <option className="bg-black" value="EN">
                                        <span>English</span>
                                    </option>
                                    <option className="bg-black" value="EN">
                                        <span>English</span>
                                    </option>
                                </select>
                            </div>
                        </li>
                        {/* <li>
                            <a href="/">Terms of Us</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/">Cookie Policy</a>
                        </li> */}
                    </ul>
                    {/* <ul className="social-media-list">
                        <li>
                            <a href="/">
                                <img src={Linkedin} alt="linkedin" width="100" height="100" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Facebook} alt="fb" width="100" height="100" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Youtube} alt="youtube" width="100" height="100" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Instagram} alt="insta" width="100" height="100" />
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <img src={Twitter} alt="twitter" width="100" height="100" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Telegram} alt="telegram" width="100" height="100" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Discord} alt="discord" width="100" height="100" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Medium} alt="medium" width="100" height="100" />
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
