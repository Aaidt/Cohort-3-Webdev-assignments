import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { WishListItemAtom } from "../store/wishItemsState"


export const WishList = () => {

    const [items, setItems] = useRecoilState(WishListItemAtom)

    const addToCart = () => {

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
                {items.map((product) => {
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
                            {product.title}<br />
                            Price: Rs.{product.price}
                            <button
                                onClick={addToCart}
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