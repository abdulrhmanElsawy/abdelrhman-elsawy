import './css/latestwork.css';

import work1 from './images/work/abdelrhmanelsawy_0.webp';
import work2 from './images/work/eaamar_1.webp';
import work3 from './images/work/freshenergy_2.webp';
import work4 from './images/work/iridium_3.webp';
import work5 from './images/work/lamar_4.webp';
import work6 from './images/work/magicfixer_5.webp';
import work7 from './images/work/nord_6.webp';
import work8 from './images/work/speedunion_7.webp';
import work9 from './images/work/zaman_0.webp';
import work10 from './images/work/magicdxb_1.webp';








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
                                <a rel="noreferrer" aria-label='Zaman Apartments' target='_blank' href="zamanapartments.com">

                                    <img loading="lazy" src={work9} alt='webdeveloperProject' />
                                    </a>

                                </div>
                            </div>


                            
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='MagixDxb' target='_blank' href="https://www.magicdxb.com/">

                                    <img loading="lazy" src={work10} alt='webdeveloperProject' />
                                    </a>

                                </div>
                            </div>



                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                    <a rel="noreferrer" aria-label='abdelrhman elsawy' target='_blank' href="https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/">
                                        <img loading="lazy" src={work1} alt='WebDevelopment' />
                                    </a>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='Eaamar El wasat' target='_blank' href="https://ewi.iq">

                                    <img loading="lazy" src={work2} alt='Webdesign' />

                                    </a>
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='EgyptFreshEnergy' target='_blank' href="https://egyptfreshenergy.com">

                                    <img loading="lazy" src={work3} alt='react' />
                                    </a>

                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='Iridium' target='_blank' href="https://iridium-uae.com/">

                                    <img loading="lazy" src={work4} alt='javascript' />

                                    </a>

                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='Lamar' target='_blank' href="https://lamar-salon.com/">

                                    <img loading="lazy" src={work5} alt='FullStackwebdevelopment' />
                                    </a>

                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='Magic Fixer' target='_blank' href="https://www.magicfixer.net/">

                                    <img loading="lazy" src={work6} alt='website' />

                                    </a>

                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='Nord renovering' target='_blank' href="https://nordrenovering.no/">

                                    <img loading="lazy" src={work7} alt='webdeveloperProject' />
                                    </a>

                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='work'>
                                <a rel="noreferrer" aria-label='Speed Union' target='_blank' href="https://speedunion-su.com/">

                                    <img loading="lazy" src={work8} alt='webdeveloperProject' />
                                    </a>

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