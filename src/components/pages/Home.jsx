import Carousel from '../carousel/Carousel';
import CallToAction from '../callToAction/CallToAction';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import Products from './Products/Products';
// import Menu from '../menu/Menu';

const Home = () => {

    const slides = [
        {
            src: "https://picsum.photos/seed/img1/1250/500",
            alt: "image 1 for slider"
        },
        {
            src: "https://picsum.photos/seed/img2/1250/500",
            alt: "image 2 for slider"
        },
        {
            src: "https://picsum.photos/seed/img3/1250/500",
            alt: "image 3 for slider"
        },
    ]

    return (
        <>
            <Carousel data={slides}/>
            <section className="row">
                <Products />
            </section>
            <CallToAction buttonText='Sign In'>See personalized recommendations</CallToAction>
            <ScrollToTop />
        </>
    );
}

export default Home;