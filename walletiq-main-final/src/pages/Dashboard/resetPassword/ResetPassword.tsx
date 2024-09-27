import React from "react";
import GroupImage from "../../../images/Group-2020.png";
import Header from "../Header";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

import useMediaQuery from "../../../hooks/useMediaQuery";

import HeroImg from "../../../images/hero-bg-ipad.webp";
import HeroMobImg from "../../../images/hero-bg-mob.webp";
import HeroIpadImg from "../../../images/hero-bg-ipad.webp";

const ResetPassword = () => {
    const navigate = useNavigate();

    const isSmallScreens = useMediaQuery("(max-width: 743px)");
    const isIpadScreens = useMediaQuery(
        "(min-width: 744px) and (max-width: 1044px)"
    );

    return (
        <>
            <div className="dashboard-bg text-white login-wrapper">
                {/* <Header hideSecondHeader={true} /> */}
                <div className="bg-[#0C0E11] text-white">
                    <div className="grid grid-cols-12 gap-6 ">
                        <div className="col-span-12 lg:col-span-6 items-center">
                            <div className="flex flex-col justify-center items-center p-8">
                                <div className="w-full login-card  bg-[#16181F] rounded-md">
                                    <div className="text-center text-white mt-5">
                                        <div className="logo1 flex justify-center items-center m-4">
                                            <svg
                                                width="168"
                                                height="39"
                                                viewBox="0 0 168 39"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M6.11406 5.93698C9.55777 2.49327 14.1376 0.596436 19.0064 0.596436C23.8753 0.596436 28.4551 2.49327 31.8988 5.93698C35.3425 9.38069 37.2368 13.9579 37.2368 18.8293C37.2368 21.8622 36.4989 24.781 35.1092 27.3854L30.0324 22.306C30.3798 21.1953 30.5624 20.0263 30.5624 18.8293C30.5624 15.7406 29.3604 12.8396 27.177 10.6537C24.9936 8.47031 22.0926 7.26831 19.0039 7.26831C15.9152 7.26831 13.0142 8.47284 10.8308 10.6537C6.32453 15.1599 6.32453 22.4937 10.8308 27.0024C13.9752 30.1469 18.4993 31.0979 22.4755 29.8528C23.1602 29.6372 23.8271 29.3583 24.4687 29.0134L29.3147 33.8594C28.7442 34.25 28.1558 34.6075 27.5523 34.927C24.8896 36.342 21.9455 37.0521 19.0014 37.0521C14.3328 37.0521 9.66174 35.2744 6.10899 31.7192C-0.999056 24.6086 -0.999056 13.045 6.10899 5.93444L6.11406 5.93698ZM24.4738 29.0135L20.6852 25.2249L25.4044 20.5056L29.1955 24.2993L34.0416 29.1453L38.7761 33.8773L34.0568 38.5965L29.3198 33.8595L24.4738 29.0135ZM23.1124 18.8294C23.1124 21.0954 21.2754 22.9324 19.0094 22.9324C16.7433 22.9324 14.9064 21.0954 14.9064 18.8294C14.9064 16.5633 16.7433 14.7263 19.0094 14.7263C21.2754 14.7263 23.1124 16.5633 23.1124 18.8294Z"
                                                    fill="#1337FF"
                                                />
                                                <path
                                                    d="M164.272 32.8202L161.596 30.1788C160.659 30.8877 159.613 31.4423 158.458 31.8425C157.314 32.2427 156.108 32.4428 154.839 32.4428C153.215 32.4428 151.688 32.1227 150.259 31.4823C148.83 30.8306 147.572 29.9387 146.486 28.8066C145.399 27.6632 144.547 26.3368 143.93 24.8274C143.313 23.318 143.004 21.7058 143.004 19.9906C143.004 18.2754 143.313 16.6688 143.93 15.1709C144.547 13.6615 145.399 12.3351 146.486 11.1917C147.572 10.0482 148.83 9.15632 150.259 8.51599C151.688 7.86422 153.215 7.53833 154.839 7.53833C156.474 7.53833 158.006 7.86422 159.435 8.51599C160.865 9.15632 162.122 10.0482 163.209 11.1917C164.295 12.3351 165.141 13.6615 165.747 15.1709C166.365 16.6688 166.673 18.2754 166.673 19.9906C166.673 21.3284 166.479 22.6034 166.09 23.8155C165.701 25.0161 165.17 26.1252 164.495 27.1429L167.222 29.8701L164.272 32.8202ZM154.839 28.2578C155.502 28.2578 156.154 28.1606 156.794 27.9662C157.434 27.7604 158.023 27.4745 158.561 27.1086L156.382 24.9303L159.332 21.963L161.373 24.0213C161.739 23.4267 162.014 22.7863 162.197 22.1003C162.391 21.4142 162.488 20.711 162.488 19.9906C162.488 18.8471 162.288 17.778 161.888 16.7832C161.488 15.7884 160.933 14.9136 160.224 14.159C159.527 13.3928 158.715 12.7982 157.789 12.3752C156.874 11.9406 155.891 11.7234 154.839 11.7234C153.787 11.7234 152.798 11.9406 151.871 12.3752C150.945 12.8097 150.128 13.41 149.419 14.1761C148.721 14.9308 148.172 15.8055 147.772 16.8003C147.383 17.7951 147.189 18.8586 147.189 19.9906C147.189 21.1226 147.389 22.1917 147.789 23.198C148.189 24.1928 148.738 25.0733 149.436 25.8394C150.145 26.5941 150.957 27.1887 151.871 27.6232C152.798 28.0462 153.787 28.2578 154.839 28.2578Z"
                                                    fill="#FEFEFE"
                                                />
                                                <path
                                                    d="M134.858 32.1003V8.08765H139.043V32.1003H134.858Z"
                                                    fill="#FEFEFE"
                                                />
                                                <path
                                                    d="M131.242 19.133H127.915V32.0998H123.73V19.133H121.191V14.9479H123.73V9.56226H127.915V14.9479H131.242V19.133Z"
                                                    fill="#FEFEFE"
                                                />
                                                <path
                                                    d="M113.741 14.9486H117.926V32.1004H113.741V14.9486ZM115.868 12.736C115.251 12.736 114.73 12.5359 114.307 12.1356C113.884 11.724 113.673 11.2094 113.673 10.592C113.673 9.98595 113.884 9.47711 114.307 9.06547C114.73 8.65382 115.245 8.448 115.851 8.448C116.457 8.448 116.966 8.65382 117.378 9.06547C117.801 9.47711 118.012 9.98595 118.012 10.592C118.012 11.2094 117.806 11.724 117.395 12.1356C116.983 12.5359 116.474 12.736 115.868 12.736Z"
                                                    fill="#FEFEFE"
                                                />
                                                <path
                                                    d="M105.433 32.1001V6.37231H109.619V32.1001H105.433Z"
                                                    fill="#FEFEFE"
                                                />
                                                <path
                                                    d="M97.1254 32.1001V6.37231H101.31V32.1001H97.1254Z"
                                                    fill="#FEFEFE"
                                                />
                                                <path
                                                    d="M89.4215 14.9478H93.6065V32.0996H89.4215L89.2328 29.9728C88.764 30.7389 88.1408 31.3621 87.3632 31.8424C86.5971 32.3112 85.6881 32.5456 84.6361 32.5456C83.3668 32.5456 82.1777 32.3055 81.0685 31.8252C79.9593 31.345 78.9817 30.6818 78.1355 29.8356C77.3008 28.9894 76.6433 28.0118 76.1631 26.9026C75.6942 25.7935 75.4598 24.6043 75.4598 23.335C75.4598 22.1115 75.6828 20.9624 76.1288 19.8875C76.5861 18.8127 77.2208 17.8693 78.0326 17.0575C78.8445 16.2456 79.7821 15.611 80.8455 15.1536C81.9089 14.6962 83.0524 14.4675 84.2759 14.4675C85.4079 14.4675 86.4199 14.7191 87.3118 15.2222C88.2151 15.7253 88.9812 16.3657 89.6101 17.1432L89.4215 14.9478ZM84.5332 28.5149C85.4251 28.5149 86.2141 28.2919 86.9001 27.846C87.5862 27.4 88.1236 26.7997 88.5124 26.045C88.9012 25.2789 89.0956 24.4385 89.0956 23.5237C89.0956 22.5975 88.9012 21.7571 88.5124 21.0024C88.1236 20.2363 87.5805 19.6302 86.883 19.1843C86.1969 18.7383 85.4136 18.5154 84.5332 18.5154C83.6527 18.5154 82.8466 18.7441 82.1148 19.2014C81.3944 19.6474 80.8169 20.2477 80.3824 21.0024C79.9593 21.7571 79.7478 22.5975 79.7478 23.5237C79.7478 24.4499 79.9651 25.2904 80.3996 26.045C80.8341 26.7997 81.4115 27.4 82.1319 27.846C82.8637 28.2919 83.6641 28.5149 84.5332 28.5149Z"
                                                    fill="#FEFEFE"
                                                />
                                                <path
                                                    d="M52.9166 32.1003L46.7762 8.08765H51.0985L55.2836 24.502L59.4686 8.08765H63.2935L67.4785 24.502L71.6464 8.08765H75.9687L69.8627 32.1003H65.1116L61.3725 17.5555L57.6848 32.1003H52.9166Z"
                                                    fill="#FEFEFE"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-2xl font-medium letter-spacing-1px">Reset Password</p>
                                        <p className="mb-2 text-sm text-[#9197A4] letter-spacing-1px mt-3 reset-text-padding text-center">
                                            If you forget your password, please enter your registered email below to receive your instructions.
                                        </p>
                                    </div>
                                    <form className="p-6 rounded-lg shadow-md l-form justify-center items-center">
                                        <div className="mb-6">
                                            <label className="block text-[#9197A4] mb-2">Email Address</label>
                                            <input
                                                className="w-full p-2 bg-[#1E1F28] text-white rounded fs1p25rem h-10"
                                                type="email"
                                                id="emailaddress"
                                                name="emailaddress"
                                            />
                                        </div>
                                        <div className="mb-12 w-full md:w-3/4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2"></label>
                                            <div className="bg-gray-100 p-4 text-gray-700  text-center border rounded-md">
                                                [CAPTCHA]
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <button
                                                className="bg-[#5367FE] text-white py-2 px-4 rounded w-full"
                                                type="submit"
                                            >
                                                Connect Wallet
                                            </button>
                                        </div>

                                        <div className="mt-4 text-sm flex flex-col justify-center items-center">
                                            <a href="#" className="text-white my-4">
                                                Already have an account?{" "}
                                                <span className="text-[#37CBB0] underline ml-2" onClick={() => navigate('/login')} >Login</span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6 hidden md:block">
                            <div className="">
                                {/* <img src={GroupImage}
                                    alt="background"
                                    className="object-cover shadow-lg"
                                /> */}

                                {isSmallScreens ? (
                                    <img
                                        src={HeroMobImg}
                                        srcSet={HeroMobImg}
                                        className="hero-bg-img object-contain top-[-8px] z-0 aspect-[.7] right-[-20px] float-right"
                                        alt=""
                                    />
                                ) : isIpadScreens ? (
                                    <img
                                        src={HeroIpadImg}
                                        srcSet={HeroIpadImg}
                                        className="hero-ipad-bg-img object-contain relative  z-0  float-right"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src={HeroImg}
                                        srcSet={HeroImg}
                                        className="hero-bg-img object-contain top-0 z-0   right-[-460px]  float-right"
                                        alt=""
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
