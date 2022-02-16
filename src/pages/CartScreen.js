import "./CartScreen.css"
import { CartItem }  from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart, removeFromCart} from "../redux/actions/cartItemAction";

function CartScreen() {  
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
      dispatch(addToCart(id, qty))
  }

  // action 과 같은 이름을 가질 수 없다. removeFromCartHandler !== removeFromCart
  const removeFromCartHandler = (id) =>{
      dispatch(removeFromCart(id));
  }

    const getCartCount = () =>{
        const reducer = (total, item) => {
           console.log('total, item', total, item.price, item.qty)
            return total + Number(item.qty)
        }
        return cartItems.reduce(reducer, 0);
    }

    const getCartSubTotal = () =>{
        const reducer = (total, item) => {
            console.log('qty, item', total, item.price, item.qty)
            return Number(item.qty) * item.price + total
        }
        return cartItems.reduce(reducer, 0);
    }

  return (
    <div className="cartscreen">      
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <div>your cart is empty <Link to='/'>Go Back</Link></div>
        ) : cartItems?.map( (item, index) => (
            <CartItem key={item+index} item={item} qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler}/>
        ))}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>      
    </div>
  );
}

export { CartScreen };
