import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { WishListItemAtom } from "../store/wishItemsState"
import { cartItemsState } from "../store/cartItemsState"


export const WishList = (product) => {

    const [wishListItems, setWishListItems] = useRecoilState(WishListItemAtom)
    const [cartItems, setCartItems] = useRecoilState(cartItemsState) 

    const addToCart = () => {
        const isAlreadyAdded = cartItems.some(cartItems.id == product.id)
        if(!isAlreadyAdded){
            setCartItems([...cartItems, product]);
        }
        setWishListItems(wishListItems.filter(item => item.id == product.id))
    }


    return (
        <div>
            <div
                style={{
                    justifyItems: "center",
                    display: "flex",
                    margin: 20,
                    padding: 10
                }}
            >
                {wishListItems.map((product) => {
                    return (
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
                            <b style={{padding: 15}}>{product.title}<br />
                            Price: Rs.{product.price}</b>
                            <button
                                onClick={() => addToCart(product)}
                                style={{
                                    borderRadius: 5,
                                    margin: 10
                                }}>
                                Add to Cart
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
)

}