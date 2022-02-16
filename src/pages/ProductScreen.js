import "./ProductScreen.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductDetails} from "../redux/actions/productItemAction";
import {addToCart} from "../redux/actions/cartItemAction";
import {
    useNavigate,
    useParams,
} from "react-router-dom";

function ProductScreen() {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const ProductDetails = useSelector((state) => state.getProductDetails);
    const {product, loading, error} = ProductDetails;
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (product && id !== product?._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch]);

    const addToCartHandler = () =>{
        dispatch(addToCart(product?._id, qty))
        navigate('/cart2'); // router v6
        //history.push('/cart2') // router v5
    }

    return (
        <div className="productscreen">
            {loading ?
                <h2>Loading...</h2>
                : error ? <h2>{error}</h2>
                    :
                    (
                        <>
                            <div className="productscreen__left">
                                <div className="left__image">
                                    <img
                                        src={product?.imageUrl}
                                        alt={product?.name}/>
                                </div>
                                <div className="left__info">
                                    <p className="left__name">{product?.name}</p>
                                    <p className="left__price">Price: ${product?.price}</p>
                                    <p className="left__desc">{product?.description}</p>
                                </div>
                            </div>
                            <div className="productscreen__right">
                                <div className="right__info">
                                    <p>
                                        Price: <span>${product?.price}</span>
                                    </p>
                                    <p>
                                        Status: <span>{product?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                                    </p>
                                    <p>
                                        Qty
                                        <select value={qty} onChange={e => setQty(e.target.value)} name="" id="">
                                            {[...Array(product.countInStock).keys()].map((x) => {
                                                return <option key={x + 1} value={x+1}>{x + 1}</option>
                                            })}
                                        </select>
                                    </p>
                                    <p>
                                        <button type="button" onClick={addToCartHandler}>Add to Cart</button>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
        </div>
    );
}

export {ProductScreen};
