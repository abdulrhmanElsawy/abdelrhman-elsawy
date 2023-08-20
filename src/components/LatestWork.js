import './css/latestwork.css';

import work1 from './images/work/1_0.webp';
import work2 from './images/work/2_1.webp';
import work3 from './images/work/3_2.webp';
import work4 from './images/work/4_3.webp';
import work5 from './images/work/5_4.webp';
import work6 from './images/work/6_5.webp';

import work7 from './images/work/7_6.webp';
import work8 from './images/work/8_7.webp';
import work9 from './images/work/9_8.webp';
import work10 from './images/work/10_9.webp';
import work11 from './images/work/11_10.webp';
import iconmouse from './images/icons/mouse.gif';



import SectionHeader from './SectionHeader';




function LatestWork(){




    return(
        <>
            <SectionHeader title="اخر الاعمال" number="05" />

            <section id="projects" className='latestwork'>
                <div className='container'>
                    <div className='latestwork-content'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                    <div className='overlay'>
                                        <img loading="lazy" src={iconmouse} />
                                    </div>
                                    <img loading="lazy" src={work1} alt='workImg' />
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work2} alt='workImg' />
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work3} alt='workImg' />
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work4} alt='workImg' />
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work5} alt='workImg' />
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work6} alt='workImg' />
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work7} alt='workImg' />
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work8} alt='workImg' />
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work9} alt='workImg' />
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work10} alt='workImg' />
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                   
                                    <img loading="lazy" src={work11} alt='workImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestWork;