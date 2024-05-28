import React from 'react'
import ProductCategories from './Products/ProductCategories';
import CallToAction from '../callToAction/CallToAction';

const Categories = () => {

    return (
        <div className='categories-page'>
            <section>
                <ProductCategories />
            </section>
            <section>
                <CallToAction buttonText={'Subscribe'}>Subscribe Our NewsLetter to have our new collection first</CallToAction>
            </section>
        </div>
    )
}

export default Categories