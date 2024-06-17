import { Suspense, lazy } from 'react';

import Carousel from '../components/carousel/Carousel';
import CallToAction from '../components/callToAction/CallToAction';
import ScrollToTop from '../components/scrollToTop/ScrollToTop';
import ProductCategories from './Products/ProductCategories';
import image_1 from '../assets/imgs/1-unsplash.jpg'
import image_1_sm from '../assets/imgs/1-unsplash-sm.jpg'
import image_1_md from '../assets/imgs/1-unsplash-md.jpg'
import image_1_lg from '../assets/imgs/1-unsplash-lg.jpg'
import image_1_xl from '../assets/imgs/1-unsplash-xl.jpg'
import image_1_xxl from '../assets/imgs/1-unsplash-xxl.jpg'
import image_2 from '../assets/imgs/2-unsplash.jpg'
import image_2_sm from '../assets/imgs/2-unsplash-sm.jpg'
import image_2_md from '../assets/imgs/2-unsplash-md.jpg'
import image_2_lg from '../assets/imgs/2-unsplash-lg.jpg'
import image_2_xl from '../assets/imgs/2-unsplash-xl.jpg'
import image_2_xxl from '../assets/imgs/2-unsplash-xxl.jpg'
import image_3 from '../assets/imgs/3-unsplash.jpg'
import image_3_sm from '../assets/imgs/3-unsplash-sm.jpg'
import image_3_md from '../assets/imgs/3-unsplash-md.jpg'
import image_3_lg from '../assets/imgs/3-unsplash-lg.jpg'
import image_3_xl from '../assets/imgs/3-unsplash-xl.jpg'
import image_3_xxl from '../assets/imgs/3-unsplash-xxl.jpg'
import Modal from '../components/modal/index';
// import Login from './Login'

const Login = lazy(() => {
    return import('./Login')
})

const Home = () => {

    const slides = [
        {
            src: image_1,
            src_sm: image_1_sm,
            src_md: image_1_md,
            src_lg: image_1_lg,
            src_xl: image_1_xl,
            src_xxl: image_1_xxl,
            alt: "image 1 for slider"
        },
        {
            src: image_2,
            src_sm: image_2_sm,
            src_md: image_2_md,
            src_lg: image_2_lg,
            src_xl: image_2_xl,
            src_xxl: image_2_xxl,
            alt: "image 2 for slider"
        },
        {
            src: image_3,
            src_sm: image_3_sm,
            src_md: image_3_md,
            src_lg: image_3_lg,
            src_xl: image_3_xl,
            src_xxl: image_3_xxl,
            alt: "image 3 for slider"
        },
    ]

    return (
        <>
            <Carousel data={slides} />
            <section className="row flex justify">
                <ProductCategories />
            </section>
            <Modal>
                <Modal.Button>
                    {(func) => <CallToAction buttonText='Sign In' onClick={func}>See personalized recommendations</CallToAction>}
                </Modal.Button>
                <Modal.Content>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Login />
                    </Suspense>
                </Modal.Content>
            </Modal>
            <ScrollToTop />
        </>
    );
}

export default Home;