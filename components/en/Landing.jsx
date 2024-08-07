import '@styles/landing.css';

function Landing(){
    return(
        <>
        <section className='landing'>
            <div className='container'>
                <div className='landing-content'>
                    <div className='text'>
                        <div className='right'>
                            <h2> Welcome, </h2>

                            <h1> Programming and designing your website from scratch until it appears in Google search </h1>

                            <a aria-label="Phone number" href="https://wa.me/+2001006329357"> Contact us now </a>
                        </div>

                        <div className='left'>
                            <i className="las la-mouse-pointer"></i>
                            <h3> Scroll down </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Landing;
