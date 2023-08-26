import { useEffect, useState } from 'react'
import {ProductCard} from '../../../components'
import { getFeauturedList } from '../../../services';
import { toast } from 'react-toastify'

export const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            //method from services
            try{
            const data = await getFeauturedList();
            setProducts(data)
            }catch(error){
                toast.error(error.message, {closeButton: true, position: "bottom-center" });
            }
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

