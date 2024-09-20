import Button from '../button';
import Wallet from "../../images/icons/wallet-white.svg";
const RealWorld = () => {
    return (
        <div className="real-world-section xl:flex items-center gap-[20px_51px] overflow-hidden font-urbanist justify-start flex-wrap py-[150px] md:py-[100px]">

            {/* <img src="/gif/real_world.gif" alt="real_world" width="800" height="400" data-aos="fade-right" data-aos-duration="1000"/> */}
            <video autoPlay loop muted playsInline width="800" height="400" className="real-world-left-video">
                <source src="/videos/real_world.mp4" type="video/mp4" />
            </video>
            <div className="real-world-right-content self-stretch flex flex-col justify-start flex-1 flex-basis-0 md:max-w-full m-auto px-4 py-8">
                <h3 className="text-[#fefefe] font-normal real-world-heading" data-aos="fade-left" data-aos-duration="1000">
                    Effortless Real-World Shopping: Pay with Crypto for Everyday Goods Using Wallit IQ
                </h3>
                <Button text="Participate In Presale" icon={Wallet} className="real-world-btn mt-8"/>
            </div>
        </div>
    );
};
export default RealWorld;
