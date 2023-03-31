import React ,{useState,useEffect}from 'react'
import Header from './Header'
import Product from './Product'
import Dropdowns from './Dropdowns'
import "./Home.css"
import Footer from './Footer'
import Carousel from './Carousel'
import axios from 'axios'


function Home() {
    const [products,setProducts] = useState([]) 
    useEffect (()=>
    {
        async function getProduct(){
            try {
                const products = await axios.get("http://127.0.0.1:8000/api/products/")
                console.log(products.data)
                setProducts(products.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    },[])
    
    return (
        <div>
            <Header />
            <Dropdowns />
            <Carousel />
            <div className="home1">
                
                <div className='popular_products'>Popular Products
                    <div><hr /></div>
                </div>
                <div className="home__row">
                {
                    products.map((product ,i)=>{
                        return (
                            <>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            />
                            </>
                        )
                        }
                        )

                }
                    {/* <Product
                        id="2"
                        title="Purepet Chicken & Vegetable Adult Dry Dog Food, 20kg"
                        price={1954.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/717WiuxL2XL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="3"
                        title="Drools Optimum Performance Adult Dry Dog Food, Chicken Flavor, 10kg"
                        price={1274.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71PKpcLG-3L._AC_UL600_FMwebp_QL65_.jpg"
                    /> */}
                </div>
          
          <div className="home__row">
                    {/* <Product
                        id="4"
                        title="Mellifluous Premium Soft Velvet Cats Kittens Pet Hut House (L x W x H) 60 x 60 x 60 cm (large, Grey-Black)"
                        price={1249.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81f8pTv-yqL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="5"
                        title="Drools Absolute Calcium Bone Jar, Dog Treats For All Life Stages - 20 Pieces (300 g)"
                        price={234.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/618MTeeCweL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="6"
                        title="The Dogs Company Flyer Rubber Dog Toy, Dog Frisbee, 9 Inches, Assorted"
                        price={295.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/416urfblkkL._AC_UL600_FMwebp_QL65_.jpg"
                    /> */}
                    {
                    products.map((product ,i)=>{
                        return (
                            <>
                            <Product
                                id={i}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            />
                            </>
                        )
                        }
                        )

                }
                </div>
            </div>

            <div className="home2">
                <div className='popular_products'>Popular Brands
                    <div><hr /></div>
                </div>
                <div className="home__row">
                    {/* <Product
                        id="1"
                        title="Pedigree Adult Dry Dog Food (High Protein Variant), Chicken, Egg & Rice Flavour, 10kg Pack"
                        price={2128.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61HRuBS5BkL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="2"
                        title="Purepet Chicken & Vegetable Adult Dry Dog Food, 20kg"
                        price={1954.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/717WiuxL2XL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="3"
                        title="Drools Optimum Performance Adult Dry Dog Food, Chicken Flavor, 10kg"
                        price={1274.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71PKpcLG-3L._AC_UL600_FMwebp_QL65_.jpg"
                    /> */}
                    {
                    products.map((product ,i)=>{
                        return (
                            <>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            />
                            </>
                        )
                        }
                        )

                }
                </div>
                <div className="home__row">
                    {/* <Product
                        id="4"
                        title="Mellifluous Premium Soft Velvet Cats Kittens Pet Hut House (L x W x H) 60 x 60 x 60 cm (large, Grey-Black)"
                        price={1249.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81f8pTv-yqL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="5"
                        title="Drools Absolute Calcium Bone Jar, Dog Treats For All Life Stages - 20 Pieces (300 g)"
                        price={234.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/618MTeeCweL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="6"
                        title="The Dogs Company Flyer Rubber Dog Toy, Dog Frisbee, 9 Inches, Assorted"
                        price={295.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/416urfblkkL._AC_UL600_FMwebp_QL65_.jpg"
                    /> */}
                    {
                    products.map((product ,i)=>{
                        return (
                            <>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            />
                            </>
                        )
                        }
                        )

                }
                </div> 
            </div>
            <Footer />
        </div>
    )
}

export default Home