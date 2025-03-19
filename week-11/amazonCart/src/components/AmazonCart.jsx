import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartItemsState } from "../store/cartItemsState"
import { WishListItemAtom } from "../store/wishItemsState"
import { cartTotalSelector } from "../store/cartTotalSelector"

export const AmazonCart = () => {

    const [cartItems, setCartItems] = useRecoilState(cartItemsState);
    const [wishListItems, setWishListItems] = useRecoilState(WishListItemAtom)
    const cartTotalPrice = useRecoilValue(cartTotalSelector)

    const deleteItem = (product) => {
        setWishListItems([...wishListItems, product]);
        setCartItems(cartItems.filter(items => items.id !== product.id))
    }

    return (
        <div>
            {cartItems.length == 0 ? (
                <p>Your cart is empty.</p>
            ) : (

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <b>CART</b>
                    {cartItems.map((product) => {
                        return (
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        borderRadius: 10,
                                        width: "15vw",
                                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                        padding: 20,
                                        margin: 20,
                                        border: "1px solid black"
                                    }}
                                    key={product.id}
                                >
                                    <img style={{ height: "15vh", width: "10vw" }} src={product.image} />
                                    <b style={{ padding: 15 }}>{product.title}<br />
                                        Price: Rs.{product.price}</b>
                                    <button onClick={() => deleteItem(product)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                    <div>Total: {cartTotalPrice}</div>
                </div>
            )}
        </div>
    )
} 