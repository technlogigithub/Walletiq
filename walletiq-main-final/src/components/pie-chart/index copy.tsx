import piechart from '../../images/pie-chart.png';
import piechartmob from '../../images/pie-chart-mob.png';
import Button from '../button';
import Wallet from "../../images/icons/wallet-white.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
const PieChart = () => {
    const isSmallScreens = useMediaQuery("(max-width: 1024px)");
    const data = [
        { heading: 'Ecosystem Development', value: '8%'},
        { heading: 'Bonus Tokens', value: '20%'},
        { heading: 'Airdrops/community rewards', value: '1%'},
        { heading: 'Exchange Liquidity', value: '15%'},
        { heading: 'Marketing', value: '7%'},
        { heading: 'Teams & Advisors', value: '4%'},
        { heading: 'Public Sale (Presale)', value: '45%'},
    ];
    return(
        <div className="pie-chart-section relative text-white text-center" id="tokenomics">
            <h3 className="pie-chart-heading main-heading">Tokenomics</h3>
            <p className="pie-chart-subheading">Token Distribution</p>
            {isSmallScreens ? (
                <div className="pie-chart-mobile-wrapper mt-20">
                    <div className="pie-image-text-wrapper">
                        <div className="pie-image-text">
                            <h4>500M</h4>
                            <span>Total Supply</span>
                        </div>
                        <img src={piechartmob} alt="chart" className="" />
                    </div>
                    <ul className="mt-10 pie-chart-list">
                        {data.map((item, index) => (
                            <li key={index} className="mt-2 flex justify-between items-center">
                                <h4>{item.heading}</h4>
                                <span>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                    <Button text="Buy Token" icon={Wallet} className="pie-chart-btn mt-4"/>
                </div>
            ):(
                <div>
                    <div className="flex justify-center text-center mt-20">
                        <div className="pie-chart-wrapper">
                            <div className="pie-first-pointer pie-chart-pointer">
                                <div className="pie-pointer-heading">Exchange Liquidity</div>
                                <span>15%</span>
                            </div>
                            <div className="pie-second-pointer pie-chart-pointer">
                                <div className="pie-pointer-heading">Marketing</div>
                                <span>7%</span>
                            </div>
                            <div className="pie-third-pointer pie-chart-pointer">
                                <div className="pie-pointer-heading">Teams & Advisors</div>
                                <span>4%</span>
                            </div>
                            <div className="pie-fourth-pointer pie-chart-pointer">
                                <div className="pie-pointer-heading">Public Sale (Presale)</div>
                                <span>45%</span>
                            </div>
                        </div>
                        <div className="pie-chart-desktop-image-wrapper">
                            <div className="pie-image-text">
                                <h4>1 B</h4>
                                <p className="sub-heading">Total Supply</p>
                            </div>
                            <img src={piechart} alt="chart" className="pie-chart-img" />
                        </div>
                        <div className="pie-chart-right-wrapper">
                            <div className="pie-fifth-pointer pie-chart-pointer">
                                <div className="pie-pointer-heading">Ecosystem <br/> Development</div>
                                <span>8%</span>
                            </div>
                            <div className="pie-sixth-pointer pie-chart-pointer">
                                <div className="pie-pointer-heading">Bonus Tokens</div>
                                <span>20%</span>
                            </div>
                            <div className="pie-seventh-pointer pie-chart-pointer">
                                <div className="pie-pointer-heading">Airdrops/community <br/>rewards</div>
                                <span>1%</span>
                            </div>
                        </div>
                    </div>
                    <Button text="Buy Token" icon={Wallet} className="pie-chart-btn mt-4"/>
                </div>
            )}
        </div>
    );
};

export default PieChart;
