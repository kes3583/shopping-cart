import { Link } from "react-router-dom";
import "./Navbar.css";
import {useSelector} from "react-redux";

const Nav = ({onToggleDrawer}) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    function getCartItemsCount() {
        return cartItems.reduce((total, item) => total + Number(item.qty), 0);
    }

    return(
      <nav className="navbar">
        <h2>MERN Shopping Cart</h2>

        <ul className="navbar__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="user">User</Link></li>
          <li><Link to="cart">Cart <span class="cartbadge">0</span></Link></li>
          <li><Link to="cart2">Cart2 <span className="cartbadge">{getCartItemsCount()}</span> </Link></li>
        </ul>

        <div className="hamburger__menu" onClick={onToggleDrawer}>
          <div></div>
          <div></div>
          <div></div>
        </div>    
      </nav>
    )
}

export { Nav };