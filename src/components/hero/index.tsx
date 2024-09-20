import React, { useState } from 'react';
import Wallet from "../../images/icons/wallet-white.svg";
import Star from "../../images/icons/star.svg";
import Button from '../button';
import Modal from '../Modal';
import Myimage from "../../images/image-1.svg";
import Mysecimage from "../../images/image-2.svg";
import Mythreeimage from "../../images/image-3.svg";
import Myfourimage from "../../images/image-4.svg";
import Mypencil from "../../images/pencil-icon.svg";

const Hero = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [isDropeDownOpen, setDropeDownIsOpen] = useState(false);

    const toggleDropdown = () => {
        setDropeDownIsOpen(!isDropeDownOpen);
    };

    const [activeButton, setActiveButton] = useState<string>('');

    // Handle button click
    const handleButtonClick = (buttonName: string): void => {
      setActiveButton(buttonName);
    };

    return (
        <div>
            <div className="hero-section flex z-10 flex-col mt-5 w-full max-md:max-w-full">
                <div className="container mx-auto px-4 md:px-6 sm:px-4">
                    <h1 className="hero-first-paragraph text-white max-md:max-w-full max-md:text-4xl" data-aos="fade-up" data-aos-duration="1000">
                        <span className="font-extrabold bold-paragraph-text">Your AI-Powered Wallet</span>
                        <span className="text-stone-300 regular-paragraph-text"> for Faster, Smarter, and Safer Crypto </span>{" "}
                        <span className="font-extrabold bold-paragraph-text">Transactions</span>
                    </h1>
                    <div className="hero-section-text-container flex flex-wrap gap-10 items-center self-start mt-12 max-md:mt-10 max-md:max-w-full">
                        <Button text="Connect Wallet" icon={Wallet} className="connect-wallet-btn my-random-button" onClick={openModal} />

                        <div className="hero-paragraph flex flex-wrap gap-7 items-center self-stretch my-auto text-base leading-7 text-white min-w-[240px] max-md:max-w-full">
                            <img src={Star} width="50" height="50" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[39px]" alt="" />
                            <p className="self-stretch my-auto w-[562px] max-md:max-w-full">
                                Experience enhanced security and smart transactions with adaptive AI technology. Get personalized assistance, automate key transactions, and enjoy real-time market insights for seamless and informed crypto management with Ai-nstien.
                            </p>
                        </div>
                    </div>

                    <div className="progress-bar flex z-0 flex-wrap gap-5 justify-between items-start pb-4 mt-5 w-full text-white rounded-none max-md:max-w-full">
                        <p>1st round</p>
                        <p className="text-right">2nd round</p>
                        <div className="progress-bar-new">
                            <div className="progress-bar-inner" style={{ width: '90%' }}>
                                90.00%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>BUY COIN</h2>
                <h3>US$140,894 SOLD</h3>
                <div className='inner-content'>
                    <h2>Price Increase In</h2>


                    <div className="flex space-x-3">

                        <div className="timer-box">
                            <div className="text-3xl font-bold">00</div>
                            <div className="text-size  uppercase tracking-widest">Day</div>
                        </div>


                        <div className="timer-box">
                            <div className="text-3xl font-bold">10</div>
                            <div className="text-size uppercase tracking-widest">Hours</div>
                        </div>


                        <div className="timer-box">
                            <div className="text-3xl font-bold">28</div>
                            <div className="text-size  uppercase tracking-widest">Mins</div>
                        </div>


                        <div className="timer-box">
                            <div className="text-3xl font-bold">54</div>
                            <div className="text-size uppercase tracking-widest">Secs</div>
                        </div>
                    </div>



                </div>


                <div className="mt-5">

                <div className="button-container">
      <button
        className={`btn-new active-btn ${activeButton === 'card' ? '  card-btn' : ''}`}
        onClick={() => handleButtonClick('card')}
      >
        <span>
          <img src={Myimage} className="margin-me" alt="" />
        </span>
        <span>Card</span>
      </button>
      <button
        className={`btn-new ${activeButton === 'eth' ? 'card-btn' : ''}`}
        onClick={() => handleButtonClick('eth')}
      >
        <span>
          <img src={Mysecimage} className="margin-me" alt="" />
        </span>
        <span>ETH</span>
      </button>
      <button
        className={`btn-new ${activeButton === 'btc' ? 'card-btn' : ''}`}
        onClick={() => handleButtonClick('btc')}
      >
        <span>
          <img src={Mythreeimage} className="margin-me" alt="" />
        </span>
        <span>BTC</span>
      </button>
      <button
        className={`btn-new ${activeButton === 'sol' ? 'card-btn' : ''}`}
        onClick={() => handleButtonClick('sol')}
      >
        <span>
          <img src={Myfourimage} className="margin-me" alt="" />
        </span>
        <span>SOL</span>
      </button>
      <button
        className={`btn-new ${activeButton === 'other' ? 'card-btn' : ''}`}
        onClick={() => handleButtonClick('other')}
      >
        <span>Other</span>
      </button>
    </div>

                </div>

                {/* <div className="">

                <div className=" ">
                <img src={Myimagefull} className=" w-100" alt="" />
                        
                        </div>
                  
                </div>   */}

                <div className="input-container">
                    <h2>You pay</h2>
                    <div className="input-box">


                        <div className="dropdown-container">
                            <div className="dropdown-header" onClick={toggleDropdown}>
                                <span><img src={Mysecimage} className="margin-me" alt="" /></span> <span>ETH</span>  <span>{isDropeDownOpen ? '▲' : '▼'}</span>
                            </div>
                            {isDropeDownOpen && (
                                <ul className="dropdown-menu">
                                    <li> <span><img src={Mysecimage} className="margin-me-new" alt="" /></span> <span>ETH</span></li>
                                    <li> <span><img src={Mysecimage} className="margin-me-new" alt="" /></span> <span>ETH</span></li>
                                    <li> <span><img src={Mysecimage} className="margin-me-new" alt="" /></span> <span>ETH</span></li>
                                    <li> <span><img src={Mysecimage} className="margin-me-new" alt="" /></span> <span>ETH</span></li>
                                </ul>
                            )}
                        </div>

                        <input type="text" placeholder='250' />
                        <span className="usd-text">USD</span>

                        <div className='my-pencil-clss'> <img src={Mypencil} className="" alt="" /></div>

                        <div className="action-buttons">
                            <span>+</span>
                            <span>-</span>
                        </div>
                    </div>

                </div>
                <div className="input-container">
                    <h2>You Receive:</h2>
                    <div className="input-box">
                        <div className="dropdown-container">
                            <div className="dropdown-header-new" >
                                <span><img src={Mysecimage} className="margin-me" alt="" /></span> <span className='equalto' > = </span>
                            </div>

                        </div>
                        <input type="text" placeholder='250' />
                        <span className="usd-text">USD</span>
                    </div>
                </div>






                <div className="checkbox-content">
                    <label className="custom-checkbox">

                        <input type="checkbox" />
                        <span className="custom-checkbox"></span>
                    </label>
                    <div className="content-new">
                        I agree to the Terms of Use and Privacy Policy, certify that I have fully understood the Risks Disclaimer, and confirm that I am not from a Blocked Country.
                    </div>
                </div>


                <div className="button-container">
                    <button className="buy-buttn">  <span> Buy Now</span></button>

                </div>


                {/* <Button text="Close" onClick={closeModal} /> */}
            </Modal>
        </div>
    );
};

export default Hero;
