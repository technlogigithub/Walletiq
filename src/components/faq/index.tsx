import React, { useState } from 'react';
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/solid";
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
        setActiveIndex(null);
        } else {
        setActiveIndex(index);
        }
    };

    const faqs = [
        { question: '01. How can I buy with connect wallet?', answer: 'Wallit IQ is a platform that allows users to pay with cryptocurrency for everyday goods.' },
        { question: '02. How can I buy with a login?', answer: 'You can participate in the presale by clicking the "Participate In Presale" button and following the instructions.' },
        { question: '03. What security measure does your platform offer?', answer: 'Yes, Wallit IQ uses the latest encryption technology to ensure your transactions are safe and secure.' },
        { question: '04. What security measure does your platform offer?', answer: 'Yes, Wallit IQ uses the latest encryption technology to ensure your transactions are safe and secure.' },

    ];
    return(
        <div className="faq-section wallet-main-section font-urbanist" id="faq">
            <div className="text-white" data-aos="fade-up" data-aos-duration="1500">
                <h4 className="main-heading">Frequently Asked Question</h4>
            </div>
            <div className="text-white mt-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item border-b py-8" data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000">
                    <button
                        className="w-full text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h2 className="text-xl">{faq.question}</h2>
                        <span className="transform transition-transform duration-300">
                        {activeIndex === index ? (
                            <MinusIcon className="h-6 w-6" />
                        ) : (
                            <PlusIcon className="h-6 w-6" />
                        )}
                        </span>
                    </button>
                    {activeIndex === index && (
                        <div className="faq-answer mt-2 text-white">
                        {faq.answer}
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
