import './css/rates.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SectionHeader from './SectionHeader';


import User1 from './images/rates/1.png';
import User2 from './images/rates/2.png';
import User3 from './images/rates/3.png';
import User4 from './images/rates/4.png';
import User5 from './images/rates/5.png';
import User6 from './images/rates/6.png';
import User7 from './images/rates/7.png';
import User8 from './images/rates/8.png';
import User9 from './images/rates/9.png';
import User10 from './images/rates/10.png';
import User11 from './images/rates/11.png';
import User12 from './images/rates/12.png';
import User13 from './images/rates/13.png';
import User14 from './images/rates/14.png';
import User15 from './images/rates/15.png';
import User16 from './images/rates/16.png';
import User17 from './images/rates/17.png';
import User18 from './images/rates/18.png';
import User19 from './images/rates/19.png';
import User20 from './images/rates/20.png';
import User21 from './images/rates/21.png';
import User22 from './images/rates/22.png';
import User23 from './images/rates/23.png';
import User24 from './images/rates/24.png';
import User25 from './images/rates/25.png';
import User26 from './images/rates/26.png';
import User27 from './images/rates/27.png';
import User28 from './images/rates/28.png';
import User29 from './images/rates/29.png';
import User30 from './images/rates/30.png';
import User31 from './images/rates/31.png';
import User32 from './images/rates/32.png';
import User33 from './images/rates/33.png';
import User34 from './images/rates/34.png';
import User35 from './images/rates/35.png';
import User36 from './images/rates/36.png';
import User37 from './images/rates/37.png';
import User38 from './images/rates/38.png';
import User39 from './images/rates/39.png';
import User40 from './images/rates/40.png';
import User41 from './images/rates/41.png';

import { A11y, Pagination, Scrollbar,Navigation } from 'swiper';


