import './Home.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";

import {Product as ProductItem} from '../components/Product';
import {getProductItems as listProducts} from "../redux/actions/productItemAction";


function Home() {
    const dispatch = useDispatch();
    const getProductItems = useSelector((state) => state.getProductItems);
    const {productItems, loading, error} = getProductItems;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading ? <h2> Loading...</h2> : error ? <h2>{error}</h2> : productItems.map((product) => {
                    return (
                        <ProductItem key={product._id} productId={product._id} name={product.name} price={product.price} imageUrl={product.imageUrl} description={product.description}/>
                    )
                })}
            </div>
        </div>
    );
}

export {Home}
