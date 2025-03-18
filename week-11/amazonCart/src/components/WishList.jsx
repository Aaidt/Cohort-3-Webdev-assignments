import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { WishListItemAtom } from "../store/wishItemsState"

export const WishList = () => {

    const [items, setItems] = useRecoilState(WishListItemAtom)

    // console.log(items)
    const Item = () => {
        return <div>
            <div>
                {items.map((product) => {
                    return (
                        <div key={product.id}>
                            {product.title}
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