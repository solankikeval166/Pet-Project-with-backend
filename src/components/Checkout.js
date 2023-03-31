import React from 'react'
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
// import CurrenyFormat from 'react-currency-format'

function Checkout() {
    // eslint-disable-next-line
    const [{ basket }] = useStateValue();

    return (
        <div>
            <Header />
            <div className='checkout'>
                <div className='checkout__left'>
                    <img src="https://static.vecteezy.com/system/resources/previews/013/977/663/non_2x/summer-time-special-offer-long-horizontal-banner-with-tropical-leaves-and-flat-elements-template-for-sales-promo-ads-bright-floral-illustration-with-text-blocks-vector.jpg" alt="" className="checkout__ad" />
                    {basket.length === 0 ? (
                        <div>
                            <h2>Your shopping basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy one or more items, click "Add to basket"
                                next to the item
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout__title'>Your shopping Basket</h2>

                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {basket.length > 0 && (
                    <div className='checkout__right'>
                        <Subtotal />
                    </div>
                )}
            </div>

        </div>
    )
}

export default Checkout