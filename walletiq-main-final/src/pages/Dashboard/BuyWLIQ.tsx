import React, { useState } from 'react';

const BuyWLIQ: React.FC = () => {
	const [inputValue, setInputValue] = useState("0.16628");
	const [inputValue2, setInputValue2] = useState("546.34");


	const handleInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleInputChange2 = (e: any) => {
		setInputValue2(e.target.value);
	};

	return (
		<div className="p-6 card-bg rounded-lg">
			<h2 className="text-lg font-normal mb-4 letter-spacing-1px">Buy WLIQ Tokens</h2>

			<div className='cd-logo-container flex gap-4'>
				<div>
					<svg width="52" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_2_413)">
							<path d="M22 0H52V30H22V0Z" fill="#627EEA" />
							<path d="M37 3.75V11.9156L43.25 15L37 3.75Z" fill="white" fill-opacity="0.6" />
							<path d="M37.0001 3.75L30.7501 15L37.0001 11.9156V3.75Z" fill="white" />
							<path d="M37 19.9169V25L43.25 16.25L37 19.9169Z" fill="white" fill-opacity="0.6" />
							<path d="M37.0001 25V19.9169L30.7501 16.25L37.0001 25Z" fill="white" />
							<path d="M37 20L43.25 15.7632L37 12.5V20Z" fill="white" fill-opacity="0.2" />
							<path d="M30.7501 15.7632L37.0001 20V12.5L30.7501 15.7632Z" fill="white" fill-opacity="0.6" />
						</g>
						<g clip-path="url(#clip1_2_413)">
							<path d="M0 0H30V30H0V0Z" fill="white" />
							<path d="M9.24678 9.24865C10.6968 7.79867 12.6251 7 14.6752 7C16.7252 7 18.6535 7.79867 20.1035 9.24865C21.5535 10.6986 22.3511 12.6259 22.3511 14.677C22.3511 15.954 22.0404 17.183 21.4553 18.2796L19.3177 16.1409C19.4639 15.6732 19.5408 15.181 19.5408 14.677C19.5408 13.3765 19.0347 12.155 18.1154 11.2346C17.1961 10.3153 15.9746 9.80921 14.6741 9.80921C13.3736 9.80921 12.1521 10.3164 11.2328 11.2346C9.3354 13.132 9.3354 16.2199 11.2328 18.1183C12.5568 19.4423 14.4616 19.8427 16.1358 19.3185C16.4241 19.2277 16.7049 19.1102 16.975 18.965L19.0155 21.0055C18.7752 21.1699 18.5275 21.3205 18.2734 21.455C17.1523 22.0508 15.9127 22.3498 14.673 22.3498C12.7073 22.3498 10.7405 21.6013 9.24465 20.1043C6.25178 17.1104 6.25178 12.2415 9.24465 9.24758L9.24678 9.24865Z" fill="url(#paint0_linear_2_413)" />
							<path d="M16.9771 18.9651L15.3819 17.3699L17.369 15.3828L18.9652 16.9801L21.0057 19.0206L22.9992 21.013L21.0121 23L19.0176 21.0055L16.9771 18.9651Z" fill="url(#paint1_linear_2_413)" />
							<path d="M14.6767 16.4047C15.6308 16.4047 16.4043 15.6312 16.4043 14.6771C16.4043 13.7229 15.6308 12.9495 14.6767 12.9495C13.7226 12.9495 12.9491 13.7229 12.9491 14.6771C12.9491 15.6312 13.7226 16.4047 14.6767 16.4047Z" fill="url(#paint2_linear_2_413)" />
						</g>
						<defs>
							<linearGradient id="paint0_linear_2_413" x1="13.4537" y1="8.82476" x2="17.4844" y2="28.0824" gradientUnits="userSpaceOnUse">
								<stop stop-color="#38A1E2" />
								<stop offset="1" stop-color="#005CDC" />
							</linearGradient>
							<linearGradient id="paint1_linear_2_413" x1="17.6658" y1="17.5845" x2="22.4995" y2="22.6786" gradientUnits="userSpaceOnUse">
								<stop stop-color="#38A1E2" />
								<stop offset="1" stop-color="#005CDC" />
							</linearGradient>
							<linearGradient id="paint2_linear_2_413" x1="12.869" y1="12.3985" x2="16.5709" y2="17.0666" gradientUnits="userSpaceOnUse">
								<stop stop-color="#38A1E2" />
								<stop offset="1" stop-color="#005CDC" />
							</linearGradient>
							<clipPath id="clip0_2_413">
								<rect x="22" width="30" height="30" rx="15" fill="white" />
							</clipPath>
							<clipPath id="clip1_2_413">
								<path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<div className='flex flex-col gap-1 pb-5'>
					<span className='font-bold fs1p25rem'>WLIQ/ETH</span>
					<span className='he-text-color'>WallitIQ / Etherium</span>
				</div>
			</div>

			<div className='relative'>
				<div className='eth-input'>
					<div className="w-full h-auto p-2 lhs-card-bg text-white rounded-md">
						<div className="flex justify-between items-center">
							<div className="text-left">
								{/* <span className="input-text-size letter-spacing-1px">0.16628</span> */}
								<input
									type="number"
									value={inputValue}
									onChange={handleInputChange}  // This will allow editing the input
									className="w-full p-2 input-text-size text-white rounded"
								/>							</div>
							<div className="flex items-center gap-3 logo-indicator">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_2_393)">
										<path d="M0 0H20V20H0V0Z" fill="#627EEA" />
										<path d="M10 2.5V7.94373L14.1667 10L10 2.5Z" fill="white" fill-opacity="0.6" />
										<path d="M10 2.5L5.83337 10L10 7.94373V2.5Z" fill="white" />
										<path d="M10 13.2779V16.6666L14.1667 10.8333L10 13.2779Z" fill="white" fill-opacity="0.6" />
										<path d="M10 16.6666V13.2779L5.83337 10.8333L10 16.6666Z" fill="white" />
										<path d="M10 13.3333L14.1667 10.5087L10 8.33325V13.3333Z" fill="white" fill-opacity="0.2" />
										<path d="M5.83337 10.5087L10 13.3333V8.33325L5.83337 10.5087Z" fill="white" fill-opacity="0.6" />
									</g>
									<defs>
										<clipPath id="clip0_2_393">
											<rect width="20" height="20" rx="10" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<span className="text-sm letter-spacing-1px">ETH</span>
							</div>
						</div>
						<div className="flex justify-between items-center mt-2">
							<div className="text-left">
								<span className="text-sm letter-spacing-1px">$326.00</span>
							</div>
							<div className="text-right">
								<span className="text-sm letter-spacing-1px">Balance: 1314.56</span>
							</div>
						</div>
					</div>
				</div>
				<div className='wlq-input mt-5'>
					<div className="w-full h-auto p-2 lhs-card-bg text-white rounded-md">
						<div className="flex justify-between items-center">
							<div className="text-left">
								{/* <span className="input-text-size letter-spacing-1px">0.16628</span> */}
								<input
									type="number"
									value={inputValue2}
									onChange={handleInputChange2}  // This will allow editing the input
									className="w-full p-2 input-text-size text-white rounded"
								/>							</div>
							<div className="flex items-center gap-3 logo-indicator">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="20" height="20" rx="10" fill="white" />
									<path d="M5.68509 5.68649C6.77258 4.599 8.21883 4 9.75637 4C11.2939 4 12.7402 4.599 13.8276 5.68649C14.9151 6.77398 15.5133 8.21942 15.5133 9.75777C15.5133 10.7155 15.2803 11.6372 14.8415 12.4597L13.2383 10.8557C13.348 10.5049 13.4056 10.1357 13.4056 9.75777C13.4056 8.78239 13.026 7.86627 12.3366 7.17598C11.6471 6.48649 10.7309 6.10691 9.75557 6.10691C8.78019 6.10691 7.86407 6.48729 7.17458 7.17598C5.75155 8.599 5.75155 10.9149 7.17458 12.3387C8.16757 13.3317 9.59621 13.632 10.8519 13.2389C11.0681 13.1708 11.2787 13.0827 11.4813 12.9738L13.0116 14.5041C12.8314 14.6274 12.6457 14.7404 12.4551 14.8413C11.6142 15.2881 10.6845 15.5123 9.75477 15.5123C8.28049 15.5123 6.80541 14.951 5.68349 13.8282C3.43884 11.5828 3.43884 7.93114 5.68349 5.68569L5.68509 5.68649Z" fill="url(#paint0_linear_2_382)" />
									<path d="M11.4827 12.9738L10.2863 11.7774L11.7766 10.2871L12.9738 11.4851L14.5041 13.0154L15.9992 14.5097L14.5089 16L13.013 14.5041L11.4827 12.9738Z" fill="url(#paint1_linear_2_382)" />
									<path d="M9.75748 11.0536C10.4731 11.0536 11.0532 10.4734 11.0532 9.75786C11.0532 9.04226 10.4731 8.46216 9.75748 8.46216C9.04189 8.46216 8.46179 9.04226 8.46179 9.75786C8.46179 10.4734 9.04189 11.0536 9.75748 11.0536Z" fill="url(#paint2_linear_2_382)" />
									<defs>
										<linearGradient id="paint0_linear_2_382" x1="8.84025" y1="5.36857" x2="11.8633" y2="19.8118" gradientUnits="userSpaceOnUse">
											<stop stop-color="#38A1E2" />
											<stop offset="1" stop-color="#005CDC" />
										</linearGradient>
										<linearGradient id="paint1_linear_2_382" x1="11.9992" y1="11.9384" x2="15.6244" y2="15.759" gradientUnits="userSpaceOnUse">
											<stop stop-color="#38A1E2" />
											<stop offset="1" stop-color="#005CDC" />
										</linearGradient>
										<linearGradient id="paint2_linear_2_382" x1="8.40173" y1="8.04894" x2="11.1781" y2="11.55" gradientUnits="userSpaceOnUse">
											<stop stop-color="#38A1E2" />
											<stop offset="1" stop-color="#005CDC" />
										</linearGradient>
									</defs>
								</svg>
								<span className="text-sm letter-spacing-1px">WLIQ</span>
							</div>
						</div>
						<div className="flex justify-between items-center mt-2">
							<div className="text-left">
								<span className="text-sm letter-spacing-1px">$326.00</span>
							</div>
							<div className="text-right">
								<span className="text-sm letter-spacing-1px">Balance: 1314.56</span>
							</div>
						</div>
					</div>
				</div>

				<div className='compare-logo'>
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_b_2_405)">
							<rect width="30" height="30" rx="4" fill="white" fill-opacity="0.05" />
						</g>
						<mask id="mask0_2_405" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="3" y="3" width="24" height="24">
							<rect x="3" y="27" width="24" height="24" transform="rotate(-90 3 27)" fill="#D9D9D9" />
						</mask>
						<g mask="url(#mask0_2_405)">
							<path d="M24.1154 19.8078L20.8077 23.1155L17.5 19.8078L18.2192 19.1001L20.3077 21.1885V9.69238H16.3077V8.69238L21.3077 8.69238V21.1885L23.3962 19.1001L24.1154 19.8078ZM13.6923 21.3078H8.6923V8.81163L6.60385 10.9001L5.8846 10.1924L9.1923 6.88468L12.5 10.1924L11.7808 10.9001L9.6923 8.81163V20.3078H13.6923V21.3078Z" fill="white" />
						</g>
						<defs>
							<filter id="filter0_b_2_405" x="-8" y="-8" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
								<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_405" />
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_405" result="shape" />
							</filter>
						</defs>
					</svg>

				</div>
			</div>
			<div className="flex items-center mb-4 text-white mt-10">
				<input
					type="checkbox"
					className="block appearance-none bg-gray-600 w-8 sm:w-7 md:w-5 h-5 border border-gray-400 rounded checked:bg-blue-500 checked:border-transparent checked:before:content-['✔'] checked:before:text-white checked:before:text-xs checked:before:flex checked:before:justify-center checked:before:items-center"
				/>			
				<p className="text-gray-400 text-sm letter-spacing-1px fs1rem">
					I read and agree to WLIQ <a href='#' className='checkbox-anchor'>token purchase agreement</a> and <a href='#' className='checkbox-anchor'>privacy policy.</a>
				</p>
			</div>

			<button className="px-4 py-2 btn-active rounded-md w-full mt-5">Connect Wallet</button>
		</div>
	);
};

export default BuyWLIQ;
