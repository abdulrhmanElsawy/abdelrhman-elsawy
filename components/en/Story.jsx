import SectionHeader from './SectionHeader';
import '@styles/story.css';

function Story() {
    return (
        <>
            <SectionHeader id="about" title="About Me" number="01" />
            <section className='en story'>
                <div className='container'>
                    <div className='story-content'>
                        <p>
                            I am a distinguished and enthusiastic web developer committed to achieving the goals of my clients. I offer exceptional and attractive solutions that leave a lasting impression. With diverse technical skills and a passion for developing user-friendly and beautifully designed websites, I strive to create outstanding online experiences for your business. I work with a team spirit and continuously seek innovation to ensure your website stands out from competitors and attracts customers. Contact me now to create a website that meets your clients' expectations and fosters the success of your business.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Story;
