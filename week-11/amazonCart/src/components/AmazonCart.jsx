import React from "react";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../store/cartItemsState"

export const AmazonCart = () => {

    const [cartItems, setCartItems] = useRecoilState(cartItemsState);



    return (
        <div style={{ textAlign: "center " }}>
            {cartItems.length == 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((product) => {
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
                                <b style={{ padding: 15 }}>{product.title}<br />
                                    Price: Rs.{product.price}</b>

                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
} 