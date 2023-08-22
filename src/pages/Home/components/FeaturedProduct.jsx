
import { useEffect, useState } from 'react'
import {ProductCard} from '../../../components'

export const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:8000/featured_products")
            const data = await response.json();
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])
   

    return (
        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
            <div className="flex flex-wrap justify-center lg:flex-row">

                {products.map((product) => (
                     <ProductCard key = {product.id} product={product}/>
                ))}      
        

            </div>
        </section>
    )
}

