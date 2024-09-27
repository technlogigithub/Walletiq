import React, { useState } from 'react'
import TableComponent from '../table/TableComponent';
import '../dashboard.css'
import Header from '../Header';
import Footer from '../Footer';

import Modal from '../Modal';

import Step1 from "../assets/2fa-step1.svg";
import Step2 from "../assets/2fa-step2.png";
import Step3 from "../assets/step3.png"

import useMediaQuery from "../../../hooks/useMediaQuery";


// import Footer from "../../../components/footer/index";


const data = [
    { "Date": "23/09/2024", "Device": "AndroidOS-11", "Browser": "Chrome", "ip_address": "192.168.1.1" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Safari", "ip_address": "192.168.1.2" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Firefox", "ip_address": "192.168.1.3" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Edge", "ip_address": "192.168.1.4" },
    { "Date": "23/09/2024", "Device": "AndroidOS-11", "Browser": "Opera", "ip_address": "192.168.1.5" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Chrome", "ip_address": "192.168.1.6" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Safari", "ip_address": "192.168.1.7" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Firefox", "ip_address": "192.168.1.8" },
    { "Date": "23/09/2024", "Device": "AndroidOS-11", "Browser": "Edge", "ip_address": "192.168.1.9" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Opera", "ip_address": "192.168.1.10" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Chrome", "ip_address": "192.168.1.11" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Safari", "ip_address": "192.168.1.12" },
    { "Date": "23/09/2024", "Device": "AndroidOS-11", "Browser": "Firefox", "ip_address": "192.168.1.13" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Edge", "ip_address": "192.168.1.14" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Opera", "ip_address": "192.168.1.15" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Chrome", "ip_address": "192.168.1.16" },
    { "Date": "23/09/2024", "Device": "AndroidOS-11", "Browser": "Safari", "ip_address": "192.168.1.17" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Firefox", "ip_address": "192.168.1.18" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Edge", "ip_address": "192.168.1.19" },
    { "Date": "23/09/2024", "Device": "Apple iOS 18.0", "Browser": "Opera", "ip_address": "192.168.1.20" }
]


const headers = [
    { "key": "Date", "label": "Date" },
    { "key": "Device", "label": "Device" },
    { "key": "Browser", "label": "Browser" },
    { "key": "ip_address", "label": "IP Address" }
]

const STEP1 = "step1";
const STEP2 = "step2";
const STEP3 = "step3";

const Setting = () => {

    const isBigScreens = useMediaQuery("(min-width: 744px)");

    // Step 1
    const [isModalOpen, setModalOpen] = useState(false);
    const [stepSelected,setStepSelected] = useState(STEP1)

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

    // Step 2
    const [isModalOpen2, setModalOpen2] = useState(false);

    const openModal2 = () => setModalOpen(true);
    const closeModal2 = () => setModalOpen(false);

    const [isDropeDownOpen2, setDropeDownIsOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setDropeDownIsOpen(!isDropeDownOpen);
    };

    const [activeButton2, setActiveButton2] = useState<string>('');

    // Handle button click
    const handleButtonClick2 = (buttonName: string): void => {
      setActiveButton(buttonName);
    };


    const [activityLog, setActivityLog] = useState(true);
    const [emailAlert, setEmailAlert] = useState(false);
    const [purchaseNotifications, setPurchaseNotifications] = useState(false);

    const handleStepChange = (stepname:any) => {
        setStepSelected(stepname)
    }


    return (
        <div className="dashboard-bg text-white min-h-screen">
            <Header isSettingPage={true}/>
            <div className="mx-auto px-4 mt-5">
                {/* First Row: Profile Details and Change Password */}
                <div className="grid grid-cols-12 gap-6">
                    <div className='col-span-12 lg:col-span-6 '>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 lg:col-span-6">
                                <div>
                                    <form className="bg-[#16181F] p-6 rounded-lg shadow-md">
                                        <h1 className="text-white mb-10 text-2xl">Profile Details</h1>
                                        <div className="mb-4">
                                            <label className="block cd-grey-col mb-2" >First Name</label>
                                            <input className="w-full p-2 bg-[#1E1F28] text-white rounded fs1p25rem" type="text" id="firstname" name="firstname" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block cd-grey-col mb-2">Email Address</label>
                                            <input className="w-full p-2 bg-[#1E1F28] text-white rounded fs1p25rem" type="email" id="emailaddress" name="emailaddress" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block cd-grey-col mb-2">Mobile Number</label>
                                            <input className="w-full p-2 bg-[#1E1F28] text-white rounded fs1p25rem" type="tel" id="mobilenumber" name="mobilenumber" />
                                        </div>
                                        <div className="flex justify-start mt-8">
                                            <button  className="btn-active enable-2a-padding text-white py-2 px-4 rounded" type="submit">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-span-12 lg:col-span-6">
                                <div>
                                    <form className="bg-[#16181F] p-6 rounded-lg shadow-md">
                                        <h1 className="text-white mb-10 text-2xl">Change Password</h1>
                                        <div className="mb-4">
                                            <label className="block cd-grey-col mb-2" >Old Password</label>
                                            <input className="w-full p-2 bg-[#1E1F28] text-white rounded fs1p25rem" type="password" id="oldpassword" name="oldpassword" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block cd-grey-col mb-2">New Password</label>
                                            <input className="w-full p-2 bg-[#1E1F28] text-white rounded fs1p25rem" type="password" id="newpassword" name="newpassword" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block cd-grey-col mb-2">Confirm New Password</label>
                                            <input className="w-full p-2 bg-[#1E1F28] text-white rounded fs1p25rem" type="password" id="cnpassword" name="cnpassword" />
                                        </div>
                                        <div className="flex justify-start mt-8">
                                            <button className="btn-active enable-2a-padding text-white py-2 px-4 rounded" type="submit">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 mt-4">
                            <div className="bg-[#16181F] p-6 rounded-lg shadow-md">
                                <div className='bg-[#1E1F28 flex gap-4 items-center mb-4'>
                                    <h2 className="text-xl letter-spacing-1px font-bold">Two-Factor Verification</h2>
                                    <div className='flex gap-2 items-center inactive-btn'>
                                        <span><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00146 16.0834C6.96207 16.0834 5.98148 15.886 5.05971 15.4913C4.13792 15.0966 3.3311 14.5534 2.63925 13.8619C1.94739 13.1704 1.40401 12.3639 1.0091 11.4426C0.6142 10.5212 0.416748 9.54085 0.416748 8.50146C0.416748 7.44818 0.614109 6.46412 1.00883 5.54929C1.40355 4.63444 1.94668 3.8311 2.63821 3.13925C3.32975 2.44739 4.1362 1.90401 5.05756 1.5091C5.97891 1.1142 6.95928 0.916748 7.99866 0.916748C9.05194 0.916748 10.036 1.11411 10.9508 1.50883C11.8657 1.90355 12.669 2.44668 13.3609 3.13821C14.0527 3.82975 14.5961 4.63273 14.991 5.54714C15.3859 6.46155 15.5834 7.44539 15.5834 8.49867C15.5834 9.53805 15.386 10.5186 14.9913 11.4404C14.5966 12.3622 14.0534 13.169 13.3619 13.8609C12.6704 14.5527 11.8674 15.0961 10.953 15.491C10.0386 15.8859 9.05473 16.0834 8.00146 16.0834ZM8.00006 15.0001C9.80562 15.0001 11.3403 14.3681 12.6042 13.1042C13.8681 11.8403 14.5001 10.3056 14.5001 8.50006C14.5001 7.70432 14.363 6.95144 14.089 6.24139C13.815 5.53135 13.437 4.89054 12.9552 4.31896L3.81896 13.4552C4.39054 13.9424 5.03135 14.3216 5.74139 14.593C6.45144 14.8644 7.20432 15.0001 8.00006 15.0001ZM3.04494 12.6812L12.1812 3.54494C11.6149 3.05242 10.9759 2.67181 10.2641 2.4031C9.55237 2.13441 8.79767 2.00006 8.00006 2.00006C6.1945 2.00006 4.65978 2.63201 3.39589 3.89589C2.132 5.15978 1.50006 6.69451 1.50006 8.50006C1.50006 9.2958 1.63575 10.0487 1.90712 10.7587C2.17848 11.4688 2.55776 12.1096 3.04494 12.6812Z" fill="#9197A4" />
                                        </svg>
                                        </span>
                                        <span className='text-[#9197A4] fs0p875rem letter-spacing-1px'>Innactive</span>
                                    </div>
                                </div>
                                <p className="text-sm mb-4 letter-spacing-1px">
                                    Two-factor authentication is a method for protection your web account. When it is activated, please enter your password and your special code. You can receive this code inside your mobile app. Even if a third-person establishes your password, access won’t be granted unless they also have access to your special code. .
                                </p>
                                <button className="bg-[#5367FE] p-2 rounded-md enable-2a-padding" onClick={openModal}>Enable 2FA</button>
                            </div>
                        </div>

                        <div className="col-span-12 mt-4">
                            <div className="bg-[#16181f] p-4 rounded-lg flex items-center justify-between text-white space-x-4 toggle-wrapper">

                                <div className="flex items-center space-x-2">
                                    <label htmlFor="toggleB" className="flex items-center cursor-pointer m-0">
                                        <div className="relative toggle-switch">
                                            <input type="checkbox" id="toggleB" className="sr-only peer" />
                                            <div className="block w-14 h-8 rounded-full transition bg-gray-700 peer-checked:bg-blue-600"></div>
                                            <div className="dot absolute left-1 top-1 w-6 h-6 rounded-full bg-blue-400 transition peer-checked:translate-x-full peer-checked:bg-blue-500"></div>
                                        </div>
                                    </label>

                                    <span>Save my Activities Log.</span>
                                </div>

                                <div className="h-5 border-r border-gray-500 partition-bdr"></div>

                                <div className="flex items-center space-x-2 ml-0">
                                    <label htmlFor="toggleC" className="flex items-center cursor-pointer m-0">
                                        <div className="relative toggle-switch">
                                            <input type="checkbox" id="toggleC" className="sr-only peer" />
                                            <div className="block w-14 h-8 rounded-full transition bg-gray-700 peer-checked:bg-blue-600"></div>
                                            <div className="dot absolute left-1 top-1 w-6 h-6 rounded-full bg-blue-400 transition peer-checked:translate-x-full peer-checked:bg-blue-500"></div>
                                        </div>
                                    </label>
                                    <span onClick={openModal2}>Alert me by email for unusual activity</span>
                                </div>

                                <div className="h-5 border-r border-gray-500 partition-bdr"></div>

                                <div className="flex items-center space-x-2 ml-0">
                                    <label htmlFor="toggleD" className="flex items-center cursor-pointer m-0">
                                        <div className="relative toggle-switch">
                                            <input type="checkbox" id="toggleD" className="sr-only peer" />
                                            <div className="block w-14 h-8 rounded-full transition bg-gray-700 peer-checked:bg-blue-600"></div>
                                            <div className="dot absolute left-1 top-1 w-6 h-6 rounded-full bg-blue-400 transition peer-checked:translate-x-full peer-checked:bg-blue-500"></div>
                                        </div>
                                    </label>
                                    <span>Get Notifications for all purchase</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="bg-[#16181f] p-6 rounded-lg shadow-md setting-table">
                            <TableComponent data={data} headers={headers} title={"Recent Activity"} hideIconClass={"hidden-icon"} textClass={"text-r"}/>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Step 1 */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="pb-6">Two-Factor Verification</h2>
                
                <div className="content-new text-center pb-12">
                        Two-factor authentication is a method for protection your web account. When it is activated, please enter your password and your special code. You can receive this code inside your mobile app. Even if a third-person establishes your password, access won’t be granted unless they also have access to your special code. 
                </div>
                
                {/* <div className="button-container pb-3">
                    <button className={`${ stepSelected === STEP1 ? 'buttn-step-primary' : 'buttn-step'}`} onClick={()=>handleStepChange(STEP1)}><span> Step 1</span></button>
                    
                    <button className={`${ stepSelected === STEP2 ? 'buttn-step-primary' : 'buttn-step'}`} onClick={()=>handleStepChange(STEP2)}>  <span> Step 2</span></button>
                    
                    <button className={`${ stepSelected === STEP3 ? 'buttn-step-primary' : 'buttn-step'}`} onClick={()=>handleStepChange(STEP3)}>  <span> Step 3</span></button>

                </div> */}

                {isBigScreens ? (
                    <div className="flex items-center justify-between pb-5">
                        <div className="flex items-center">
                            <button className="buttn-step-primary" onClick={()=>handleStepChange(STEP1)}>
                                Step 1
                            </button>
                            <div className={`line-width h-0.5 ${stepSelected === STEP2 || stepSelected === STEP3 ? 'bg-gray-300' : 'bg-[#FFFFFF]'} `}></div>
                        </div>

                        <div className="flex items-center">
                            <button className={`${ stepSelected === STEP2 || stepSelected === STEP3 ? 'buttn-step-primary' : 'buttn-step'}`} onClick={()=>handleStepChange(STEP2)}>
                                Step 2
                            </button>
                            <div className={`line-width h-0.5 ${stepSelected === STEP2 || stepSelected === STEP3 ? 'bg-[#FFFFFF]' : 'bg-[#fefefe61]'} `}></div>
                        </div>

                        <div className="flex items-center">
                            <button className={`${ stepSelected === STEP3 ? 'buttn-step-primary' : 'buttn-step'}`} onClick={()=>handleStepChange(STEP3)}>
                                Step 3
                            </button>
                        </div>
                    </div>
                ): null}

                {/** Step 1 */}

                {stepSelected === STEP1 &&
                    <div>
                        <div className='inner-content flex flex-wrap justify-center p-10'>
                            <div className="w-[125] text-center">
                                <img src={Step1} className="w-full" alt="" />
                            </div>

                            <div className="w-full text-center pb-2">
                                Get the app. Download <span className="text-[#1337FF]">Google Authenticator</span> on your phone.
                            </div>
                        </div>
                        <div className="button-container pt-5">
                            <button className="buttn" onClick={()=>handleStepChange(STEP2)}>  <span> Enable 2FA</span></button>
                        </div>
                    </div>
                }


                {/** Step 2 */}
                {stepSelected === STEP2 &&
                    <div>
                        <div className='inner-content flex flex-wrap justify-center p-10'>
                            <div className="w-[125] text-center">
                                <img src={Step2} className="w-full" alt="" />
                            </div>

                            <div className="w-full text-center pb-2 mt-5">
                                Scan the QR code below. Alternatively, you can type  <span className="text-[#1337FF]">the secret key</span> into your authenticator app.
                            </div>

                            <div className='w-full px-2'>
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="crypto-hash">Select cryptocurrency</label>
                                <div className="flex items-center rounded-md">
                                    <div className="w-full copy-hash-input">
                                        <div className="bg-[#1E1F28] text-[#667085] px-4 py-2.5 radius-left text-sm font-mono overflow-x-auto" id="crypto-hash">
                                            NFSGCOCHOBIDE53ONRCTKYLZGAYWY5TPGF
                                        </div>
                                    </div>

                                    <button className="bg-[#FEFEFE] text-gray-900 text-sm px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-200">
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="button-container pt-5">
                            <button className="buttn" onClick={()=>handleStepChange(STEP3)}>  <span> Enable 2FA</span></button>
                        </div>
                    </div>
                }

                {/** Step 3 */}

                {stepSelected === STEP3 &&
                    
                    <div>
                        <div className='inner-content flex flex-wrap justify-center p-10'>
                            <div className="w-[125] text-center">
                                <img src={Step3} className="w-full" alt="" />
                            </div>

                            <div className="w-full text-center pb-2 mt-5">
                                Enter Google authenticator code                    
                            </div>

                            <div className='w-full px-2'>
                                <input
                                    className="w-full p-2 bg-[#1E1F28] text-white rounded text-base h-12"
                                    type="text"
                                    id="referralId"
                                    name="referralId"
                                    placeholder='Enter Google authenticator code'
                                />
                            </div>
                        </div>

                        <div className="button-container pt-5">
                            <button className="buttn" onClick={()=>handleStepChange(STEP1)}>  <span> Enable 2FA</span></button>
                        </div>
                    </div>
                }

                

                {/* <div className="button-container pt-5">
                    <button className="buttn">  <span> Enable 2FA</span></button>
                </div> */}
                {/* <Button text="Close" onClick={closeModal} /> */}
            </Modal>

            {/* Step 2 */}
            <Modal isOpen={isModalOpen2} onClose={closeModal}>
                <h2 className="pb-6">Two-Factor Verification</h2>
                
                <div className="content-new text-center pb-12">
                Two-factor authentication is a method for protection your web account. When it is activated, please enter your password and your special code. You can receive this code inside your mobile app. Even if a third-person establishes your password, access won’t be granted unless they also have access to your special code. 
                </div>
                
                <div className="button-container pb-3">
                    <button className="buttn-step-primary">  <span> Step 1</span></button>
                    
                    <button className="buttn-step-primary">  <span> Step 2</span></button>
                    
                    <button className="buttn-step">  <span> Step 3</span></button>

                </div>

                <div className='inner-content flex flex-wrap justify-center p-10'>
                    <div className="w-[125] text-center">
                        <img src={Step2} className="w-full" alt="" />
                    </div>

                    <div className="w-full text-center pb-2">
                    Scan the QR code below. Alternatively, you can type <span className="text-[#1337FF]">the secret key</span> into your authenticator app.
                    </div>
                </div>
                <div className="button-container pt-5">
                    <button className="buttn">  <span> Enable 2FA</span></button>
                </div>
                {/* <Button text="Close" onClick={closeModal} /> */}
            </Modal>

            {/* Step 3 */}




            <Footer/>
        </div>
    )
}

export default Setting


