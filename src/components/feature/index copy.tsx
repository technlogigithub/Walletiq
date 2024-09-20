import { useState } from 'react';
import useMediaQuery from "../../hooks/useMediaQuery";

const Feature = () => {
    const isMobileScreen = useMediaQuery("(max-width: 991px)");
    const [isHovered, setIsHovered] = useState<number | null>(null);

    const data = [
        { heading: 'AI Based Fraud Detection', description: "Ai-nstien actively monitors wallet's transactions, quickly identifying and mitigating suspicious activities to protect crypto assets. With adaptive learning, Ai-nstien continuously evolves to stay ahead of emerging threats, providing real-time security tailored to user’s unique usage patterns." },
        { heading: 'AI Powered Enhanced Security', description: 'Ai-nstien offers advanced biometric authentication, utilizing facial recognition and motion detection to ensure secure access. Its liveness detection adds an extra layer of protection by verifying the authenticity of users in real-time.' },
        { heading: 'AI-Driven Smart Contract Analysis', description: 'Ai-nstien scrutinizes contract code in real-time before sending or receiving cryptocurrencies, identifying potential vulnerabilities like exploits, scams, or unexpected fee structures to protect the digital assets from malicious contracts.' },
        { heading: 'Automated Transaction Categorization', description: 'Ai-nstien simplifies crypto spending tracking by automatically sorting transactions into predefined categories like trading fees, staking rewards, or purchases and providing insights into spending habits.' },
        { heading: 'Predictive Analytics Modelling', description: 'Ai-nstien employs sophisticated algorithms to analyze historical crypto market data, identifying patterns and trends to forecast potential price fluctuations and market movements. These insights empower to make data-driven decisions and mitigate risks.' },
        { heading: 'Personalized Advanced AI Chatbot 24x7', description: 'AI chatbots offer real-time assistance with crypto transactions, providing guidance on fees, exchange rates, and potential risks. This simplifies the trading process, answers queries, and offers personalized recommendations based on market trends.' },
        { heading: 'AI Driven Custom Alerts', description: 'Ai-nstien analizes real-time and predictive market data on price fluctuations, trading volume spikes, breaking crypto news, market trends, and technical indicators and sends alerts directly through email or SMS.' },
    ];

    return (
        <div className="relative pt-40 feature-section" id="features">
            {data.map((item, index) => (
            <div
                key={index}
                className={`feature-accordion-container ${index === data.length - 1 ? 'feature-last-accordion' : ''}`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
            >
                <div className="feature-accordion-header text-white">
                {isMobileScreen ? (
                    <h3>{item.heading}</h3>
                ) : (
                    <h3 className="marquee-heading">{item.heading}</h3>
                )}
                </div>
                <div className={`feature-accordion-content ${isHovered === index ? 'expanded' : ''} text-white`}>
                <p>{item.description}</p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Feature;
