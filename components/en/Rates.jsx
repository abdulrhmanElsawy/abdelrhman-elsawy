'use client'
import '@styles/rates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionHeader from './SectionHeader';
import Image from 'next/image';

const reviews = [
    { src: '../images/rates/1.png', name: 'Fikr W.', review: 'Excellent service and high efficiency', rating: 5, link: '#' },
    { src: '../images/rates/2.png', name: 'Mariam S.', review: 'May God bless you, great work, I recommend everyone to deal with him, may God grant him success', rating: 5, link: '#' },
    { src: '../images/rates/3.png', name: 'Mohamed A.', review: 'Excellent quality', rating: 5, link: '#' },
    { src: '../images/rates/4.png', name: 'Mohamed A.', review: 'Excellent quality', rating: 5, link: '#' },
    { src: '../images/rates/5.png', name: 'Mustafa E.', review: 'Second, third, and million times, I would like to thank you, engineer, for your taste and manners. God bless you, and this is not the last time we work together ❤❤❤❤', rating: 5, link: '#' },
    { src: '../images/rates/6.png', name: 'Alshahrany M.', review: 'May God bless you, excellent work, thank you', rating: 5, link: '#' },
    { src: '../images/rates/7.png', name: 'Abu Y.', review: 'Thank you, and I recommend dealing with Mr. Abdulrahman. He is quick and cooperative. Thank you, and I wish you continued success', rating: 5, link: '#' },
    { src: '../images/rates/8.png', name: 'Ezz A.', review: 'Speed, achievement, quality, and excellence can be found with Abdulrahman. May God bless you', rating: 5, link: '#' },
    { src: '../images/rates/9.png', name: 'Ahmed A.', review: 'Excellent', rating: 5, link: '#' },
    { src: '../images/rates/10.png', name: 'Lamya A.', review: 'Quick work, gave us additional ideas for the project, completed it very beautifully, and explained everything in detail', rating: 5, link: '#' },
    { src: '../images/rates/11.png', name: 'Mohammad J.', review: 'Thank you for the effort, quality, and quick delivery', rating: 5, link: '#' },
    { src: '../images/rates/12.png', name: 'Asaad B.', review: 'Thank you, the service is completed', rating: 5, link: '#' },
    { src: '../images/rates/13.png', name: 'Asaad B.', review: 'Very excellent', rating: 5, link: '#' },
    { src: '../images/rates/14.png', name: 'Algabry G.', review: 'Thank you, engineer Abdulrahman, and may our cooperation continue. May God grant you success in all your life', rating: 5, link: '#' },
    { src: '../images/rates/15.png', name: 'Nasser M.', review: 'Very excellent, knowledgeable, and well-organized, with experience in multiple fields, quick and understanding. If I have any new request, he will be my first choice', rating: 5, link: '#' },
    { src: '../images/rates/16.png', name: 'Tefa G.', review: 'Skilled.. I recommend dealing with him', rating: 5, link: '#' },
    { src: '../images/rates/17.png', name: 'Mohammed F.', review: 'Peace be upon you. Honestly, this man’s work is beyond imagination, very excellent, and his price is excellent too. Delivery time is also accurate. I highly recommend dealing with him', rating: 5, link: '#' },
    { src: '../images/rates/18.png', name: 'Siham A.', review: 'Very creative, attentive to details, and keen on delivering work on the agreed time... Thank you', rating: 5, link: '#' },
    { src: '../images/rates/19.png', name: 'Mohammad A.', review: 'The project was completed with high professionalism, with all appreciation and thanks', rating: 5, link: '#' },
    { src: '../images/rates/20.png', name: 'Fahad A.', review: 'Excellent and very fast', rating: 5, link: '#' },
    { src: '../images/rates/21.png', name: 'Eyas B.', review: 'The best and most courteous person to deal with, very cooperative. Please choose Abdulrahman for your upcoming projects with complete peace of mind. We have many future projects together, God willing', rating: 5, link: '#' },
    { src: '../images/rates/22.png', name: 'Al-Sayed A.', review: 'Excellent service and timely delivery', rating: 5, link: '#' },
    { src: '../images/rates/23.png', name: 'Abbas A.', review: 'On time, responsive, and did a good job', rating: 5, link: '#' },
    { src: '../images/rates/24.png', name: 'Ahmed A.', review: 'Patient and cooperative', rating: 5, link: '#' },
    { src: '../images/rates/25.png', name: 'Brahim E.', review: 'A wonderful and respectful person who implemented the project exactly as required, with complete professionalism and precision', rating: 5, link: '#' },
    { src: '../images/rates/26.png', name: 'Abdullah H.', review: 'Abdulrahman, you didn’t fall short, a practical man', rating: 5, link: '#' },
    { src: '../images/rates/27.png', name: 'Mader P.', review: 'A testimony worth mentioning because people are witnesses of God on earth. Our testimony of Engineer Abdulrahman is not enough; he is someone you won’t meet often in your life, and you will wish you had known him earlier. He possesses all good qualities and does not care about money. The words professionalism, taste, manners, ethics, and values are too little for him. I ask God to make him happy, ease his matters, and open the gates of heaven and earth for him. He is generous and provides service as if he owns the business, going above and beyond to meet your expectations. Thank you a thousand times over, and the admiration of people under this testimony is not enough, even though I am a VIP client', rating: 5, link: '#' },
    { src: '../images/rates/28.png', name: 'Sattam A.', review: 'Great service, thank you', rating: 5, link: '#' },
    { src: '../images/rates/29.png', name: 'Yazan A.', review: 'A respectful person, I enjoyed dealing with you, thank you.', rating: 5, link: '#' },
    { src: '../images/rates/30.png', name: 'Adel A.', review: 'The work was completed with accuracy and speed as usual. We are happy to work with him', rating: 5, link: '#' }
];

function Rates() {
    return (
        <>
            <SectionHeader title="Reviews" number="04" />
            <section id="rates" className="en rates">
                <div className="container">
                    <div className="rates-content">
                        <div className="rates-slider">
                            <div className="arrows">
                                <i className="las la-angle-left review-swiper-button-next"></i>
                                <h2> 53 </h2>
                                <i className="las la-angle-right review-swiper-button-prev"></i>
                            </div>

                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.review-swiper-button-prev',
                                    prevEl: '.review-swiper-button-next',
                                }}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {reviews.map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rate-content">
                                            <div className="rate">
                                                <Image width={80} height={80} alt="customerRate" src={review.src} />
                                                <h3> {review.name} </h3>
                                                <ul>
                                                    {Array.from({ length: review.rating }).map((_, i) => (
                                                        <li key={i}><i className="fa-solid fa-star"></i></li>
                                                    ))}
                                                </ul>
                                                <p> {review.review} </p>
                                                <a rel="noreferrer" aria-label="rate Link" target="_blank" href={review.link}> View Review </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Rates;
