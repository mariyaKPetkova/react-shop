import homeFirstImage from '../../assets/home1.jpg'
import HomeCarousel from './home-carousel'
import './home.css'
const Home = () => {

    return (
        <>
        <img className="home-first-image" src={homeFirstImage} alt='' />
        <HomeCarousel />
            
        </>
    )
}
export default Home