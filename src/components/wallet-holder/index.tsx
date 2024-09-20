import Star from "../../images/icons/star.svg";
import Button from "../button";
import Wallet from "../../images/icons/wallet-white.svg";

const WalletHolder = () => {

  const data = [
    { heading: "High Liquidity, Limited Supply of the Token" },
    { heading: "AListing on Top Exchanges" },
    { heading: "Usage growth of AINST token as a utility token" },
    { heading: "Fully Automated with Advance AI Capability" },
  ];
  return (
    <div className="wallet-holder-section  xl:flex items-center gap-[20px_51px] overflow-hidden font-urbanist justify-start flex-wrap py-[150px] md:py-[100px]">
      <div className="wallet-holder-wrapper gap-5 WallitIQ-holder-wrapper">

        {/* <img src="/gif/WallitIQ -Logo.gif" alt="WallitIQ -Logo" width="743" height="743" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="3000"/> */}

        <video autoPlay loop muted playsInline width="800" height="400" className="real-world-left-video">
            <source src="/videos/WallitIQ -Logo.mp4" type="video/mp4" />
        </video>
        <div className="wallet-holder-right-content self-stretch flex flex-col justify-start flex-1 flex-basis-0 md:max-w-full m-auto" data-aos="fade-left" data-aos-duration="1500">
          <h3 className="text-[#fefefe] font-normal real-world-heading">Why you ahould be a $AINS HOLDer?</h3>
          <p className="text-white wallet-token-paragraph">
            As WallitIQ establishes itself as a leading player in the AI space who uses cutting edge technology to redefine how you store crypto, transact and
            make investment decision, $AINS Tokens are poised to benefit from key growth factors, including:
          </p>
          <ul className="mt-8 wallet-token-list">
            {data.map((item, index) => (
              <li key={index} className="text-white flex items-center mb-4">
                <img src={Star} alt="" className="w-[20px]" width="50" height="50" />
                <span className="mx-3">{item.heading}</span>
              </li>
            ))}
            ;
          </ul>
          <Button text="Connect Wallet" icon={Wallet} className="token-wallet-btn mt-4 WallitIQ" />
        </div>
      </div>
    </div>
  );
};
export default WalletHolder;
