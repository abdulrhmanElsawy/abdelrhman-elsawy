import '@styles/services.css';
import SectionHeader from './SectionHeader';

function Services() {
    return (
        <>
            <SectionHeader title="Services" number="03" />

            <section id="services" className='en services'>
                <div className='container'>
                    <div className='services-content'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service'>
                                    <i className="las la-desktop"></i>
                                    <h1> Design and Build a Website for Your Company </h1>
                                    <p> 
                                        Creating a website for your company is a strategic investment in the future of your business. It provides an opportunity to enhance your digital presence and maintain a high-level online presence. With a professional and distinctive website, you can showcase your products and services attractively and make them available to a wider audience.
                                    </p>

                                    <a rel="noreferrer" aria-label="Whatsapp link" href='https://wa.me/+2001006329357' target='_blank'> Order Now <i className="las la-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service'>
                                    <i className="las la-wallet"></i>
                                    <h1> Design and Build an E-commerce Website </h1>
                                    <p> 
                                        Creating an e-commerce website for your company is the next step to achieving success in the digital age. An e-commerce website allows you to reach new customers and expand your current customer base.
                                    </p>

                                    <a rel="noreferrer" aria-label="Whatsapp link" href='https://wa.me/+2001006329357' target='_blank'> Order Now <i className="las la-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service'>
                                    <i className="las la-keyboard"></i>
                                    <h1> Website Modifications </h1>
                                    <p> 
                                        I can modify your website and improve its appearance in Google search results by providing better SEO based on my experience with Google search.
                                    </p>

                                    <a rel="noreferrer" aria-label="Whatsapp link" href='https://wa.me/+2001006329357' target='_blank'> Order Now <i className="las la-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service'>
                                    <i className="las la-pen-fancy"></i>
                                    <h1> Convert Any Design You Have into a Website </h1>
                                    <p> 
                                        Enjoy transforming your unique design into an outstanding website that attracts attention and achieves your goals. I will provide a creative website design service that perfectly reflects your business identity and ensures an exceptional user experience. Attract and retain new customers with a unique and responsive design that adapts to all devices.
                                    </p>

                                    <a rel="noreferrer" aria-label="Whatsapp link" href='https://wa.me/+2001006329357' target='_blank'> Order Now <i className="las la-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='special service'>
                                    <i className="las la-cart-plus"></i>
                                    <h1> Additional Services </h1>
                                    <p> 
                                        With me, you get fast technical support for your website for life. This support service is free and available daily throughout the year.
                                    </p>

                                    <a rel="noreferrer" aria-label="Whatsapp link" href='https://wa.me/+2001006329357' target='_blank'> Order Now <i className="las la-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
