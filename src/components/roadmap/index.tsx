import React, { useState, useEffect } from "react";
import Star from "../../images/icons/star.svg";

const Roadmap = () => {
    const [activePhase, setActivePhase] = useState(1);
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        const roadmapElement = document.getElementById("roadmap");

        if (roadmapElement) {
            const sectionTop = roadmapElement.getBoundingClientRect().top + window.scrollY + 500;
            const sectionHeight = roadmapElement.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const phaseHeight = sectionHeight / 4;
                const scrollOffset = scrollPosition - sectionTop;

                if (scrollOffset < phaseHeight) {
                    setActivePhase(1);
                } else if (scrollOffset < 2 * phaseHeight) {
                    setActivePhase(2);
                } else if (scrollOffset < 3 * phaseHeight) {
                    setActivePhase(3);
                } else {
                    setActivePhase(4);
                }

                const scrollPercentage = Math.min((scrollOffset / sectionHeight) * 100, 100);
                setProgress(scrollPercentage);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const phase1 = [
        { heading: 'Whitepaper launch'},
        { heading: 'Unveiling the website'},
        { heading: 'Smart Contract Development'},
        { heading: 'Contract security audit'},
        { heading: 'Community setup'},
        { heading: 'Social media blitz'},

    ];

    const phase2 = [
        { heading: 'Community engagement'},
        { heading: 'Public presale launch'},
        { heading: 'Marketing and Brand building'},
        { heading: 'Team expansion'},
        { heading: 'influencers influx'},
        { heading: 'Giveaways and bonus rewards'},

    ];

    const phase3 = [
        { heading: 'Presale expansion'},
        { heading: 'Aggressive marketing campaigns'},
        { heading: 'User acquisition'},
        { heading: 'Platform beta development'},
        { heading: 'Community rewards'},
        { heading: 'Staking Dapp development'},

    ];

    const phase4 = [
        { heading: 'Presale competion'},
        { heading: 'Token distribution'},
        { heading: 'Wallet release'},
        { heading: 'CMC and CG listing'},
        { heading: 'Initial DEX listing'},
        { heading: 'CEX listing'},

    ];
    return (
        <div className="roadmap-section" id="roadmap">
            <div className="roadmap-subsection-left">
                <div className="roadmap-scale">
                    <p className="roadmap-progress">Roadmap progress</p>
                    <div className="roadmap-progress-area">
                        <div className="roadmap-progress-bar" id="roadmapProgressBar">
                            <div className="roadmap-progress-fill" style={{ height: `${progress}%` }}></div>

                            <div>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`roadmap-bullet-2 roadmap-dark-bullet ${activePhase === 1 ? 'visible' : 'hidden'}`}>
                                    <circle cx="23" cy="23" r="20.5" fill="black" stroke="#262626" stroke-width="5"/>
                                        <g filter="url(#filter0_f_893_377)">
                                            <circle cx="23" cy="23" r="9" fill="#1337FF"/>
                                        </g>
                                    <defs>
                                        <filter id="filter0_f_893_377" x="10.9" y="10.9" width="24.2" height="24.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="1.55" result="effect1_foregroundBlur_893_377"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className={`roadmap-bullet-2 ${activePhase === 1 ? 'hidden' : 'visible'}`}>
                                    <circle cx="17" cy="17" r="17" fill="#262626"/>
                                </svg>
                            </div>


                            <div>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`roadmap-bullet-3 roadmap-dark-bullet ${activePhase === 2 ? 'visible' : 'hidden'}`}>
                                    <circle cx="23" cy="23" r="20.5" fill="black" stroke="#262626" stroke-width="5"/>
                                        <g filter="url(#filter0_f_893_377)">
                                            <circle cx="23" cy="23" r="9" fill="#1337FF"/>
                                        </g>
                                    <defs>
                                        <filter id="filter0_f_893_377" x="10.9" y="10.9" width="24.2" height="24.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="1.55" result="effect1_foregroundBlur_893_377"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className={`roadmap-bullet-3 ${activePhase === 2 ? 'hidden' : 'visible'}`}>
                                    <circle cx="17" cy="17" r="17" fill="#262626"/>
                                </svg>
                            </div>

                            <div>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`roadmap-bullet-4 roadmap-dark-bullet ${activePhase === 3 ? 'visible' : 'hidden'}`}>
                                    <circle cx="23" cy="23" r="20.5" fill="black" stroke="#262626" stroke-width="5"/>
                                        <g filter="url(#filter0_f_893_377)">
                                            <circle cx="23" cy="23" r="9" fill="#1337FF"/>
                                        </g>
                                    <defs>
                                        <filter id="filter0_f_893_377" x="10.9" y="10.9" width="24.2" height="24.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="1.55" result="effect1_foregroundBlur_893_377"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className={`roadmap-bullet-4 ${activePhase === 3 ? 'hidden' : 'visible'}`}>
                                    <circle cx="17" cy="17" r="17" fill="#262626"/>
                                </svg>
                            </div>

                            <div>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`roadmap-bullet-5 roadmap-dark-bullet ${activePhase === 4 ? 'visible' : 'hidden'}`}>
                                    <circle cx="23" cy="23" r="20.5" fill="black" stroke="#262626" stroke-width="5"/>
                                        <g filter="url(#filter0_f_893_377)">
                                            <circle cx="23" cy="23" r="9" fill="#1337FF"/>
                                        </g>
                                    <defs>
                                        <filter id="filter0_f_893_377" x="10.9" y="10.9" width="24.2" height="24.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="1.55" result="effect1_foregroundBlur_893_377"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className={`roadmap-bullet-5 ${activePhase === 4 ? 'hidden' : 'visible'}`}>
                                    <circle cx="17" cy="17" r="17" fill="#262626"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="roadmap-subsection-right"

            >
                <div className=" roadmap-phase"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="3000">
                    <p className="roadmap-title">Phase 1</p>
                    <h1 className="roadmap-heading">
                        Foundation for Success
                    </h1>
                    <ul className="mt-8 roadmap-phase-list">
                        {phase1.map((item, index) => (
                            <li key={index} className="roadmap-li flex items-center mb-4">
                                <img src={Star} alt="" className="w-[20px]" width="50" height="50"/>
                                <span className="mx-3">{item.heading}</span>
                            </li>
                        ))};
                    </ul>

                </div>

                <div className=" roadmap-phase"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="3000">
                    <p className="roadmap-title">Phase 2</p>
                    <h1 className="roadmap-heading">
                        Lift-off
                    </h1>
                    <ul className="mt-8 roadmap-phase-list">
                        {phase2.map((item, index) => (
                            <li key={index} className="roadmap-li flex items-center mb-4">
                                <img src={Star} alt="" className="w-[20px]" width="50" height="50"/>
                                <span className="mx-3">{item.heading}</span>
                            </li>
                        ))};
                    </ul>

                </div>

                <div className=" roadmap-phase"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="3000">
                    <p className="roadmap-title">Phase 3</p>
                    <h1 className="roadmap-heading">
                        Intelligent Growth
                    </h1>
                    <ul className="mt-8 roadmap-phase-list">
                        {phase3.map((item, index) => (
                            <li key={index} className="roadmap-li flex items-center mb-4">
                                <img src={Star} alt="" className="w-[20px]" width="50" height="50"/>
                                <span className="mx-3">{item.heading}</span>
                            </li>
                        ))};
                    </ul>

                </div>

                <div className=" roadmap-phase"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="3000">
                    <p className="roadmap-title">Phase 4</p>
                    <h1 className="roadmap-heading">
                        Soaring High
                    </h1>
                    <ul className="mt-8 roadmap-phase-list">
                        {phase4.map((item, index) => (
                            <li key={index} className="roadmap-li flex items-center mb-4">
                                <img src={Star} alt="" className="w-[20px]" width="50" height="50"/>
                                <span className="mx-3">{item.heading}</span>
                            </li>
                        ))};
                    </ul>

                </div>
            </div>

        </div>


    );
};
export default Roadmap;
