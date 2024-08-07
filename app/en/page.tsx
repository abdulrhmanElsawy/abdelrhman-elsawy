import Landing from '@components/en/Landing';
import SideInfo from '@components/en/SideInfo';
import Numbers from '@components/en/Numbers';
import Story from '@components/en/Story';
import VideoSection from '@components/en/VideoSection';
import Services from '@components/en/Services';
import Rates from '@components/en/Rates';
import LatestWork from '@components/en/LatestWork';
import Copyright from '@components/en/Copyright';
import Navbar from '@components/en/Navbar';




import  "bootstrap/dist/css/bootstrap.min.css"


const Home = () => {
    return (
        <>
                <Navbar />

            <Landing />
            <SideInfo />
            <Numbers />
            <Story />
            <VideoSection />
            <Services />
            <Rates />
            <LatestWork />
            <Copyright />


        </>
    )
}

export default Home
