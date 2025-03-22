import { atom, selector } from "recoil";
import { cartItemsState } from "./cartItemsState"

export const cartTotalSelector = selector({
    key: "cartTotalSelector",
    get: function ({ get }) {
        const cartItems = get(cartItemsState);
        const cartTotal = cartItems.reduce((total, items) => total + items.price, 0)
        return cartTotal;
    }
})