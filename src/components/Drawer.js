import { memo } from 'react';
import './Drawer.css'
// import { Backdrop } from './Backdrop';
import { Link } from 'react-router-dom';

const Drawer = memo(({show, onToggleDrawer}) => {
    return(
        <>
            <div className={`drawer ${show ? "show" : ""}`}>
                <ul className="drawer__links">
                    <li>
                        <Link to="cart2">Cart <span className="drawer__cartbadge">0</span></Link>
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