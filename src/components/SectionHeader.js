import './css/sectionheader.css';


function SectionHeader(props){
    return(
        <>

            <section  className='section-header'>
                <div className='container'>
                    <div className='section-header-content'>
                        <h3> {props.title}</h3>

                        <h2>  </h2>


                        <h1> {props.number} </h1>

                    </div>
                </div>
            </section>

        </>
    )
}

export default SectionHeader;