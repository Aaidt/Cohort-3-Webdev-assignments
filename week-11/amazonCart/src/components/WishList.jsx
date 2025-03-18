import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { WishListItemAtom } from "../store/wishItemsState"
// import "./WishListStyles.module.js"

export const WishList = () => {

    const [items, setItems] = useRecoilState(WishListItemAtom)

    // console.log(items)
    const Item = () => {
        return <div>
            <div>
                {items.map((product) => {
                    return (
                        <div
                            // style={WishList.module.css}
                            key={product.id}
                        >
                            <img style={{height:"15vh", width:"10vw"}} src={product.image} />
                            {product.title}<br />
                            {product.price}
                        </div>
                    )
                })}
            </div>
        </div>
    }



    return (

        <div style={{ textAlign: "center" }}>
            <Item />
        </div>
    )
} 