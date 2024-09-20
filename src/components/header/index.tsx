import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "../navbar";
import Logo from "../../images/logo.svg";
import Wallet from "../../images/icons/wallet.svg";
import Signin from "../../images/icons/sign_in.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const isIpadScreens = useMediaQuery(
    "(min-width: 744px) and (max-width: 1199px)"
  );

  return (
    <div>
      <div className="lg:px-20 md:px-10 py-5">
        <header className="main-header flex z-10 flex-wrap gap-10 justify-between items-center p-2.5 w-full border border-solid border-white border-opacity-30 rounded-[100px] max-md:max-w-full">
            <div className="flex gap-2 items-center self-stretch my-auto">
                <img src={Logo} className="logo" width="100" height="100" alt="Company logo icon" />
            </div>
            {isAboveMediumScreens ? (
                <div className="flex gap-2 items-center self-stretch my-auto">
                    <Navbar />
                    <div className="flex gap-2 items-center self-stretch my-auto text-base font-medium text-black min-w-[240px]">
                        <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 3.3335H8.125C5.47335 3.3335 4.14752 3.3335 3.32376 4.17033C2.5 5.00717 2.5 6.35404 2.5 9.04778V10.9525C2.5 13.6463 2.5 14.9932 3.32376 15.83C4.14752 16.6668 5.47335 16.6668 8.125 16.6668H11.875C14.5267 16.6668 15.8525 16.6668 16.6762 15.83C17.5 14.9932 17.5 13.6463 17.5 10.9525V9.04778C17.5 6.35404 17.5 5.00717 16.6762 4.17033C15.8525 3.3335 14.5267 3.3335 11.875 3.3335Z" stroke="black" stroke-width="1.3"/>
                            <path d="M5.83337 6.6665H8.33337" stroke="black" stroke-width="1.3" stroke-linecap="round"/>
                            <path d="M15.8333 13.3335H14.1667C13.5436 13.3335 13.2321 13.3335 13 13.1995C12.848 13.1118 12.7217 12.9855 12.634 12.8335C12.5 12.6014 12.5 12.2899 12.5 11.6668C12.5 11.0438 12.5 10.7322 12.634 10.5002C12.7217 10.3481 12.848 10.2219 13 10.1341C13.2321 10.0002 13.5436 10.0002 14.1667 10.0002H15.8333C16.4564 10.0002 16.7679 10.0002 17 10.1341C17.152 10.2219 17.2783 10.3481 17.366 10.5002C17.5 10.7322 17.5 11.0438 17.5 11.6668C17.5 12.2899 17.5 12.6014 17.366 12.8335C17.2783 12.9855 17.152 13.1118 17 13.1995C16.7679 13.3335 16.4564 13.3335 15.8333 13.3335Z" stroke="black" stroke-width="1.3"/>
                          </svg>
                            <span className="font-face-urbanist-medium self-stretch my-auto">Connect Wallet</span>
                        </button>
                        <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.10748 15.8924C5.27292 17.0578 6.75778 17.8515 8.37429 18.173C9.9908 18.4946 11.6664 18.3296 13.1891 17.6988C14.7118 17.0681 16.0133 16 16.929 14.6296C17.8446 13.2592 18.3334 11.648 18.3334 9.99984C18.3334 8.35166 17.8446 6.7405 16.929 5.37009C16.0133 3.99968 14.7118 2.93157 13.1891 2.30084C11.6664 1.67011 9.9908 1.50508 8.37429 1.82663C6.75778 2.14817 5.27292 2.94184 4.10748 4.10728" stroke="#33363F" stroke-width="1.3"/>
                            <path d="M12.5 10.0002L13.0076 9.59411L13.3324 10.0002L13.0076 10.4062L12.5 10.0002ZM2.5 10.6502C2.14102 10.6502 1.85 10.3591 1.85 10.0002C1.85 9.64118 2.14102 9.35016 2.5 9.35016V10.6502ZM9.67423 5.42744L13.0076 9.59411L11.9924 10.4062L8.6591 6.23955L9.67423 5.42744ZM13.0076 10.4062L9.67423 14.5729L8.6591 13.7608L11.9924 9.59411L13.0076 10.4062ZM12.5 10.6502H2.5V9.35016H12.5V10.6502Z" fill="#33363F"/>
                          </svg>
                          <span className="font-face-urbanist-medium self-stretch my-auto">Log In</span>
                        </button>
                    </div>
                </div>
            ): (


                <div className="flex gap-2 items-center self-stretch my-auto text-base font-medium text-black">
                  <button
                    className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="h-6 w-6 text-white" />
                  </button>
                  {isIpadScreens ?
                      <>
                          <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]">
                              <img src={Wallet} width="50" height="50" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                              <span className="font-face-urbanist-medium self-stretch my-auto">Connect Wallet</span>
                          </button>
                          <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]">
                              <img src={Signin} width="50" height="50" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                              <span className="font-face-urbanist-medium self-stretch my-auto">Log In</span>
                          </button>
                      </>
                      : null
                  }
                </div>
            )}
        </header>
      </div>

      <div>
          {isMenuToggled && (
            <div className="mobile-menu fixed left-0 top-0 h-full w-full bg-black shadow-lg z-20 p-5">
              <div className="mobile-menu-wrapper flex flex-col gap-4">
                <XMarkIcon className="menu-close-icon h-6 w-6 text-white" onClick={() => setIsMenuToggled(false)} />
                <Navbar />
                <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]">
                    <img src={Wallet} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square svg-image" alt="" />
                    <span className="font-face-urbanist-medium self-stretch my-auto">Connect Wallet</span>
                </button>
                <button className="header-btn flex gap-2 justify-center items-center self-stretch px-4 py-3 my-auto bg-white rounded-[100px]">
                    <img src={Signin} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square svg-image" alt="" />
                    <span className="font-face-urbanist-medium self-stretch my-auto">Log In</span>
                </button>
              </div>
            </div>
          )}

          {isMenuToggled && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={() => setIsMenuToggled(false)}
            />
          )}
      </div>
    </div>
  );
};
export default Header;
