import Carousel from '../components/carousel/Carousel';
import CallToAction from '../components/callToAction/CallToAction';
import ScrollToTop from '../components/scrollToTop/ScrollToTop';
import ProductCategories from './Products/ProductCategories';
import image_1 from '../assets/imgs/1-unsplash.jpg'
import image_2 from '../assets/imgs/2-unsplash.jpg'
import image_3 from '../assets/imgs/3-unsplash.jpg'
import Modal from '../components/modal/index';
import Login from './Login'

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
            <Carousel data={slides} />
            <section className="row flex justify">
                <ProductCategories />
            </section>
            <Modal onOpen={() => console.log('clicked')}>
                <Modal.Button>
                    {(func) => <CallToAction buttonText='Sign In' onClick={func}>See personalized recommendations</CallToAction>}
                </Modal.Button>
                <Modal.Content>
                    <Login />
                </Modal.Content>
            </Modal>
            <ScrollToTop />
        </>
    );
}

export default Home;