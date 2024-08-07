import '@styles/numbers.css';

function Numbers(){
    return(
        <>
            <section id="numbers" className='en numbers-container'>
                <div className='container'>
                    <div className='numbers-content'>

                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                <div className='number'>
                                    <h1>
                                        112
                                        <span> <i className="las la-plus"></i> </span>
                                    </h1>
                                    <h2> 
                                        Completed Projects
                                    </h2>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                <div className='number'>
                                    <h1>
                                        72
                                        <span> <i className="las la-plus"></i> </span>
                                    </h1>
                                    <h2> 
                                        Regular Clients
                                    </h2>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                <div className='number'>
                                    <h1>
                                        4
                                        <span> <i className="las la-plus"></i></span>
                                    </h1>
                                    <h2> 
                                        Years of Experience
                                    </h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Numbers;
