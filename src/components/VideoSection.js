import { useState, useRef } from 'react';
import SectionHeader from './SectionHeader';
import './css/videosection.css';

import introvid from "./videos/introVid.mp4"

function VideoSection() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleButtonClick = () => {
        const video = videoRef.current;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <SectionHeader title="فيديو" number="02" />
            <section id="video" className='video-section'>
                <div className='container'>
                    <div className='video-content'>
                        <video loading="lazy" ref={videoRef} muted src={introvid}></video>
                        <button onClick={handleButtonClick}>
                            <i className={`lab la-${isPlaying ? 'stop' : 'google-play'}`}></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoSection;
