
import homeCarouselFirst from '../../assets/home-carousel-2.2.jpg'
import homeCarouselThird  from '../../assets/home-carousel-2.3.jpg'
import homeCarouselFourth from '../../assets/home-carousel-2.4.jpg'
import './home.css'
const homeCarousel = () => {

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={homeCarouselFirst} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>RUN TRAILS</h5>
                                <p>Tackle rugged terrain with confidence in protective and grippy Terrex trail running shoes</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={homeCarouselThird} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5>RUN TRAILS</h5>
                                <p>Tackle rugged terrain with confidence in protective and grippy Terrex trail running shoes</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={homeCarouselFourth} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5>RUN TRAILS</h5>
                                <p>Tackle rugged terrain with confidence in protective and grippy Terrex trail running shoes</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default homeCarousel