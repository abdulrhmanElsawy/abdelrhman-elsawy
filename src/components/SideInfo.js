import './css/sideinfo.css';
import me from './images/me.png';


function SideInfo(){
    return(
        <>
            <section id="home" className='sideinfo'>
                <div className='sideinfo-content'>
                    <img src={me}/>
                    <span className='online'></span>
                    <h1> عبدالرحمن الصاوي </h1>
                    <h2>Full Stack Web Developer</h2>

                    <h6></h6>

                    <ul>
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100006455849752'>
                                <i className="lab la-facebook-f"></i>
                            </a>
                        </li>

                        <li>
                            <a href='https://www.instagram.com/abdelrhmanelsawy/?fbclid=IwAR177dqTYrFm4swUpO1mYsJcw1H1n5MXkXaNR5cjsQ2jMv8CyMP2uGUeDhM'>
                                <i className="lab la-instagram"></i>
                            </a>
                        </li>


                        <li>
                            <a href='https://www.linkedin.com/in/abdelrhman-elsawy-365632204/'>
                                <i className="lab la-linkedin-in"></i>
                            </a>
                        </li>

                        <li>
                            <a href='https://github.com/abdulrhmanElsawy'>
                                <i className="lab la-github"></i>
                            </a>
                        </li>

                        
                        <li>
                            <a href='https://wa.me/+2001006329357'>
                                <i className="lab la-whatsapp"></i>
                            </a>
                        </li>


                        
                        <li>
                            <a href='tel:+2001006329357'>
                                <i className="las la-phone"></i>
                            </a>
                        </li>

                        <li>
                            <a href='mailto:abdulrhmanm.elsawy@gmail.com'>
                                <i className="lar la-envelope"></i>
                            </a>
                        </li>


                    </ul>


                    <h6></h6>


                <h5>
                    الدولة
                    <span>
                    مصر
                    </span>
                </h5>


                <h5>
                    المدينة
                    <span>
                    القاهرة
                    </span>
                </h5>


                <h6></h6>


                <a href='https://wa.me/+2001006329357'>
                    راسلني الان  <i className="lab la-whatsapp"></i>
                </a>


                </div>
            </section>
        </>
    )
}

export default SideInfo;