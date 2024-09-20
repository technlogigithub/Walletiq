import Star from "../../images/icons/star.svg";
import Button from '../button';
import Wallet from "../../images/icons/wallet-white.svg";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
const Token = () => {
    const data = [
        { heading: 'Transaction fee payment within the ecosystem'},
        { heading: 'Earn staking rewards upto 180% APY'},
        { heading: 'Get access to premium features'},
        { heading: 'Participate in governance decisions'},
        { heading: 'Earn unlimited referral bonus'},
        { heading: 'Eligible for community rewards'},

    ];
    return (
        <div className="real-world-section items-center gap-[20px_51px] font-urbanist justify-start flex-wrap" id="token">
            {/* <img src="/gif/coin.gif" alt="Coin" width="800" height="800" data-aos="fade-right" data-aos-duration="3000"/> */}
            <video autoPlay loop muted playsInline width="800" height="400">
                <source src="/videos/coin.mp4" type="video/mp4" />
            </video>
            <div className="real-world-right-content self-stretch flex flex-col justify-start flex-1 flex-basis-0 md:max-w-full m-auto" data-aos="fade-left" data-aos-duration="3000">
                <h3 className="text-[#fefefe] font-normal real-world-heading">
                    Token
                </h3>
                <p className="text-white wallet-token-paragraph WallitIQ">WallitIQ $WALLI is built on ERC20 to provide unparalleled security and scalability. By holding $AINS token you get access to,</p>
                <ul className="mt-8 wallet-token-list">
                    {data.map((item, index) => (
                        <li key={index} className="text-white flex items-center mb-4">
                            <img src={Star} alt="" className="w-[20px]" width="50" height="50"/>
                            <span className="mx-3">{item.heading}</span>
                        </li>
                    ))};
                </ul>
                <Button text="Buy Presale" icon={Wallet} className="token-wallet-btn mt-4 WallitIQ"/>
                <div className="md:flex gap-6 text-white mt-4 token-note-text  WallitIQ">
                    <p style={{opacity: 0.7}}>*the more you stake the more you earn</p>
                    <p className="flex token-percentage-text items-center">+180%
                    <ArrowUpIcon className="h-4 w-4 text-[#a6ff97]" />
                        <span className="text-white" style={{opacity: 0.7}}>API</span></p>
                </div>
            </div>
        </div>
    );
};
export default Token;
