import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../../images/partner/1.png';
import logo2 from '../../images/partner/2.png';
import logo3 from '../../images/partner/3.png';
import logo4 from '../../images/partner/4.png';

const Partner = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    const logos = [
      { id: 1, src: logo1, alt: 'Partner 1' },
      { id: 2, src: logo2, alt: 'Partner 2' },
      { id: 3, src: logo3, alt: 'Partner 3' },
      { id: 4, src: logo4, alt: 'Partner 4' },
    ];

    return (
      <div className="partner-slider-section py-[150px] md:py-[100px]"
          data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="3000">
        <h4 className="partner-heading text-white text-center">Our Partner By Logo</h4>
        <Slider {...settings}>
          {logos.map((logo) => (
            <div key={logo.id} className="logo-container">
              <img src={logo.src} alt={logo.alt} width="100" height="100" className="partner-logo" />
            </div>
          ))}
        </Slider>
      </div>
    );
};
export default Partner;
