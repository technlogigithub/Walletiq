import StatisticsCard from '../statistics-card';
import Button from '../button';
import Star from "../../images/icons/star-o.svg";
import Modal from '../Modal';
import Mysecimage from "../../images/new-img-1.svg";
import imagesleep from "../../images/image-slip.svg";
import Copyright from "../../images/Copy_alt.svg";

import { useState } from 'react';


interface StatisticsData {
    title: string;
    value: string;
    percentage: string;
    trend: 'up' | 'down';
}
const Statistics = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [activeTab, setActiveTab] = useState('wallet');

    const [isDropeDownOpen, setDropeDownIsOpen] = useState(false);

    const toggleDropdown = () => {
        setDropeDownIsOpen(!isDropeDownOpen);
    };

    const statisticsData: StatisticsData[] = [
        { title: "Total Raised", value: "$230K +", percentage: "+123448%", trend: "up" },
        { title: "Next Price", value: "$ 0.0243", percentage: "+210%", trend: "up" },
        { title: "Listing Price", value: "$ 0.04", percentage: "+1000%", trend: "up" },
        { title: "Current Price", value: "$ 0.0171", percentage: "+100%", trend: "up" }
    ];
    return (

        <div className="statistics-section1 bg-[#0D0D0D] lg:p-24 p-8 flex w-full items-center  justify-between flex-wrap md:max-w-full">
            {statisticsData.map((stat, index) => (
                <StatisticsCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    percentage={stat.percentage}
                    trend={stat.trend}
                />
            ))}
            <div className="statistics-button">
                <Button text="Join Presale" icon={Star} className="token-wallet-btn my-random-button" onClick={openModal} />

            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Buy Token</h2>

                {/* <div className="button-honor mt-4 mb-4">
                    <button onClick={() => setActiveTab('wallet')} className="pay-wallet">Pay in Wallet</button>
                    <button onClick={() => setActiveTab('address')} className="pay-address">Pay Address</button>
                </div> */}


                <div className="button-honor mt-4 mb-4">
                    <button onClick={() => setActiveTab('wallet')} className={`" ${activeTab === 'wallet' ? 'pay-wallet' : 'pay-address'}`}> Pay in Wallet  </button>
                    <button onClick={() => setActiveTab('address')} className={`" ${activeTab === 'address' ? 'pay-wallet' : 'pay-address'}`}> Pay Address  </button>

                </div>



                {activeTab === 'wallet' && (
                    <div className='main-div-one'>

                        <div className='Connect-web'>
                            <p className='mt-3 mb-3'>111111  Connect your Web3 wallet to pay. If you have crypto, but no Web3 wallet you can use the pay address feature.</p>
                            <p className='mt-3 mb-3'>Payment deadline: 23:56:50</p>
                        </div>

                        <div className="button-container mt-4 mb-4">
                            <button className="buy-buttn">  <span> Connect Wallet</span></button>

                        </div>

                        <div className='Wallet-connector'>
                            <p>Don't have a Wallet? <a href="/">Pay Without Connecting</a> </p>
                        </div>

                        <div className='cosco-mosko mt-4 mb-4'>
                            <p>
                                Disclaimer: JetBolt is not a secure  investment. The JetBolt team does not guarantee that the tokens hold  intrinsic value, will appreciate, or maintain any value after the  presale. By purchasing, you acknowledge buying JetBolt tokens for  ecosystem use, not as an investment, and you accept the risk of losing  the entire value of your purchase.
                            </p>
                        </div>
                    </div>

                )}
                {activeTab === 'address' && (
                    <div className='main-div-two'>

                        <div className='Connect-web'>
                            <p className='mt-3 mb-3'>Send <span className='deadline'> 0.1000 ETH </span>  to the address listed below. Your JetBolt tokens will automatically be minted after payment.</p>

                        </div>

                        <div className="input-container">
                            <div className="input-box-new">
                                <div className="dropdown-container-secp">
                                    <div className="dropdown-header-new-phanf " >
                                        <span><img src={Mysecimage} className="margin-summer" alt="" /></span> <span className='equalto' > <img src={imagesleep} className="margin-summer" alt="" /> </span>
                                    </div>

                                </div>
                                <input type="text" placeholder='0xad01e89316e6b1992b3f4159d1065c397af42de1' />
                                <div className="dropdown-container-secp">
                                    <div className="coppy-link " >
                                        <span><img src={Copyright} className="margin-summer" alt="" /></span> <span className='' > Copy </span>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className='Connect-web'>
                            <p className='mt-3 mb-3'>Payment deadline: 23:56:50</p>
                        </div>

                        <div className="button-container mt-4 mb-4">
                            <button className="buy-buttn">  <span> Connect Wallet</span></button>

                        </div>


                        <div className='Wallet-connector'>
                            <p>Don't have a Wallet? <a href="/" onClick={(e) => {e.preventDefault(); setActiveTab('Pay-Without-Connecting');}}>Pay Without Connecting</a></p>
                        </div>



                        <div className='cosco-zigma mt-4 mb-4'>
                            <p>
                                1. Only pay in ETH on the Ethereum (ERC20) blockchain. Funds sent on the wrong network cannot be recovered.
                            </p>
                        </div>

                        <div className='cosco-zigma mt-4 mb-4'>
                            <p>
                                2. Only pay once to this address. We will automatically accept any amount ranging from US$ 10 to US$ 10,000 in equivalent ETH.
                            </p>
                        </div>

                        <div className='cosco-mosko mt-4 mb-4'>
                            <p>
                                Disclaimer: JetBolt is not a secure  investment. The JetBolt team does not guarantee that the tokens hold  intrinsic value, will appreciate, or maintain any value after the  presale. By purchasing, you acknowledge buying JetBolt tokens for  ecosystem use, not as an investment, and you accept the risk of losing  the entire value of your purchase.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'Pay-Without-Connecting' && (
                    <div className='main-div-three'>
                        <div className="dropdown-container-mopad">
                            <label >Enter amount in USD</label>
                            <div className="dropdown-header-disclaimer" onClick={toggleDropdown}>
                                <span>Select cryptocurrency </span>  <span>{isDropeDownOpen ? '▲' : '▼'}</span>
                            </div>
                            {isDropeDownOpen && (
                                <ul className="dropdown-menu-new-list">
                                    <li>  <span>Select cryptocurrency </span></li>
                                    <li> <span>Select cryptocurrency </span></li>
                                </ul>
                            )}
                        </div>


                        {/* <div className="form-group">
        <label >Select cryptocurrency</label>
        <select id="crypto-select" className="select-field">
            <option>Select cryptocurrency</option>
        </select>
    </div> */}

                        <div className="form-group">
                            <label >Enter amount in USD</label>
                            <input type="text" id="usd-amount" className="input-field" placeholder="Select cryptocurrency " />
                        </div>

                        <div className="form-group">
                            <label >Crypto amount</label>
                            <input type="text" id="crypto-amount" className="input-field" placeholder="Crypto amount" />
                        </div>
                        <div className="form-group">
                            <label >RCOF tokens you will receive</label>
                            <input type="text" id="usd-amount" className="input-field" placeholder="$RCOF tokens  " />
                        </div>

                        <div className="form-group" style={{ position: 'relative' }}>
                            <label >Promo code (optional)</label>
                            <input type="text" id="crypto-amount" className="input-field" placeholder="Enter promo code here" />
                            <div className='apply-kly'>Apply code</div>
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


                    </div>

                )}
            </Modal>
        </div>

    );
};
export default Statistics;
