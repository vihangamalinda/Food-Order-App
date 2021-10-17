import React from 'react';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css";

const Cart = () => {
    const cartItems = <ul className={classes["cart-items"]} >{[{id:"1",name:"aaa",amount: 2, price: 12.99},].map((item)=>
    {
       return <li>{item.name}</li>
    }
    )}</ul>

    return (
        <Modal >
            {cartItems} 
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>36.54</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.button}>Order</button>
                <button className={classes["button--alt"]}>Close</button>


            </div>
        </Modal>
    )
}

export default Cart
