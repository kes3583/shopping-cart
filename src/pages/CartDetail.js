const CartDetail = () => {
    return(
        <div>
          <h2>My shopping Cart</h2>
          <div>
            <img src="/" alt="" />
            <h3>product 1</h3>
            <div class="price">$499.99</div> 
            <button class="btn-delete">삭제</button>
          </div>
          <div>            
            <h3>Subtotal (0) items</h3>
            <div class="price">$499.99</div> 
            <button class="btn-checkout">Proceed To Checkout</button>
          </div>
          
        </div>
    )
}

export { CartDetail };