function Rates(){
    return(
        
        <>

<SectionHeader title="التقيمات" number="04" />

            
            <section id="rates" className='rates'>
                <div className='container'>
                    <div className='rates-content'>
                        <div className='rates-slider'>

                        <div className='arrows'>

                            <i className="las la-angle-left review-swiper-button-next"></i>
                                <h2> 43 </h2>
                            <i className="las la-angle-right review-swiper-button-prev"></i>

                        </div>
                        

                        <Swiper modules={[Navigation]}  navigation={{
                        nextEl: '.review-swiper-button-next',
                        prevEl: '.review-swiper-button-prev',
                        }} spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >

                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User1} />
                                            <h3> فكر و. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> خدمة ممتازة و كفاءة عالية </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User2} />
                                            <h3> .Mariam S </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> الله يعطيك العافيه شغل رائع انصح الجميع بالتعامل معاه ربي يوفقه </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User3} />
                                            <h3> .Mohamed A  </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p>  جودة ممتازة  </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User4} />
                                            <h3> .Mohamed A </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> جودة ممتازة </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>



                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User5} />
                                            <h3> .Mustafa E </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> تاني وتالت ومليون احب اشكرك يا بشمهندس علي زوقك واخلاقك ما شاء الله عليك وده فعلا مش اخر تعامل❤❤❤❤ </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User6} />
                                            <h3>	.Alshahrany M  </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> الله يعطيك العافية عمل ممتاز و شكرا لك</p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User7} />
                                            <h3> ابو ي. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شكراً لكِ و انصح بالتعامل مع الاستاذ عبد الرحمن سريع ومتعاون شكرا لك تمنياتي لك بالتوفيق الدائم</p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User8} />
                                            <h3> .Ezz A </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> السرعة والانجاز والجودة والروعة تجدها عند عبدالرحمن ربي يبارك فيك </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User9} />
                                            <h3> .Ahmed A </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> ممتاز </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User10} />
                                            <h3> .Lamya A </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شغل سريع و عطانا افكار زياده للمشروع وخلصها بشكل جميل جدا وشرح لنا كل شي بالتفصيل </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User11} />
                                            <h3> .Mohammad J </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شكرا للمجهود و الجودة و سرعة التسليم </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User12} />
                                            <h3> 	اسعد ب </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شكرا لك تمت الخدمة </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>



                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User13} />
                                            <h3> اسعد ب. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> ممتاز جدا</p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User14} />
                                            <h3> .Algabry G </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شكرا لك مهندس عبد الرحمن وباذن الله تعامل بينا مستمر اسال الله أن يوفقك في جميع حياتك </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>



                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User15} />
                                            <h3> .Nasser M </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> ممتاز جدًا، فاهم شغله ومرتب له خبرة في اكثر من مجال، وسريع وفاهم واذا عندي اي طلب جديد، بيكون أول خيار لي </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User16} />
                                            <h3> .Tefa G </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> متمكن.. انصح بالتعامل معه </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>



                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User17} />
                                            <h3> .Mohammed F </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> السلام عليكم ورحمة الله ، بصراحة وبكل امانة وصدق الراجل ده شغله فوق الخيال وممتاز جدا جدا ، وسعره ممتاز كمان ، ووقت التسليم دقيق ايضا ، وانصحكم بالتعامل معاه والله </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User18} />
                                            <h3> سهام ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> جدا مبدع و يهتم بالتفاصيل و حريص على تسليم الشغل في الوقت المتفق علية ...شكرا لك </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>



                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User19} />
                                            <h3> محمد ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> تم إنجاز المشروع بحترافيه عاليةمع كل التقدير والشكر. </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User20} />
                                            <h3> فهد ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> ممتاز وسريع جدا </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User21} />
                                            <h3> .Eyas B </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> افضل وارقى شخص بالتعامل ومتعاون جدآ جدآ ، يرجى اختيار عبد الرحمن لاستكمال اعمالكم القادمة مع الاطمئنان الكامل . لنا اعمال قادمة كثيرة ان شاءلله </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User22} />
                                            <h3> السيد ا </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> خدمة ممتاز والتسليم بالوقت المحدد </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User23} />
                                            <h3> عباس ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> on time and responsive and did a good work</p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User24} />
                                            <h3> .Ahmed A </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> صبور ومتعاون </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User25} />
                                            <h3> .Brahim E </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شخص رائع ومحترم قام بتنفيذ المشروع كما هو مطلوب كاملًا وبكل احترافية واتقان </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User26} />
                                            <h3> 	عبدالله ح. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> عبدالرحمن ماقصرت رجل عملي </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User27} />
                                            <h3> .Mader P </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شهادة تذكر لأن الناس شهداء الله في ارضه ، شهادتنا بالمهندس عبدالرحمن مجروحة وليست قدره شخص لن تقابل مثله الكثير في حياتك وستتمنى انك عرفته منذ زمن لأنه هو ما تبحث عنه يتوفر فيه كل الصفات الطيبة ولا يهتم للمادة مطلقاً كلمة الاحتراف والذوق والادب والاخلاق والقيم والمبادئ قليلة في حقه أسال الله ان يسعده وييسر امره ويفتح له ابواب السماوات والارض رجل كريم ويقدم الخدمة وكأنه هو صاحب العمل ولا يألوا جهداً في عمل كل ما تريد ليس هناك حد للإبداع والقدرات والتفهم ومهما تحدثنا عن المهندس عبدالرحمن فهذا قليل في حقه لم يقدم ما نريد بل قدم أضعافه الف شكر وفعلاًَ غربية الناس الي معلقة تحت علماً اني عميل vip</p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User28} />
                                            <h3> سطام ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> خدمه رائعه شكرا لك </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User29} />
                                            <h3> .Yazan A </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شخص محترم سعدت بالتعامل معك, شكراً. </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User30} />
                                            <h3> عادل أ. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> تم إنجاز العمل المطلوب بدقة وسرعة كالمعتاد. سعداء بالتعامل معه </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User31} />
                                            <h3> 	انجاز ا </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p>متعاون وقمة في الاخلاق  </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User32} />
                                            <h3>  بشار ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> خدمة اكثر من ممتازة </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>

                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User33} />
                                            <h3> فهد ا </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> ممتاز </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User34} />
                                            <h3>  بشار ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> خدمة مميزة انصح بها </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User35} />
                                            <h3>  بسام ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شكرا مهندس </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User36} />
                                            <h3> .Salah Y </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> خدمه سريعه وممتازه </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>


                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User37} />
                                            <h3>  محمد ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> عمل جدا جميل وراقي اشكرك اخي عبدالرحمن على تعاملك الجميل والراقي </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User38} />
                                            <h3>  .Osamah A </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> ما شاء الله - الاخ عبدالرحمن قمة في الرقي بالتعامل - وسرعه بالانجاز الله يجزيك الخير - واوعدك بأعمال اخرى بإذن الله </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>

                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User39} />
                                            <h3>  ابو ن. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> اشكرك حبيبي </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User40} />
                                            <h3> .Mohamad J </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> ما شاء الله عليه شب محترم جدا وخلوق وبطل بشغلة وسريع جدا جدا ومتجاوب انصح بيه الجميع والله</p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>

                            
                            <SwiperSlide> 
                                <div className='rate-content'>
                                        <div className='rate'>
                                            <img src={User37} />
                                            <h3> .Rooh N </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> شخص مبدع واخلاقه عاليه فخور به وتشرفت بمعرفته باذن الله مايكون التعامل الاخير </p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>

                                        <div className='rate'>
                                            <img src={User41} />
                                            <h3> بلال ا. </h3>
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li><li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <p> سريع التعامل قدرة على فهم العميل قدرة على التفكير و التخطيط يجيد العمل بكل وقت شكرا لك اخي الكريم</p>
                                            <a target='_blank' href="https://khamsat.com/programming/custom-website-development/2264247-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D9%88%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%AD%D8%AA%D9%89-%D8%B8%D9%87%D9%88%D8%B1%D9%87-%D9%81%D9%8A-%D8%A8%D8%AD%D8%AB-%D8%AC%D9%88%D8%AC%D9%84"> مشاهدة التقييم </a>
                                        </div>
                                    </div>
                            </SwiperSlide>



                
                        
                        </Swiper>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rates;