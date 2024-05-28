import Carousel from '../carousel/Carousel';
import CallToAction from '../callToAction/CallToAction';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import ProductCategories from './Products/ProductCategories';
import image_1 from '../../assets/imgs/1-unsplash.jpg'
import image_2 from '../../assets/imgs/2-unsplash.jpg'
import image_3 from '../../assets/imgs/3-unsplash.jpg'

const Home = () => {

    const slides = [
        {
            src: image_1,
            alt: "image 1 for slider"
        },
        {
            src: image_2,
            alt: "image 2 for slider"
        },
        {
            src: image_3,
            alt: "image 3 for slider"
        },
    ]

    return (
        <>
            <Carousel data={slides}/>
            <section className="row flex justify">
                <ProductCategories />
            </section>
            <CallToAction buttonText='Sign In'>See personalized recommendations</CallToAction>
            <ScrollToTop />
        </>
    );
}

export default Home;