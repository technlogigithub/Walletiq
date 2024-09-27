import React, { useState, useEffect } from 'react';

interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


const TokenSaleProgress: React.FC = () => {
  const [time, setTime] = useState<TimeState>({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const myInterval = setInterval(() => {
      const { seconds, minutes, hours, days } = time;

      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(myInterval);
            } else {
              setTime({
                days: days - 1,
                hours: 23,
                minutes: 59,
                seconds: 59,
              });
            }
          } else {
            setTime({
              days: days,
              hours: hours - 1,
              minutes: 59,
              seconds: 59,
            });
          }
        } else {
          setTime({
            days: days,
            hours: hours,
            minutes: minutes - 1,
            seconds: 59,
          });
        }
      } else {
        setTime({
          ...time,
          seconds: seconds - 1
        });
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [time]);

  const { days, hours, minutes, seconds } = time;

  return (
    <div className="p-6 card-bg rounded-lg mt-7">
      <div className='flex items-center justify-between'>
        <h2 className="text-lg fw-500 mb-4 flex items-center gap-3">Stage 1
          <span className='flex items-center gap-2 active-pill'>
            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3.5" r="3" fill="#37CBB0" />
            </svg>
            <span className='fs075rem'>Active</span>
          </span>
        </h2>
        <div className='flex flex-col justify-end'>
          <span className='fs1p25rem fw-500'>1 WLIQ = 0.00 USD</span>
          <span className='text-end cd-grey-col'>1 USD = 0.00 WLIQ</span>
        </div>
      </div>


      <div className="flex space-x-4 mt-6 items-baseline">
        <div className="text-center">
          <p className="text-2xl time-block">{days}</p>
          <p className="text-gray-400 mt-1 fs075rem">Days</p>
        </div>
        <p className='font-bold'>:</p>
        <div className="text-center">
          <p className="text-2xl time-block">{hours}</p>
          <p className="text-gray-400 mt-1 fs075rem">Hours</p>
        </div>
        <p className='font-bold'>:</p>
        <div className="text-center">
          <p className="text-2xl time-block">{minutes}</p>
          <p className="text-gray-400 mt-1 fs075rem">Minutes</p>
        </div>
        <p className='font-bold'>:</p>
        <div className="text-center">
          <p className="text-2xl time-block">{seconds}</p>
          <p className="text-gray-400 mt-1 fs075rem">Seconds</p>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-gray-400">
        <div className='flex flex-col justify-start'>
          <span className='text-white font-bold letter-spacing-1px'>Raised Amount</span>
          <span className='text-left'>0.00 WLIQ</span>
        </div>
        <div className='flex flex-col justify-end'>
          <span className='text-white font-bold letter-spacing-1px'>Raised Amount</span>
          <span className='text-right'>0.00 WLIQ</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center">
        <svg width="480" height="23" viewBox="0 0 480 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.2" x="254" y="6" width="226" height="3" rx="1.5" fill="#D9D9D9" />
          <rect y="6" width="249" height="3" rx="1.5" fill="url(#paint0_linear_2_435)" />
          <g filter="url(#filter0_d_2_435)">
            <circle cx="254.5" cy="7.5" r="6.5" fill="#4F62EF" />
          </g>
          <defs>
            <filter id="filter0_d_2_435" x="243.5" y="0.5" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2.25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_435" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_435" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_2_435" x1="0" y1="7.5" x2="249" y2="7.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#272439" stop-opacity="0" />
              <stop offset="1" stop-color="#5367FE" />
            </linearGradient>
          </defs>
        </svg>


      </div>
    </div>
  );
};

export default TokenSaleProgress;
