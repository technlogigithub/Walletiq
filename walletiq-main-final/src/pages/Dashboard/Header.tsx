import React, { useState } from 'react';
import BTC from './assets/btc.png'
import USDT from './assets/usdt.png';
import MetaMask from '../Dashboard/assets/meta-mark.png';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Flag from "../../pages/Dashboard/assets/flag-2.png";



const Header = (props: any) => {

  const navigate = useNavigate();

  const { isSettingPage, hideSecondHeader } = props
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  const getBtnActiveClassName = (btnName:any) => {
    let actClass = '';
    if(window.location.pathname.includes(btnName)){
      actClass = 'btn-active'
    }
    return actClass;
  }

  return (
    <>
      <div>
        <nav className="flex justify-between items-center p-4 shadow-md">
          {/* Left Side (Logo + Icon) */}
          <div className="flex items-center space-x-4 gap-5">
            <div className="flex items-center space-x-1">
              <div className="">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00766 3.31081C4.82014 1.49833 7.23056 0.5 9.79312 0.5C12.3557 0.5 14.7661 1.49833 16.5786 3.31081C18.391 5.12329 19.388 7.53237 19.388 10.0963C19.388 11.6925 18.9997 13.2287 18.2683 14.5994L15.5963 11.9261C15.7791 11.3415 15.8752 10.7262 15.8752 10.0963C15.8752 8.47064 15.2426 6.94378 14.0934 5.79329C12.9443 4.64414 11.4174 4.01151 9.79179 4.01151C8.16616 4.01151 6.63929 4.64548 5.49014 5.79329C3.11843 8.165 3.11843 12.0249 5.49014 14.3979C7.14513 16.0529 9.52618 16.5534 11.6189 15.8981C11.9793 15.7846 12.3303 15.6378 12.668 15.4563L15.2185 18.0068C14.9182 18.2124 14.6086 18.4006 14.2909 18.5687C12.8895 19.3135 11.34 19.6872 9.79045 19.6872C7.33333 19.6872 4.87486 18.7516 3.00499 16.8804C-0.736088 13.138 -0.736088 7.05189 3.00499 3.30948L3.00766 3.31081ZM12.6707 15.4563L10.6767 13.4623L13.1605 10.9785L15.1558 12.9752L17.7064 15.5257L20.1982 18.0162L17.7144 20.5L15.2212 18.0069L12.6707 15.4563ZM11.9544 10.0963C11.9544 11.2889 10.9876 12.2558 9.79493 12.2558C8.60228 12.2558 7.63545 11.2889 7.63545 10.0963C7.63545 8.90362 8.60228 7.93678 9.79493 7.93678C10.9876 7.93678 11.9544 8.90362 11.9544 10.0963Z" fill="#1337FF" />
                </svg>
              </div>
              <span className="font-medium text-sm letter-spacing-1px">WallitIQ</span>
            </div>
            <div className='hidden md:flex items-center gap-2'>
              <button className={`nav-btns rounded-md text-white text-sm ${getBtnActiveClassName('dashboard')}`}
                onClick={() => navigate('/dashboard')}  >
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 15.0001C15.75 15.4143 15.4142 15.7501 15 15.7501H3C2.58579 15.7501 2.25 15.4143 2.25 15.0001V7.11686C2.25 6.88542 2.35685 6.66694 2.53954 6.52485L8.53957 1.85818C8.8104 1.64753 9.1896 1.64753 9.46043 1.85818L15.4604 6.52485C15.6431 6.66694 15.75 6.88542 15.75 7.11686V15.0001ZM8.25 9.75006V14.2501H9.75V9.75006H8.25Z" fill="white" />
                  </svg>
                </span>
                <span>Home</span>
              </button>

              <button className={`nav-btns rounded-md text-white text-sm ${getBtnActiveClassName('setting')}`}
                onClick={() => navigate('/setting')} >
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5755 2.3032C10.5851 2.35149 10.5908 2.408 10.6021 2.52102C10.6234 2.73438 10.6341 2.84106 10.6516 2.91116C10.8139 3.56369 11.5611 3.8732 12.1374 3.52661C12.1993 3.48937 12.2822 3.4215 12.4481 3.28576C12.536 3.21388 12.5799 3.17794 12.6209 3.15066C12.987 2.90696 13.4693 2.93101 13.8093 3.20994C13.8474 3.24115 13.8875 3.28128 13.9677 3.36151L13.9677 3.36155L14.638 4.03176L14.638 4.03179C14.7183 4.11212 14.7585 4.15229 14.7897 4.19039C15.0686 4.53037 15.0926 5.01259 14.849 5.37862C14.8217 5.41964 14.7857 5.46362 14.7138 5.55157L14.7137 5.55159C14.5779 5.71767 14.5099 5.80072 14.4726 5.8627C14.1262 6.43887 14.4357 7.18589 15.088 7.34834C15.1582 7.36582 15.265 7.3765 15.4787 7.39787L15.4787 7.39787C15.592 7.4092 15.6486 7.41486 15.697 7.42458C16.128 7.51117 16.4519 7.86908 16.4951 8.30655C16.5 8.35565 16.5 8.41253 16.5 8.52629V9.47413C16.5 9.5875 16.5 9.64418 16.4952 9.6931C16.452 10.1308 16.1279 10.489 15.6966 10.5755C15.6484 10.5852 15.592 10.5908 15.4792 10.6021L15.4792 10.6021C15.2662 10.6234 15.1597 10.634 15.0897 10.6514C14.4369 10.8137 14.1274 11.5612 14.4741 12.1375C14.5113 12.1993 14.5792 12.2822 14.7149 12.448L14.7149 12.4481C14.7868 12.536 14.8228 12.58 14.8501 12.621C15.0938 12.9871 15.0697 13.4693 14.7908 13.8093C14.7596 13.8474 14.7194 13.8876 14.6392 13.9678L13.9692 14.6378L13.9692 14.6378C13.8886 14.7184 13.8484 14.7586 13.8102 14.79C13.4703 15.0686 12.9883 15.0926 12.6223 14.8492C12.5812 14.8218 12.5371 14.7858 12.449 14.7137L12.4489 14.7136L12.4489 14.7136C12.2824 14.5774 12.1992 14.5093 12.1371 14.472C11.561 14.1259 10.8144 14.4351 10.6518 15.0872C10.6342 15.1575 10.6235 15.2645 10.6021 15.4786L10.6021 15.4786L10.6021 15.4787C10.5908 15.592 10.5851 15.6487 10.5754 15.6971C10.4888 16.128 10.131 16.4518 9.69358 16.4951C9.64442 16.5 9.58746 16.5 9.47354 16.5H8.52627C8.41253 16.5 8.35566 16.5 8.30657 16.4951C7.86908 16.4519 7.51116 16.128 7.42457 15.697C7.41486 15.6486 7.4092 15.592 7.39789 15.4789L7.39788 15.4788C7.37651 15.2651 7.36582 15.1582 7.34832 15.088C7.1858 14.4357 6.43894 14.1264 5.86282 14.4726C5.80078 14.5099 5.71763 14.578 5.55133 14.714L5.5513 14.7141C5.46323 14.7861 5.41918 14.8221 5.3781 14.8495C5.01212 15.093 4.53003 15.069 4.1901 14.7902C4.15194 14.7589 4.11171 14.7187 4.03126 14.6383L4.03124 14.6382L3.36127 13.9683L3.36126 13.9683C3.28089 13.8879 3.24071 13.8477 3.20945 13.8096C2.93064 13.4696 2.90659 12.9874 3.15019 12.6214C3.1775 12.5804 3.2135 12.5364 3.28551 12.4484L3.28552 12.4483C3.42139 12.2823 3.48932 12.1993 3.52656 12.1373C3.87311 11.5611 3.56362 10.814 2.91113 10.6516C2.84101 10.6341 2.73433 10.6234 2.52096 10.6021C2.40799 10.5908 2.3515 10.5851 2.30322 10.5755C1.87207 10.4889 1.54804 10.1309 1.50484 9.69326C1.5 9.64425 1.5 9.58748 1.5 9.47394V8.52648C1.5 8.41254 1.5 8.35557 1.50487 8.3064C1.5482 7.86904 1.87201 7.51124 2.30288 7.42461C2.35133 7.41487 2.40806 7.40919 2.52152 7.39785L2.52155 7.39784C2.73548 7.37645 2.84244 7.36575 2.91269 7.34825C3.56492 7.18573 3.87428 6.43888 3.528 5.86276C3.4907 5.80071 3.42269 5.71758 3.28665 5.55132L3.28665 5.55131C3.21462 5.46328 3.17861 5.41926 3.15128 5.3782C2.90774 5.0122 2.93178 4.53007 3.21054 4.19013C3.24182 4.15198 3.28203 4.11177 3.36246 4.03134L4.03267 3.36112C4.11286 3.28094 4.15295 3.24085 4.19096 3.20966C4.531 2.93066 5.01341 2.9066 5.37952 3.15038C5.42046 3.17763 5.46434 3.21354 5.5521 3.28535L5.55211 3.28535C5.71785 3.42095 5.80072 3.48876 5.86255 3.52596C6.43883 3.8727 7.18623 3.56312 7.34854 2.91044C7.36596 2.84041 7.37661 2.73388 7.39792 2.52081L7.39792 2.5208C7.4092 2.40798 7.41484 2.35157 7.42451 2.30335C7.51101 1.87209 7.86915 1.54798 8.30688 1.50482C8.35581 1.5 8.41251 1.5 8.52589 1.5H9.47392C9.58748 1.5 9.64426 1.5 9.69327 1.50484C10.1309 1.54805 10.4889 1.87206 10.5755 2.3032ZM9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" fill="#9197A4" />
                  </svg>
                </span>
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Hamburger Icon (visible on small screens) */}
          <div className="block md:hidden">
            <button onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="#fff"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Right side (hidden on small screens) */}
          <div className="hidden md:flex space-x-4">
            {isSettingPage ? 
              <div className="flex items-center gap-6 space-x-2 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className='flex items-center gap-3 wallet-id'>
                  <img src={MetaMask} />
                  <span className="font-mono">0x7C28...B6Q0</span>
                </div>

                <button className="bg-[#1E1F28] rounded-md side-btn">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.80776 17C1.34751 17 0.963216 16.8458 0.654883 16.5375C0.346549 16.2292 0.192383 15.8449 0.192383 15.3846V1.61537C0.192383 1.15512 0.346549 0.770833 0.654883 0.4625C0.963216 0.154167 1.34751 0 1.80776 0H8.23086V1H1.80776C1.65392 1 1.51291 1.0641 1.38471 1.1923C1.25649 1.32052 1.19238 1.46154 1.19238 1.61537V15.3846C1.19238 15.5385 1.25649 15.6795 1.38471 15.8077C1.51291 15.9359 1.65392 16 1.80776 16H8.23086V17H1.80776ZM12.2693 12.0385L11.5674 11.3192L13.8866 9H5.23086V8H13.8866L11.5674 5.68075L12.2693 4.96152L15.8078 8.5L12.2693 12.0385Z" fill="#9197A4" />
                    </svg>
                </button>
              </div>
            :
            <>
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

              <div className="flex justify-end items-center space-x-4">
                <button className="btn-active w-[128px] h-[32px] rounded-md text-white text-sm">Connect Wallet</button>
              </div>
            </>
          }
          </div>
        </nav>

        {/* Drawer Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 shadow-lg transform bg-[#0C0E11] ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="mt-16 space-y-4 p-4">
            {/* Add your nav items here */}
            <li>
              <button className={`nav-btns rounded-md text-white text-sm ${getBtnActiveClassName('dashboard')}`}
                onClick={() => navigate('/dashboard')}  >
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 15.0001C15.75 15.4143 15.4142 15.7501 15 15.7501H3C2.58579 15.7501 2.25 15.4143 2.25 15.0001V7.11686C2.25 6.88542 2.35685 6.66694 2.53954 6.52485L8.53957 1.85818C8.8104 1.64753 9.1896 1.64753 9.46043 1.85818L15.4604 6.52485C15.6431 6.66694 15.75 6.88542 15.75 7.11686V15.0001ZM8.25 9.75006V14.2501H9.75V9.75006H8.25Z" fill="white" />
                  </svg>
                </span>
                <span>Home</span>
              </button>
            </li>
            <li>
              <button className={`nav-btns rounded-md text-white text-sm ${getBtnActiveClassName('setting')}`}
                onClick={() => navigate('/setting')}  >
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5755 2.3032C10.5851 2.35149 10.5908 2.408 10.6021 2.52102C10.6234 2.73438 10.6341 2.84106 10.6516 2.91116C10.8139 3.56369 11.5611 3.8732 12.1374 3.52661C12.1993 3.48937 12.2822 3.4215 12.4481 3.28576C12.536 3.21388 12.5799 3.17794 12.6209 3.15066C12.987 2.90696 13.4693 2.93101 13.8093 3.20994C13.8474 3.24115 13.8875 3.28128 13.9677 3.36151L13.9677 3.36155L14.638 4.03176L14.638 4.03179C14.7183 4.11212 14.7585 4.15229 14.7897 4.19039C15.0686 4.53037 15.0926 5.01259 14.849 5.37862C14.8217 5.41964 14.7857 5.46362 14.7138 5.55157L14.7137 5.55159C14.5779 5.71767 14.5099 5.80072 14.4726 5.8627C14.1262 6.43887 14.4357 7.18589 15.088 7.34834C15.1582 7.36582 15.265 7.3765 15.4787 7.39787L15.4787 7.39787C15.592 7.4092 15.6486 7.41486 15.697 7.42458C16.128 7.51117 16.4519 7.86908 16.4951 8.30655C16.5 8.35565 16.5 8.41253 16.5 8.52629V9.47413C16.5 9.5875 16.5 9.64418 16.4952 9.6931C16.452 10.1308 16.1279 10.489 15.6966 10.5755C15.6484 10.5852 15.592 10.5908 15.4792 10.6021L15.4792 10.6021C15.2662 10.6234 15.1597 10.634 15.0897 10.6514C14.4369 10.8137 14.1274 11.5612 14.4741 12.1375C14.5113 12.1993 14.5792 12.2822 14.7149 12.448L14.7149 12.4481C14.7868 12.536 14.8228 12.58 14.8501 12.621C15.0938 12.9871 15.0697 13.4693 14.7908 13.8093C14.7596 13.8474 14.7194 13.8876 14.6392 13.9678L13.9692 14.6378L13.9692 14.6378C13.8886 14.7184 13.8484 14.7586 13.8102 14.79C13.4703 15.0686 12.9883 15.0926 12.6223 14.8492C12.5812 14.8218 12.5371 14.7858 12.449 14.7137L12.4489 14.7136L12.4489 14.7136C12.2824 14.5774 12.1992 14.5093 12.1371 14.472C11.561 14.1259 10.8144 14.4351 10.6518 15.0872C10.6342 15.1575 10.6235 15.2645 10.6021 15.4786L10.6021 15.4786L10.6021 15.4787C10.5908 15.592 10.5851 15.6487 10.5754 15.6971C10.4888 16.128 10.131 16.4518 9.69358 16.4951C9.64442 16.5 9.58746 16.5 9.47354 16.5H8.52627C8.41253 16.5 8.35566 16.5 8.30657 16.4951C7.86908 16.4519 7.51116 16.128 7.42457 15.697C7.41486 15.6486 7.4092 15.592 7.39789 15.4789L7.39788 15.4788C7.37651 15.2651 7.36582 15.1582 7.34832 15.088C7.1858 14.4357 6.43894 14.1264 5.86282 14.4726C5.80078 14.5099 5.71763 14.578 5.55133 14.714L5.5513 14.7141C5.46323 14.7861 5.41918 14.8221 5.3781 14.8495C5.01212 15.093 4.53003 15.069 4.1901 14.7902C4.15194 14.7589 4.11171 14.7187 4.03126 14.6383L4.03124 14.6382L3.36127 13.9683L3.36126 13.9683C3.28089 13.8879 3.24071 13.8477 3.20945 13.8096C2.93064 13.4696 2.90659 12.9874 3.15019 12.6214C3.1775 12.5804 3.2135 12.5364 3.28551 12.4484L3.28552 12.4483C3.42139 12.2823 3.48932 12.1993 3.52656 12.1373C3.87311 11.5611 3.56362 10.814 2.91113 10.6516C2.84101 10.6341 2.73433 10.6234 2.52096 10.6021C2.40799 10.5908 2.3515 10.5851 2.30322 10.5755C1.87207 10.4889 1.54804 10.1309 1.50484 9.69326C1.5 9.64425 1.5 9.58748 1.5 9.47394V8.52648C1.5 8.41254 1.5 8.35557 1.50487 8.3064C1.5482 7.86904 1.87201 7.51124 2.30288 7.42461C2.35133 7.41487 2.40806 7.40919 2.52152 7.39785L2.52155 7.39784C2.73548 7.37645 2.84244 7.36575 2.91269 7.34825C3.56492 7.18573 3.87428 6.43888 3.528 5.86276C3.4907 5.80071 3.42269 5.71758 3.28665 5.55132L3.28665 5.55131C3.21462 5.46328 3.17861 5.41926 3.15128 5.3782C2.90774 5.0122 2.93178 4.53007 3.21054 4.19013C3.24182 4.15198 3.28203 4.11177 3.36246 4.03134L4.03267 3.36112C4.11286 3.28094 4.15295 3.24085 4.19096 3.20966C4.531 2.93066 5.01341 2.9066 5.37952 3.15038C5.42046 3.17763 5.46434 3.21354 5.5521 3.28535L5.55211 3.28535C5.71785 3.42095 5.80072 3.48876 5.86255 3.52596C6.43883 3.8727 7.18623 3.56312 7.34854 2.91044C7.36596 2.84041 7.37661 2.73388 7.39792 2.52081L7.39792 2.5208C7.4092 2.40798 7.41484 2.35157 7.42451 2.30335C7.51101 1.87209 7.86915 1.54798 8.30688 1.50482C8.35581 1.5 8.41251 1.5 8.52589 1.5H9.47392C9.58748 1.5 9.64426 1.5 9.69327 1.50484C10.1309 1.54805 10.4889 1.87206 10.5755 2.3032ZM9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" fill="#9197A4" />
                  </svg>
                </span>
                <span>Settings</span>
              </button>
            </li>
            <li className='mt-8'>
              <button className="btn-active w-[128px] h-[32px] rounded-md text-white text-sm">Connect Wallet</button>
            </li>
          </ul>
        </div>

        {/* Overlay (when the drawer is open) */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>

      {!hideSecondHeader &&
        <header className="dashboard-bg header-2 text-white py-3 px-2">
          <div className="grid grid-cols-12 items-center">

            {/* Logo and Token Info - Spans 3 columns */}
            <div className='col-span-12 md:col-span-2'>
              <div className="flex items-center space-x-4 justify-between pr-3">
                <div className='flex items-center gap-2'>
                  <div className="">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2_163)">
                        <path d="M0 0H30V30H0V0Z" fill="white" />
                        <path d="M9.24678 9.24865C10.6968 7.79867 12.6251 7 14.6752 7C16.7252 7 18.6535 7.79867 20.1035 9.24865C21.5535 10.6986 22.3511 12.6259 22.3511 14.677C22.3511 15.954 22.0404 17.183 21.4553 18.2796L19.3177 16.1409C19.4639 15.6732 19.5408 15.181 19.5408 14.677C19.5408 13.3765 19.0347 12.155 18.1154 11.2346C17.1961 10.3153 15.9746 9.80921 14.6741 9.80921C13.3736 9.80921 12.1521 10.3164 11.2328 11.2346C9.3354 13.132 9.3354 16.2199 11.2328 18.1183C12.5568 19.4423 14.4616 19.8427 16.1358 19.3185C16.4241 19.2277 16.7049 19.1102 16.975 18.965L19.0155 21.0055C18.7752 21.1699 18.5275 21.3205 18.2734 21.455C17.1523 22.0508 15.9127 22.3498 14.673 22.3498C12.7073 22.3498 10.7405 21.6013 9.24465 20.1043C6.25178 17.1104 6.25178 12.2415 9.24465 9.24758L9.24678 9.24865Z" fill="url(#paint0_linear_2_163)" />
                        <path d="M16.9771 18.9651L15.3819 17.3699L17.369 15.3828L18.9652 16.9801L21.0057 19.0206L22.9992 21.013L21.0121 23L19.0176 21.0055L16.9771 18.9651Z" fill="url(#paint1_linear_2_163)" />
                        <path d="M14.6767 16.4047C15.6308 16.4047 16.4043 15.6312 16.4043 14.6771C16.4043 13.7229 15.6308 12.9495 14.6767 12.9495C13.7226 12.9495 12.9491 13.7229 12.9491 14.6771C12.9491 15.6312 13.7226 16.4047 14.6767 16.4047Z" fill="url(#paint2_linear_2_163)" />
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_2_163" x1="13.4537" y1="8.82476" x2="17.4844" y2="28.0824" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#38A1E2" />
                          <stop offset="1" stopColor="#005CDC" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2_163" x1="17.6658" y1="17.5845" x2="22.4995" y2="22.6786" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#38A1E2" />
                          <stop offset="1" stopColor="#005CDC" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_2_163" x1="12.869" y1="12.3985" x2="16.5709" y2="17.0666" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#38A1E2" />
                          <stop offset="1" stopColor="#005CDC" />
                        </linearGradient>
                        <clipPath id="clip0_2_163">
                          <path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">WLIQ</p>
                    <p className="text-xs text-gray-400">WallitIQ</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="fs075rem he-text-color">Token Balance</p>
                  <p className='fs075rem text-white letter-spacing-1px'>0.00 WLIQ</p>
                </div>
              </div>
            </div>

            {/* Center - Token Information - Spans 6 columns */}
            <div className='col-span-12 md:col-span-6'>
              <div className="flex justify-start text-sm items-center referal-center">
                <div className='flex gap-2 items-center logo-spacing'>
                  <div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2_182)">
                        <path d="M0 0H30V30H0V0Z" fill="#627EEA" />
                        <path d="M15 3.75V11.9156L21.25 15L15 3.75Z" fill="white" fill-opacity="0.6" />
                        <path d="M15.0001 3.75L8.75009 15L15.0001 11.9156V3.75Z" fill="white" />
                        <path d="M15 19.9169V25L21.25 16.25L15 19.9169Z" fill="white" fill-opacity="0.6" />
                        <path d="M15.0001 25V19.9169L8.75009 16.25L15.0001 25Z" fill="white" />
                        <path d="M15 20L21.25 15.7632L15 12.5V20Z" fill="white" fill-opacity="0.2" />
                        <path d="M8.75009 15.7632L15.0001 20V12.5L8.75009 15.7632Z" fill="white" fill-opacity="0.6" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_182">
                          <rect width="30" height="30" rx="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="fs075rem he-text-color">ETH</p>
                    <p className=' text-white letter-spacing-1px'>0.00</p>
                  </div>
                </div>
                <div>
                  <svg width="2" height="36" viewBox="0 0 2 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L1 36" stroke="#272337" />
                  </svg>
                </div>
                <div className='flex gap-2 items-center logo-spacing'>
                  <div>
                    <img src={BTC} />
                  </div>
                  <div className="text-center">
                    <p className="fs075rem he-text-color">BTC</p>
                    <p className=' text-white letter-spacing-1px'>0.00</p>
                  </div>
                </div>
                <div>
                  <svg width="2" height="36" viewBox="0 0 2 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L1 36" stroke="#272337" />
                  </svg>
                </div>
                <div className='flex gap-2 items-center logo-spacing'>
                  <div>
                    <img src={USDT} />
                  </div>
                  <div className="text-center">
                    <p className="fs075rem he-text-color">USDT</p>
                    <p className=' text-white letter-spacing-1px'>0.00</p>
                  </div>
                </div>
                <div>
                  <svg width="2" height="36" viewBox="0 0 2 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L1 36" stroke="#272337" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Referral Input - Spans 3 columns */}
            <div className='col-span-12 md:col-span-4'>
              <div className="flex justify-end items-center space-x-2 referal-center">
                <div className='referal-box'>
                  <span className="text-sm text-white letter-spacing-1px">Referral link: </span>
                  <input
                    type="text"
                    value="ref3278?38\3..."
                    readOnly
                    className="bg-transparent border-none outline-none text-[#9197A4] letter-spacing-1px w-[120px]"
                  />
                  <button className="text-sm px-4 py-1 copy-btn rounded-md">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </header>
      }
    </>
  );
};

export default Header;