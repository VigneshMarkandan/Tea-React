import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	
	increaseCart,
	decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts } from "../../reducks/carts/selectors";

const CartItem = ({ cart, quantity, cartId }) => {
	const selector = useSelector((state) => state);
	const dispatch = useDispatch();
	const carts = getCarts(selector);
	

	const clickPlusCart = () => {
		dispatch(increaseCart(cartId));
	};
	const clickMinusCart = () => {
		dispatch(decreaseCart(cartId));
	};

	useEffect(() => {
		console.log(cart.image);
		console.log(cart);
		console.log(carts);
	}, [cart, carts]);

	return (
		<>
			<div>
				<img
					src={'https://res.cloudinary.com/dxojr0ldl/'+ cart.image}
					class="item-image"
					alt=""
				/>
			</div>
			<div class="info">
				<div class="name">{cart.name}</div>
				<div class="info-bottom">
					<div class="price">$ {cart.price}</div>
					<div class="number">
						<span class="minus" onClick={clickMinusCart}>
							－
						</span>
						<span class="count">{quantity}</span>
						<span class="plus" onClick={clickPlusCart}>
							+
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
