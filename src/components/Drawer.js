import { memo } from 'react';
import './Drawer.css'
// import { Backdrop } from './Backdrop';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const Drawer = memo(({show, onToggleDrawer}) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    function getCartItemsCount() {
        return cartItems.reduce((total, item) => total + Number(item.qty), 0);
    }
    return(
        <>
            <div className={`drawer ${show ? "show" : ""}`}>
                <ul className="drawer__links">
                    <li>
                        <Link to="cart2">Cart <span className="drawer__cartbadge">{getCartItemsCount()}</span></Link>
                    </li>
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                </ul>
            </div>
            {show && <div className="backdrop" onClick={onToggleDrawer}></div>}
            {/* <Backdrop show={show} onToggleDrawer={onToggleDrawer}/> */}
        </>
    )
})

export { Drawer };